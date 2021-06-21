import Match from '../../models/match.model.js';
import User from '../../models/user.model.js';
import createMatch from './createMatch.js';
import joinMatch from './joinMatch.js';

const findMatch = async (data, io, socket) => {
  const user = await User.findOneAndUpdate({ name: data.name }, {
    name: data.name,
    online: true,
  }, {
    new: true,
    upsert: true,
  });
  const currentMatch = await Match.findOne({ open: true, onlineUsers: { $gt: 0, $lt: 6 } });
  if (currentMatch) {
    if (!currentMatch.onlineUsersArray.includes(user._id)) {
      const [newData, nationFound] = await joinMatch(currentMatch, user._id, data, socket);
      if (!nationFound) {
        findMatch(newData);
      }
    }
  } else {
    await createMatch(user._id, data.preferredNation, socket);
    return 1;
  }

  const finalCurrentMatch = await Match.findOne({ _id: currentMatch._id });
  if (io) {
    socket.join(finalCurrentMatch._id);
    io.to(finalCurrentMatch._id).emit('found_match_from_user', finalCurrentMatch.onlineUsers);
    if (finalCurrentMatch.onlineUsers === 6) {
      io.to(finalCurrentMatch._id).emit('starting_match', finalCurrentMatch.onlineUsers);
    }
  }
  return finalCurrentMatch.onlineUsers;
};

export default findMatch;
