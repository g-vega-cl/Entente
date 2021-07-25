import express from 'express';
import findMatch from './findMatch.js';
import checkIfMatchStarted from './checkIfMatchStarted.js';
import getTurn from '../../getTurn/getTurn.js';

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
      res.status(500).send({
        event: false,
        allTerritories: [],
      });
    }
  }
  if (data.action === 'refresh_match') {
    data.match_id = data.matchID;
    data.user_name = data.name;
    const result = await getTurn(data, 'refreshMatch');
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(500).send(data);
    }
  }
});

router.post('/buy_military_influence', async (req, res) => {
  const data = req.body;
  const result = await getTurn(data, 'buy_military');
  if (result) {
    res.status(200).send(result);
  } else {
    res.status(500).send(data);
  }
});

router.post('/attack_territory_event', async (req, res) => {
  const data = req.body;
  const result = await getTurn(data, 'attack_territory_event');
  if (result) {
    res.status(200).send(result);
  } else {
    res.status(500).send(data);
  }
});

router.post('/send_turn_event', async (req, res) => {
  const data = req.body;
  const result = await getTurn(data, 'turnEvent');
  if (result) {
    res.status(200).send(result);
  } else {
    res.status(500).send(data);
  }
});

export default router;
