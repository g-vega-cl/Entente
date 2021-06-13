import onlineUserCounter from './onlineUsers.controllers.js';

const startSocket = async (io) => {
  onlineUserCounter(io);
};

export default startSocket;
