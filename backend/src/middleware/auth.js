import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  try {
    console.log(req);
    const token = req.headers.authorization.split(' ')[1];
    const decodedData = jwt.decodedData = jwt.decode(token);
    req.userId = decodedData?.sub; // sub is googles name for the specific id.
    next();
  } catch (error) {
    res.status(401).json({ message: 'unauthorized' });
  }
};

export default auth;
