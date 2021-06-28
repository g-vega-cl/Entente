import { onStartOnlineUser, onConnectOnlineUsers, onDisconnectOnlineUsers } from './onlineUsersCount/onlineUsers.controllers.js';
import findMatch from './Match/findMatch.js';
import getTurn from './Match/getTurn/getTurn.js';

const startSocket = async (io) => {
  onStartOnlineUser(io);

  io.on('connection', async (socket) => {
    onConnectOnlineUsers(io);

    socket.on('disconnect', async () => {
      onDisconnectOnlineUsers(io);
    });

    socket.on('find_match', async (data) => {
      await findMatch(data, io, socket);
    });

    socket.on('get_turn', async (data) => {
      await getTurn(data, io, socket);
    });
  });
};

export default startSocket;
