import OnlineUsers from './onlineUsers.models.js';

const onlineUserCounter = async (io) => {
  await OnlineUsers.findOneAndUpdate({ instance: '1' }, { count: 0 }, {
    new: true,
    upsert: true, // Make this update into an upsert
  });

  io.on('connection', async (socket) => {
    console.log('a user connected ', new Date());

    let onlineUserCount = await OnlineUsers.findOneAndUpdate({ instance: '1' }, { $inc: { count: 1 } }, {
      new: true,
      upsert: true, // Make this update into an upsert
    });
    io.emit('online_user_count', onlineUserCount);

    socket.on('disconnect', async () => {
      console.log('User Disconnected');
      onlineUserCount = await OnlineUsers.findOneAndUpdate({ instance: '1' }, { $inc: { count: -1 } }, {
        new: true,
      });
      console.log('disconect user c', onlineUserCount);
      io.emit('online_user_count', onlineUserCount);
    });
  });
};

export default onlineUserCounter;
