import Index from './index.models.js';

export const home = async (req, res) => {
  const newIndex = new Index({
    logged: 1,
    date: new Date(),
  });
  newIndex.save();
  res.send('Welcome');
};

export const amIAuth = async (req, res) => {
  res.send('you are auth');
};
