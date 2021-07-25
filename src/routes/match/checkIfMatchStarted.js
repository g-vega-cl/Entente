import Match from '../../models/match.model.js';
import User from '../../models/user.model.js';
import getTurn from '../../getTurn/getTurn.js';

const checkIfMatchStarted = async (data) => {
  const currentMatch = await Match.findById(data.matchID);
  const getTurnData = {
    user_name: data.name,
    match_id: data.matchID,
  };
  if (!currentMatch?.open) {
    const turnData = await getTurn(getTurnData, 'turnEvent');
    return turnData;
  }
  return {
    event: false,
    allTerritories: [],
  };
};

export default checkIfMatchStarted;
