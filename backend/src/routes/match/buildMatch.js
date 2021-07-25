import Match from '../../models/match.model.js';

const buildMatch = async (currentMatch) => {
  const finalCurrentMatch = await Match.findOne({ _id: currentMatch._id });

  if (finalCurrentMatch.onlineUsers === 3) {
    await Match.findOneAndUpdate({ _id: currentMatch._id }, { open: false });
    await Match.findOneAndUpdate({ _id: currentMatch._id }, { lastTurn: new Date() });
  }

  return finalCurrentMatch;
};

export default buildMatch;
