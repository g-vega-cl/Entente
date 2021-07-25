/* eslint-disable no-param-reassign */
import mongodb from 'mongodb';
import Match from '../../models/match.model.js';
import getRandomNationName from '../../Nations/getRandomNationName.js';

const { ObjectId } = mongodb;

const joinMatch = async (currentMatch, userId, data) => {
  const nationFound = { found: false };
  Object.keys(currentMatch.nations).every(async (key) => {
    if (key.toLocaleLowerCase() === data.preferredNation.toLocaleLowerCase()) {
      let availiableNation = {};
      if (!currentMatch.nations[key].online) {
        const newNation = currentMatch.nations[key];
        newNation.online = true;
        newNation.useridentifier = userId;
        switch (data.preferredNation) {
          case 'spain':
            availiableNation = await Match.findOneAndUpdate({
              _id: new ObjectId(currentMatch._id),
            },
            {
              onlineUsers: currentMatch.onlineUsers + 1,
              onlineUsersArray: [...currentMatch.onlineUsersArray, userId],
              nations: {
                ...currentMatch.nations,
                spain: {
                  ...newNation,
                },
              },
            },
            { new: true });
            break;
          case 'france':
            availiableNation = await Match.findOneAndUpdate({
              _id: new ObjectId(currentMatch._id),
            },
            {
              onlineUsers: currentMatch.onlineUsers + 1,
              onlineUsersArray: [...currentMatch.onlineUsersArray, userId],
              nations: {
                ...currentMatch.nations,
                france: { ...newNation },
              },
            },
            { new: true });

            break;
          case 'uk':
            availiableNation = await Match.findOneAndUpdate({
              _id: new ObjectId(currentMatch._id),
            },
            {
              onlineUsers: currentMatch.onlineUsers + 1,
              onlineUsersArray: [...currentMatch.onlineUsersArray, userId],
              nations: {
                ...currentMatch.nations,
                uk: { ...newNation },
              },
            },
            { new: true });

            break;
          case 'germany':
            availiableNation = await Match.findOneAndUpdate({
              _id: new ObjectId(currentMatch._id),
            },
            {
              onlineUsers: currentMatch.onlineUsers + 1,
              onlineUsersArray: [...currentMatch.onlineUsersArray, userId],
              nations: {
                ...currentMatch.nations,
                germany: { ...newNation },
              },
            },
            { new: true });

            break;
          case 'russia':
            availiableNation = await Match.findOneAndUpdate({
              _id: new ObjectId(currentMatch._id),
            },
            {
              onlineUsers: currentMatch.onlineUsers + 1,
              onlineUsersArray: [...currentMatch.onlineUsersArray, userId],
              nations: {
                ...currentMatch.nations,
                russia: { ...newNation },
              },
            },
            { new: true });

            break;
          case 'italy':
            availiableNation = await Match.findOneAndUpdate({
              _id: new ObjectId(currentMatch._id),
            },
            {
              onlineUsers: currentMatch.onlineUsers + 1,
              onlineUsersArray: [...currentMatch.onlineUsersArray, userId],
              nations: {
                ...currentMatch.nations,
                italy: { ...newNation },
              },
            },
            { new: true });
            break;
          default:
            break;
        }
        if (Object.keys(availiableNation).length === 0) {
          data.preferredNation = getRandomNationName();
        } else {
          nationFound.found = true;
        }
      } else {
        data.preferredNation = getRandomNationName();
      }
      return false;
    }
    return true;
  });
  return [data, nationFound.found];
};

export default joinMatch;
