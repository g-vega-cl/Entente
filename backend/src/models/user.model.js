import mongoose from 'mongoose';

const user = mongoose.Schema({
  name: { type: String, required: true },
  online: { type: Boolean, required: true },
});

const User = mongoose.model('User', user);
export default User;
