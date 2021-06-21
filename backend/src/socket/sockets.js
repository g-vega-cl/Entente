import { onStartOnlineUser, onConnectOnlineUsers, onDisconnectOnlineUsers } from './onlineUsersCount/onlineUsers.controllers.js';
import findMatch from './Match/findMatch.js';

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
  });
};

export default startSocket;
