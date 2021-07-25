/* eslint-disable camelcase */
import mongodb from 'mongodb';
import Match from '../models/match.model.js';
import User from '../models/user.model.js';
import getNationFinishTurn from './getNationFinishTurn.js';
import getTurnAfterEvent from './getTurnAfterEvent.js';
import getTurnBeforeEvent from './getTurnBeforeEvent.js';
import getTurnMilitary from './getTurnMilitary.js';
import getTurnMilitaryMove from './getTurnMilitaryMove.js';
import getRefreshMatchLoop from './getRefreshMatchLoop.js';

const { ObjectId } = mongodb;

const getTurn = async (data, type, io) => {
  const {
    user_name, match_id, eventChoice, eventId, militaryBuy, deployTerritory,
    attackTerritory,
    fromAttackTerritory,
    attackValue,
  } = data;
  const user = await User.findOne({ name: user_name });
  const match = await Match.findOne({ _id: ObjectId(match_id) });
  const turnData = { current: {} };
  await new Promise((resolve) => setTimeout(resolve, 50));
  if (type === 'turnEvent') {
    if (!eventChoice) {
      turnData.current = await getTurnBeforeEvent(match, user);
    } else {
      turnData.current = await getTurnAfterEvent(match, user, match_id, eventChoice, eventId);
    }
  }

  if (type === 'buy_military') {
    turnData.current = await getTurnMilitary(match, user, match_id, militaryBuy, deployTerritory);
  }

  if (type === 'attack_territory_event') {
    turnData.current = await getTurnMilitaryMove(match, user, match_id, attackTerritory,
      fromAttackTerritory,
      attackValue);
  }

  if (type === 'finishTurnEvent') {
    getNationFinishTurn(match, io, user, user_name, match_id);
  }

  if (type === 'refreshMatch') {
    turnData.current = await getRefreshMatchLoop(match, user, match_id);
  }

  return turnData.current;
};

export default getTurn;
