import Match from '../../models/match.model.js';

const emitSignals = async (io, socket, currentMatch) => {
  const finalCurrentMatch = await Match.findOne({ _id: currentMatch._id });
  console.log('Find final current match');
  if (io) {
    socket.join(`${finalCurrentMatch._id}`);
    console.log('rooms in io ', io.sockets.adapter.rooms);
    io.emit('found_match_from_user', finalCurrentMatch.onlineUsers);
    console.log('emitting found match from user ');
    if (finalCurrentMatch.onlineUsers === 6) {
      io.to(finalCurrentMatch._id).emit('starting_match', finalCurrentMatch.onlineUsers);
    }
  }
  return finalCurrentMatch.onlineUsers;
};

export default emitSignals;
