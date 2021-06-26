import mongoose from 'mongoose';

const modifierSchema = mongoose.Schema({
  identifier: { type: Number, required: true },
  value: { type: Number, required: true },
});
const ongoingSecretsSchema = mongoose.Schema({
  identifier: { type: Number, required: true },
  target: { type: mongoose.Schema.Types.ObjectId, required: true },
  targetName: { type: String, required: true },
});

const technologySchema = mongoose.Schema({
  identifier: { type: Number, required: true },
  reasearchCost: { type: Number, required: true },
  research: { type: Number, required: true, default: 0 },
});

const intelligenceSchema = mongoose.Schema({
  identifier: { type: Number, required: true },
  attacker: { type: mongoose.Schema.Types.ObjectId, required: true },
  attackerName: { type: String, required: true },
});

const territoriesSchema = mongoose.Schema({
  name: { type: String, required: true },
  control: { type: Number, required: true },
  income: { type: Number, required: true },
  influence: { type: Number, required: true, default: 0 },
  owner: { type: String, required: false, default: '' },
});

const nationSchema = mongoose.Schema({
  useridentifier: { type: mongoose.Schema.Types.ObjectId },
  online: { type: Boolean, required: true, default: false },
  deck: { type: Array, required: true, default: [] },
  territories: { type: Array, required: true, default: [] },
  cash: { type: Number, required: true, default: 100 },
  stability: {
    type: Number, required: true, default: 50, min: 0, max: 100,
  },
  innovation: {
    type: Number, required: true, default: 1, min: 0,
  },
  authority: {
    type: Number, required: true, default: 20, min: 0, max: 100,
  },
  hdi: {
    type: Number, required: true, default: 80, min: 0, max: 100,
  },
  focus: { type: String, required: true, default: 'production' },
  tech: [technologySchema],
  intelligence: [intelligenceSchema],
  secret: {
    operations: { type: Array, default: [] },
    ongoing: [ongoingSecretsSchema],
  },
  graph: {
    income: { type: Array, default: [] },
    cash: { type: Array, default: [] },
    stability: { type: Array, default: [] },
    hdi: { type: Array, default: [] },
    authority: { type: Array, default: [] },
  },
  modifiers: [modifierSchema],
});

// https://en.wikipedia.org/wiki/List_of_countries_by_Fragile_States_Index
// https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)
// https://en.wikipedia.org/wiki/Democracy_Index
// https://en.wikipedia.org/wiki/List_of_countries_by_Human_Development_Index
// https://en.wikipedia.org/wiki/List_of_countries_by_government_budget
// https://en.wikipedia.org/wiki/List_of_countries_by_foreign-exchange_reserves
// https://en.wikipedia.org/wiki/International_Innovation_Index
// https://en.wikipedia.org/wiki/List_of_countries_by_real_GDP_growth_rate
// https://www.globalfirepower.com/countries-listing.php
// https://www.usnews.com/news/best-countries/power-rankings
// https://www.businessinsider.in/defense/ranked-the-worlds-20-strongest-militaries/slidelist/51930339.cms
const match = mongoose.Schema({
  onlineUsers: { type: Number, required: true },
  onlineUsersArray: { type: Array, required: true, default: [] },
  open: { type: Boolean, required: true },
  year: { type: Number, required: true, default: 2021 },
  nations: {
    spain: nationSchema,
    france: nationSchema,
    italy: nationSchema,
    uk: nationSchema,
    germany: nationSchema,
    russia: nationSchema,
  },
  territories: [territoriesSchema],
});

const Match = mongoose.model('Match', match);
export default Match;
