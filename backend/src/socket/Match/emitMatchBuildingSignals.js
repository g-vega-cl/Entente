import Match from '../../models/match.model.js';

const emitMatchBuldingSignals = async (io, socket, currentMatch) => {
  await new Promise((resolve) => setTimeout(resolve, 50));
  const finalCurrentMatch = await Match.findOne({ _id: currentMatch._id });
  if (io) {
    socket.join(`${finalCurrentMatch._id}`);
    io.emit('found_match_from_user', finalCurrentMatch.onlineUsers);
    if (finalCurrentMatch.onlineUsers === 2) {
      io.to(`${finalCurrentMatch._id}`).emit('starting_match', finalCurrentMatch._id);
      await Match.findOneAndUpdate({ _id: currentMatch._id }, { open: false });
    }
  }
  return finalCurrentMatch.onlineUsers;
};

export default emitMatchBuldingSignals;
