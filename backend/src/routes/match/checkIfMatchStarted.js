import Match from '../../models/match.model.js';
import getTurn from '../../getTurn/getTurn.js';

const checkIfMatchStarted = async (data) => {
  const currentMatch = await Match.findById(data.matchID);
  // MATCH HAS STARTED. SEND MATCH DATA.
  if (currentMatch) {
    return currentMatch;
  }
  return {
    event: false,
    allTerritories: [],
  };
};

export default checkIfMatchStarted;
