export const home = async (req, res) => {
  res.send('Welcome');
};

export const amIAuth = async (req, res) => {
  res.send('you are auth');
};
