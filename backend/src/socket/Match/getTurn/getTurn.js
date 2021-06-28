/* eslint-disable camelcase */
import mongodb from 'mongodb';
import Match from '../../../models/match.model.js';
import User from '../../../models/user.model.js';
import getTurnAfterEvent from './getTurnAfterEvent.js';
import getTurnBeforeEvent from './getTurnBeforeEvent.js';

const { ObjectId } = mongodb;

const getTurn = async (data, io) => {
  const {
    user_name, match_id, eventChoice, eventId,
  } = data;
  const user = await User.findOne({ name: user_name });
  const match = await Match.findOne({ _id: ObjectId(match_id) });
  await new Promise((resolve) => setTimeout(resolve, 50));
  if (!eventChoice) {
    getTurnBeforeEvent(match, io, user, user_name, match_id);
  } else {
    getTurnAfterEvent(match, io, user, user_name, match_id, eventChoice, eventId);
  }
};

export default getTurn;
