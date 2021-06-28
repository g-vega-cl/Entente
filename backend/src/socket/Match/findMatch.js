import Match from '../../models/match.model.js';
import User from '../../models/user.model.js';
import createMatch from './createMatch.js';
import joinMatch from './joinMatch.js';
import emitMatchBuldingSignals from './emitMatchBuildingSignals.js';

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
        await findMatch(newData);
      }
    }
  } else {
    const matchOnlineUsers = await createMatch(user._id, data.preferredNation, socket, io);
    return matchOnlineUsers;
  }

  const matchOnlineUsers = await emitMatchBuldingSignals(io, socket, currentMatch);
  return matchOnlineUsers;
};

export default findMatch;
