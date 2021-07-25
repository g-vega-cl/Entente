import mongoose from 'mongoose';

const eventCards = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  country: { type: String, required: true, default: 'all' },
  minYear: { type: Number, required: true, default: 2020 },
  maxYear: { type: Number, required: true, default: 2100 },
  minStability: { type: Number, required: true, default: 0 },
  maxStability: { type: Number, required: true, default: 101 },
  minInnovation: { type: Number, required: true, default: 0 },
  maxInnovation: { type: Number, required: true, default: 10 },
  minAuthority: { type: Number, required: true, default: 0 },
  maxAuthority: { type: Number, required: true, default: 101 },
  minHdi: { type: Number, required: true, default: 0 },
  maxHdi: { type: Number, required: true, default: 101 },
  minTerritories: { type: Number, required: true, default: 0 },
  maxTerritories: { type: Number, required: true, default: 20 },
  requiredTerritory: { type: Array, required: true, default: [] },
  requiredTech: { type: Array, required: true, default: [] },
  firstChoice: {
    title: { type: String, required: true },
    stability: { type: Number, required: false, default: 0 },
    innovation: { type: Number, required: false, default: 0 },
    authority: { type: Number, required: false, default: 0 },
    hdi: { type: Number, required: false, default: 0 },
    cash: { type: Number, required: false, default: 0 },
    territories: { type: Array, required: false, default: [] },
    intelligence: { type: Array, required: false, default: [] },
    secret: { type: Array, required: false, default: [] },
    tech: { type: Array, required: false, default: [] },
    modifiers: { type: Array, required: false, default: [] },
  },
  secondChoice: {
    title: { type: String, required: true },
    stability: { type: Number, required: false, default: 0 },
    innovation: { type: Number, required: false, default: 0 },
    authority: { type: Number, required: false, default: 0 },
    hdi: { type: Number, required: false, default: 0 },
    cash: { type: Number, required: false, default: 0 },
    territories: { type: Array, required: false, default: [] },
    intelligence: { type: Array, required: false, default: [] },
    secret: { type: Array, required: false, default: [] },
    tech: { type: Array, required: false, default: [] },
    modifiers: { type: Array, required: false, default: [] },
  },
});

const EventCards = mongoose.model('EventCard', eventCards);
export default EventCards;