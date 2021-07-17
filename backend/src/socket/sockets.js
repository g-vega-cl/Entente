import { onStartOnlineUser, onDisconnectOnlineUsers } from './onlineUsersCount/onlineUsers.controllers.js';
import findMatch from './Match/findMatch.js';
import getTurn from '../getTurn/getTurn.js';
import matchLoop from './matchLoop.js';

const startSocket = async (io) => {
  onStartOnlineUser(io);
  matchLoop(io);

  io.on('connection', async (socket) => {
    socket.on('disconnect', async () => {
      onDisconnectOnlineUsers(io);
    });

    socket.on('find_match', async (data) => {
      await findMatch(data, io);
    });

    socket.on('get_turn', async (data) => {
      await getTurn(data, io, 'turnEvent');
    });

    socket.on('buy_military_influence', async (data) => {
      await getTurn(data, io, 'militaryEvent');
    });

    socket.on('attack_territory', async (data) => {
      await getTurn(data, io, 'attack_territory_event');
    });

    socket.on('finishTurn', async (data) => {
      await getTurn(data, io, 'finishTurnEvent');
    });

    socket.on('refresh_match_with_loop', async (data) => {
      await getTurn(data, io, 'refreshMatchLoop');
    });
  });
};

export default startSocket;
