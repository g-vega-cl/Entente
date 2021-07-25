import mongoose from 'mongoose';

const user = mongoose.Schema({
  name: { type: String, required: true },
  online: { type: Boolean, required: true },
  ai: {
    online: { type: Boolean, required: true, default: false },
    lastYearPlayed: { type: Number, required: true, default: 2020 },
  },
});

const User = mongoose.model('User', user);
export default User;
