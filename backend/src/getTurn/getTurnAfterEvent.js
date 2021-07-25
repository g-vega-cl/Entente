/* eslint-disable camelcase */
import mongodb from 'mongodb';
import EventCards from '../eventCards/eventCards.model.js';
import Match from '../models/match.model.js';

const { ObjectId } = mongodb;

const getTurnAfterEvent = async (match, user, match_id, eventChoice, eventId) => {
  const turnData = {};
  let nationsKeys = [];
  if (match?.nations) {
    nationsKeys = Object.keys(match?.nations);
  }

  // eslint-disable-next-line no-restricted-syntax
  for await (const nationKey of nationsKeys) {
    const nation = match.nations[nationKey];
    // see event and change relevant values.
    if (`${nation.useridentifier}` === `${user._id}`) {
      turnData.nation_name = nation.name;
      const event = await EventCards.findOne({ _id: eventId });
      const eventKeys = Object.keys(event[eventChoice]);
      eventKeys.forEach((eventKey) => {
        if (eventKey === 'stability') {
          nation.stability += event[eventChoice][eventKey];
        }
        if (eventKey === 'authority') {
          nation.authority += event[eventChoice][eventKey];
        }
        if (eventKey === 'hdi') {
          nation.hdi += event[eventChoice][eventKey];
        }
        if (eventKey === 'cash') {
          nation.cash += event[eventChoice][eventKey];
        }
        if (eventKey === 'innovation') {
          nation.innovation += event[eventChoice][eventKey];
        }
        if (eventKey === 'modifiers') {
          if (Array.isArray(event[eventChoice][eventKey])) {
            event[eventChoice][eventKey].forEach((modifier) => {
              nation.modifiers.push(modifier);
            });
          }
        }
      });

      nation.turn = 1;
      let incomeModifier = 1;
      nation.modifiers.forEach((modifier) => {
        if (modifier.name === 'income') {
          incomeModifier *= modifier.value;
        }
      });

      let currentIncome = 0;
      match.nations[nationKey].territories.forEach((ownedTerritory) => {
        match.territories.forEach((matchTerritory) => {
          if (ownedTerritory === matchTerritory.name) {
            currentIncome += matchTerritory.income * incomeModifier;
          }
        });
      });

      nation.cash += currentIncome;

      const newNation = await Match.findOneAndUpdate({
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
      { new: true });

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
            turnData.income += matchTerritory.income * incomeModifier;
          }
        });
      });
      turnData.allTerritories = match.territories;
      turnData.lastTurn = match.lastTurn;
    }
  }
  return turnData;
};

export default getTurnAfterEvent;
