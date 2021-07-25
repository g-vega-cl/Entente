/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import mongodb from 'mongodb';
import Match from '../models/match.model.js';

const { ObjectId } = mongodb;

const getNationFinishTurn = async (
  match, io, user, user_name, match_id,
) => {
  const turnData = {};
  let nationsKeys = [];
  if (match?.nations) {
    nationsKeys = Object.keys(match?.nations);
  }
  nationsKeys.forEach(async (nationKey) => {
    const nation = match.nations[nationKey];
    if (`${nation.useridentifier}` === `${user._id}`) {
      turnData.nation_name = nation.name;
      nation.finishTurn = true;
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
      await new Promise((resolve) => setTimeout(resolve, 55));

      turnData.stability = newNation.nations[nationKey].stability;
      turnData.innovation = newNation.nations[nationKey].innovation;
      turnData.authority = newNation.nations[nationKey].authority;
      turnData.hdi = newNation.nations[nationKey].hdi;
      turnData.cash = newNation.nations[nationKey].cash;
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
      io.to(`${match._id}`).emit(`turn/${user_name}-${match_id}`, turnData);
    }
  });
};

export default getNationFinishTurn;
