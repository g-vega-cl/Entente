import mongoose from 'mongoose';

const online = mongoose.Schema({
  instance: { type: Number, required: true },
  count: { type: Number, required: true },
});

const OnlineUsers = mongoose.model('OnlineUser', online);
export default OnlineUsers;
