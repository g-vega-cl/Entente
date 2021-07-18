import Match from '../../models/match.model.js';
import User from '../../models/user.model.js';
import createMatch from './createMatch.js';
import joinMatch from './joinMatch.js';
import buildMatch from './buildMatch.js';

const findMatch = async (data) => {
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
      const [newData, nationFound] = await joinMatch(currentMatch, user._id, data);
      if (!nationFound) {
        await findMatch(newData);
      }
    } else {
      return currentMatch;
    }
  } else {
    const finalCurrentMatch = await createMatch(user._id, data.preferredNation);
    return finalCurrentMatch;
  }

  const finalCurrentMatch = await buildMatch(currentMatch);
  return finalCurrentMatch;
};

export default findMatch;
