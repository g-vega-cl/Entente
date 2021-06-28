/* eslint-disable camelcase */
import EventCards from '../../../eventCards/eventCards.model.js';

const getTurnBeforeEvent = async (match, io, user, user_name, match_id) => {
  const turnData = {};
  let nationsKeys = [];
  if (match?.nations) {
    nationsKeys = Object.keys(match?.nations);
  }
  nationsKeys.forEach(async (nationKey) => {
    const nation = match.nations[nationKey];

    if (`${nation.useridentifier}` === `${user._id}`) {
      turnData.nation_name = nation.name;
      const nationEvents = await EventCards.find({ $or: [{ country: 'all' }, { country: nation.name }] });
      turnData.event = nationEvents[Math.round(Math.random() * nationEvents.length)];
      turnData.stability = nation.stability;
      turnData.innovation = nation.innovation;
      turnData.authority = nation.authority;
      turnData.hdi = nation.hdi;
      turnData.cash = nation.cash;
      turnData.territories = nation.territories;
      turnData.modifiers = nation.modifiers;
      turnData.year = match.year;
      turnData.income = 0;
      turnData.territories = [];
      turnData.turn = nation.turn;
      nation.territories.forEach((ownedTerritory) => {
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

export default getTurnBeforeEvent;
