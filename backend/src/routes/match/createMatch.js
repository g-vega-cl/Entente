import Match from '../../models/match.model.js';
import createSpain from '../../Nations/spain.js';
import createFrance from '../../Nations/france.js';
import createGermany from '../../Nations/germany.js';
import createRussia from '../../Nations/russia.js';
import createUK from '../../Nations/uk.js';
import createItaly from '../../Nations/italy.js';
import buildMatch from './buildMatch.js';
import defaultTerritories from '../../Nations/defaultTerritories.js';
import { createCardDatabase } from '../../eventCards/eventCards.js';

const createMatch = async (userId, preferredNation) => {
  await createCardDatabase();
  let finalCurrentMatch = {};
  if (preferredNation === 'spain') {
    const newMatch = new Match({
      onlineUsers: 1,
      open: true,
      onlineUsersArray: [userId],
      nations: {
        spain: createSpain(true, userId),
        italy: createItaly(),
        france: createFrance(),
        uk: createUK(),
        russia: createRussia(),
        germany: createGermany(),
      },
      territories: defaultTerritories,
    });
    await newMatch.save(); 
    finalCurrentMatch = await buildMatch(newMatch);
  }
  if (preferredNation === 'italy') {
    const newMatch = new Match({
      onlineUsers: 1,
      open: true,
      onlineUsersArray: [userId],
      nations: {
        spain: createSpain(),
        italy: createItaly(true, userId),
        france: createFrance(),
        uk: createUK(),
        russia: createRussia(),
        germany: createGermany(),
      },
      territories: defaultTerritories,
    });
    await newMatch.save();
    finalCurrentMatch = await buildMatch(newMatch);
  }

  if (preferredNation === 'france') {
    const newMatch = new Match({
      onlineUsers: 1,
      open: true,
      onlineUsersArray: [userId],
      nations: {
        spain: createSpain(),
        italy: createItaly(),
        france: createFrance(true, userId),
        uk: createUK(),
        russia: createRussia(),
        germany: createGermany(),
      },
      territories: defaultTerritories,
    });
    await newMatch.save();
    finalCurrentMatch = await buildMatch(newMatch);
  }

  if (preferredNation === 'uk') {
    const newMatch = new Match({
      onlineUsers: 1,
      open: true,
      onlineUsersArray: [userId],
      nations: {
        spain: createSpain(),
        italy: createItaly(),
        france: createFrance(),
        uk: createUK(true, userId),
        russia: createRussia(),
        germany: createGermany(),
      },
      territories: defaultTerritories,
    });
    await newMatch.save();
    finalCurrentMatch = await buildMatch(newMatch);
  }

  if (preferredNation === 'russia') {
    const newMatch = new Match({
      onlineUsers: 1,
      open: true,
      onlineUsersArray: [userId],
      nations: {
        spain: createSpain(),
        italy: createItaly(),
        france: createFrance(),
        uk: createUK(),
        russia: createRussia(true, userId),
        germany: createGermany(),
      },
      territories: defaultTerritories,
    });
    await newMatch.save();
    finalCurrentMatch = await buildMatch(newMatch);
  }

  if (preferredNation === 'germany') {
    const newMatch = new Match({
      onlineUsers: 1,
      open: true,
      onlineUsersArray: [userId],
      nations: {
        spain: createSpain(),
        italy: createItaly(),
        france: createFrance(),
        uk: createUK(),
        russia: createRussia(),
        germany: createGermany(true, userId),
      },
      territories: defaultTerritories,
    });
    await newMatch.save();
    finalCurrentMatch = await buildMatch(newMatch);
  }

  return finalCurrentMatch;
};

export default createMatch;
