import express from 'express';
import findMatch from './findMatch.js';
import checkIfMatchStarted from './checkIfMatchStarted.js';

const router = express();

router.post('/find_match', async (req, res) => {
  const data = req.body;
  if (data.name) {
    const finalCurrentMatch = await findMatch(data);
    res.status(200).send({ matchID: finalCurrentMatch?._id });
    return;
  }
  res.status(500).send('No data');
});

router.post('/get_match_data', async (req, res) => {
  const data = req.body;
  if (data.action === 'wait_start_match') {
    const result = await checkIfMatchStarted(data);
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(200).send({
        event: false,
        allTerritories: [],
      });
    }
  }
});

export default router;
