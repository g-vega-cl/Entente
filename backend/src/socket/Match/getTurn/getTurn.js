/* eslint-disable camelcase */
import mongodb from 'mongodb';
import Match from '../../../models/match.model.js';
import User from '../../../models/user.model.js';
import getNationFinishTurn from './getNationFinishTurn.js';
import getTurnAfterEvent from './getTurnAfterEvent.js';
import getTurnBeforeEvent from './getTurnBeforeEvent.js';
import getTurnMilitary from './getTurnMilitary.js';
import getTurnMilitaryMove from './getTurnMilitaryMove.js';
import getRefreshMatchLoop from './getRefreshMatchLoop.js';

const { ObjectId } = mongodb;

const getTurn = async (data, io, type) => {
  const {
    user_name, match_id, eventChoice, eventId, militaryBuy, deployTerritory,
    attackTerritory,
    fromAttackTerritory,
    attackValue,
  } = data;
  const user = await User.findOne({ name: user_name });
  const match = await Match.findOne({ _id: ObjectId(match_id) });
  await new Promise((resolve) => setTimeout(resolve, 50));
  if (type === 'turnEvent') {
    if (!eventChoice) {
      getTurnBeforeEvent(match, io, user, user_name, match_id);
    } else {
      getTurnAfterEvent(match, io, user, user_name, match_id, eventChoice, eventId);
    }
  }

  if (type === 'militaryEvent') {
    getTurnMilitary(match, io, user, user_name, match_id, militaryBuy, deployTerritory);
  }

  if (type === 'attack_territory_event') {
    getTurnMilitaryMove(match, io, user, user_name, match_id, attackTerritory,
      fromAttackTerritory,
      attackValue);
  }

  if (type === 'finishTurnEvent') {
    getNationFinishTurn(match, io, user, user_name, match_id);
  }

  if (type === 'refreshMatchLoop') {
    // THINK OF A BETTER WAY.
    getRefreshMatchLoop(match, io, user, user_name, match_id);
  }
};

export default getTurn;
