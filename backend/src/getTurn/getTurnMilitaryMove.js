/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import mongodb from 'mongodb';
import Match from '../models/match.model.js';

const { ObjectId } = mongodb;

const getTurnMilitaryMove = async (
  match, user, match_id, attackTerritory,
  fromAttackTerritory,
  attackValue,
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
      const attackValuesObject = {
        fromAttackTerritoryInfluence: 0,
        toAttackTerritoryInfluence: 0,
        fromAttackTerritoryIndex: 0,
        toAttackTerritoryIndex: 0,
        toAttackTerritoryOwned: false,
      };
      match.territories.forEach((milMatchTerritory, index) => {
        if (milMatchTerritory.name === fromAttackTerritory) {
          attackValuesObject.fromAttackTerritoryInfluence = milMatchTerritory.influence;
          attackValuesObject.fromAttackTerritoryIndex = index;
        }
        if (milMatchTerritory.name === attackTerritory) {
          attackValuesObject.toAttackTerritoryInfluence = milMatchTerritory.influence;
          attackValuesObject.toAttackTerritoryIndex = index;
          if (milMatchTerritory.owner === nation.name) {
            attackValuesObject.toAttackTerritoryOwned = true;
          }
        }
      });
      if (attackValuesObject.fromAttackTerritoryInfluence >= attackValue) {
        if (!attackValuesObject.toAttackTerritoryOwned) {
          match.territories[attackValuesObject.fromAttackTerritoryIndex].influence -= attackValue;
          match.territories[attackValuesObject.toAttackTerritoryIndex].influence -= attackValue / 3;
          if (match.territories[attackValuesObject.toAttackTerritoryIndex].influence < 0) {
            match.territories[attackValuesObject.toAttackTerritoryIndex].owner = nation.name;
          }
        } else {
          match.territories[attackValuesObject.fromAttackTerritoryIndex].influence -= attackValue;
          match.territories[attackValuesObject.toAttackTerritoryIndex].influence += attackValue;
        }
      }

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
    }
  }
  return turnData;
};

export default getTurnMilitaryMove;
