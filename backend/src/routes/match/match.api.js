import express from 'express';
import findMatch from './findMatch.js';

const router = express();

router.post('/find_match', async (req, res) => {
  const data = req.body;
  console.log('DATA', data, new Date());
  if (data.name) {
    await findMatch(data);
    res.status(200).send('Success');
    return;
  }
  res.status(500).send('No data');
});

router.post('/get_match_data', async (req, res) => {
  const data = req.body;
  console.log('DATA', data, new Date());
  if (data.name) {
    await findMatch(data);
    res.status(200).send('Success');
    return;
  }
  res.status(500).send('No data');
});

export default router;
