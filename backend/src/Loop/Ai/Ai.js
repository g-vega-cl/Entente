import { v4 as uuidv4 } from 'uuid';
import Match from '../../models/match.model.js';
import User from '../../models/user.model.js';
import EventCards from '../../eventCards/eventCards.model.js';
import findMatch from '../../routes/match/findMatch.js';
import getTurnAfterEvent from '../../getTurn/getTurnAfterEvent.js';
import getTurnMilitaryMove from '../../getTurn/getTurnMilitaryMove.js';

const aiLoop = async () => {
  const openMatches = await Match.find({ open: true });
  const closedMatches = await Match.find({ open: false });
  // eslint-disable-next-line no-restricted-syntax
  for await (const match of openMatches) {
    if ((new Date().getTime() - new Date(match?.lastTurn).getTime()) / 1000 > 60) {
      const data = {
        name: `AI_BOT_${uuidv4()}`,
        preferredNation: 'France',
      };
      await findMatch(data);
    }
  }

  const allUsers = await User.find();

  // eslint-disable-next-line no-restricted-syntax
  for await (const match of closedMatches) {
    // eslint-disable-next-line no-restricted-syntax
    for await (const user of allUsers) {
      if (user.name && user.name.includes('AI_BOT')) {
        // eslint-disable-next-line no-restricted-syntax
        let nationName = '';
        const matchNations = Object.keys(match.nations);
        // eslint-disable-next-line no-restricted-syntax
        for await (const nationKey of matchNations) {
          const nation = match.nations[nationKey];
          if (`${user?._id}` === `${nation?.useridentifier}`) {
            nationName = nation?.name;
          }
        }
        if (match?.year > user?.ai?.lastYearPlayed) {
          const nationEvents = await EventCards.find({ $or: [{ country: 'all' }, { country: nationName }] });
          const event = nationEvents[Math.round(Math.random() * nationEvents.length)];
          const choice = Math.random() * 2 > 1 ? 'firstChoice' : 'secondChoice';
          await getTurnAfterEvent(match, user, match?._id, choice, event._id);

          await User.findOneAndUpdate({ _id: user._id }, {
            name: user.name,
            online: true,
            ai: {
              online: true,
              lastYearPlayed: user?.ai?.lastYearPlayed + 1,
            },
          }, {
            new: true,
          });
        } else {
          const myStrongestTerritory = { name: '', influence: 0 };
          const theWeakestTerritory = { name: '', influence: 9999999999 };
          match.territories.forEach((territory) => {
            if (territory.owner.toLocaleLowerCase() === nationName.toLocaleLowerCase()) {
              if (territory.influence > myStrongestTerritory.influence) {
                myStrongestTerritory.influence = territory.influence;
                myStrongestTerritory.name = territory.name;
              }
            } else if (territory.influence < theWeakestTerritory.influence) {
              theWeakestTerritory.influence = territory.influence;
              theWeakestTerritory.name = territory.name;
            }
          });
          // ATTACK WITH STRONGEST TO WEAKEST.
          if (myStrongestTerritory.name && theWeakestTerritory.name) {
            await getTurnMilitaryMove(match, user, match._id, theWeakestTerritory.name,
              myStrongestTerritory.name,
              (myStrongestTerritory.influence * 0.2).toFixed());
          }
        }
      }
    }
  }
};

export default aiLoop;
