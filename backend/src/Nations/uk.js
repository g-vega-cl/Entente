const createUK = (online, useridentifier) => {
  const nation = useridentifier ? {
    useridentifier,
    turn: 0,
    online: online || false,
    stability: 75,
    innovation: 1.42,
    authority: 30,
    hdi: 88,
    cash: 209,
    territories: ['NorthUK', 'MidUK', 'SouthUK'],
    focus: 'production',
    intelligence: [],
    name: 'UK',
    secret: {
      operations: [],
      ongoing: [],
    },
    tech: [],
    graph: {
      income: [],
      cash: [],
      stability: [],
      hdi: [],
      authority: [],
    },
    modifiers: [],
  } : {
    online: online || false,
    stability: 75,
    innovation: 1.42,
    authority: 30,
    hdi: 88,
    cash: 209,
    income: 966,
    focus: 'production',
    territories: ['NorthUK', 'MidUK', 'SouthUK'],
    turn: 0,
    name: 'UK',
    intelligence: [],
    secret: {
      operations: [],
      ongoing: [],
    },
    tech: [],
    graph: {
      income: [],
      cash: [],
      stability: [],
      hdi: [],
      authority: [],
    },
    modifiers: [],
  };
  return nation;
};

export default createUK;
