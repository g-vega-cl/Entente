import Match from '../../models/match.model.js';
import createSpain from './Nations/spain.js';
import createFrance from './Nations/france.js';
import createGermany from './Nations/germany.js';
import createRussia from './Nations/russia.js';
import createUK from './Nations/uk.js';
import createItaly from './Nations/italy.js';
import emitSignals from './emitSignals.js';

const createMatch = async (userId, preferredNation, socket, io) => {
  switch (preferredNation) {
    case 'spain':
      await new Match({
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
      }).save().then(async (newMatch) => {
        await socket.join(`${newMatch._id}`);
        const matchOnlineUsers = await emitSignals(io, socket, newMatch);
        return matchOnlineUsers;
      });
      break;
    case 'italy':
      await new Match({
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
      }).save().then(async (newMatch) => {
        await socket.join(`${newMatch._id}`);
        const matchOnlineUsers = await emitSignals(io, socket, newMatch);
        return matchOnlineUsers;
      });
      break;
    case 'france':
      await new Match({
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
      }).save().then(async (newMatch) => {
        await socket.join(`${newMatch._id}`);
        const matchOnlineUsers = await emitSignals(io, socket, newMatch);
        return matchOnlineUsers;
      });
      break;
    case 'uk':
      await new Match({
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
      }).save().then(async (newMatch) => {
        await socket.join(`${newMatch._id}`);
        const matchOnlineUsers = await emitSignals(io, socket, newMatch);
        return matchOnlineUsers;
      });
      break;
    case 'russia':
      await new Match({
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
      }).save().then(async (newMatch) => {
        await socket.join(`${newMatch._id}`);
        const matchOnlineUsers = await emitSignals(io, socket, newMatch);
        return matchOnlineUsers;
      });
      break;
    default:
      await new Match({
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
      }).save().then(async (newMatch) => {
        await socket.join(`${newMatch._id}`);
        const matchOnlineUsers = await emitSignals(io, socket, newMatch);
        return matchOnlineUsers;
      });
      break;
  }
};

export default createMatch;
