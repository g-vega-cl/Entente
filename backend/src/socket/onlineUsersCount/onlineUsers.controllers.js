import OnlineUsers from './onlineUsers.models.js';

export const onStartOnlineUser = async () => {
  await OnlineUsers.findOneAndUpdate({ instance: '1' }, { count: 0 }, {
    new: true,
    upsert: true,
  });
};

export const onDisconnectOnlineUsers = async (io) => {
  const onlineUserCount = await OnlineUsers.findOneAndUpdate({ instance: '1' }, { $inc: { count: -1 } }, {
    new: true,
  });
  io.emit('online_user_count', onlineUserCount);
};
