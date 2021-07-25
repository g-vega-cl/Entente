import mongoose from 'mongoose';

const indexSchema = mongoose.Schema({
  logged: { type: Number, required: true },
  date: { type: Date, required: true },
});

export default mongoose.model('Index', indexSchema);
