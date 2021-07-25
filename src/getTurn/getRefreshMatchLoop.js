/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import mongodb from 'mongodb';
import Match from '../models/match.model.js';
import getTurnBeforeEvent from './getTurnBeforeEvent.js';

const { ObjectId } = mongodb;

const getRefreshMatchLoop = async (
  match, user, match_id,
) => {
  const turnData = {};
  let nationsKeys = [];
  if (match?.nations) {
    nationsKeys = Object.keys(match?.nations);
  }
  // eslint-disable-next-line no-restricted-syntax
  for await (const nationKey of nationsKeys) {
    const nation = match.nations[nationKey];
    if (`${nation.useridentifier}` === `${user._id}`) {
      turnData.nation_name = nation.name;
      const newNation = await Match.findOneAndUpdate(
        {
          _id: new ObjectId(match_id),
        },
        {
          ...match,
          nations: {
            ...match.nations,
            [nationKey]: {
              ...nation,
            },
          },
        },
        { new: true },
      );
      turnData.cash = newNation.nations[nationKey].cash;
      turnData.stability = newNation.nations[nationKey].stability;
      turnData.innovation = newNation.nations[nationKey].innovation;
      turnData.authority = newNation.nations[nationKey].authority;
      turnData.hdi = newNation.nations[nationKey].hdi;
      turnData.territories = newNation.nations[nationKey].territories;
      turnData.modifiers = newNation.nations[nationKey].modifiers;
      turnData.year = match.year;
      turnData.income = 0;
      turnData.territories = [];
      turnData.turn = newNation.nations[nationKey].turn;
      newNation.nations[nationKey].territories.forEach((ownedTerritory) => {
        match.territories.forEach((matchTerritory) => {
          if (ownedTerritory === matchTerritory.name) {
            turnData.territories.push(matchTerritory);
            turnData.income += matchTerritory.income;
          }
        });
      });
      turnData.allTerritories = match.territories;
      turnData.lastTurn = match.lastTurn;
    }
  }

  if (((new Date().getTime() - new Date(match?.lastTurn).getTime()) / 1000) > 75) {
    const newTurnData = await getTurnBeforeEvent(match, user);
    await Match.findOneAndUpdate({ _id: match._id }, { lastTurn: new Date() });
    await Match.findOneAndUpdate({ _id: match._id }, { year: match?.year + 1 });
    return newTurnData;
  }
  return turnData;
};

export default getRefreshMatchLoop;
