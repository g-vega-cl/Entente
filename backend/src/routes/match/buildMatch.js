import Match from '../../models/match.model.js';

const buildMatch = async (currentMatch) => {
  await new Promise((resolve) => setTimeout(resolve, 50));
  const finalCurrentMatch = await Match.findOne({ _id: currentMatch._id });

  if (finalCurrentMatch.onlineUsers === 2) {
    await Match.findOneAndUpdate({ _id: currentMatch._id }, { open: false });
  }

  return finalCurrentMatch;
};

export default buildMatch;
