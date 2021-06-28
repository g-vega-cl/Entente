const createRussia = (online, useridentifier) => {
  const nation = useridentifier ? {
    useridentifier,
    turn: 0,
    online: online || false,
    stability: 33,
    innovation: 0.2,
    authority: 73,
    hdi: 64,
    cash: 605,
    territories: ['EastRussia', 'WestRussia'],
    focus: 'production',
    intelligence: [],
    name: 'Russia',
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
    stability: 33,
    innovation: 0.2,
    authority: 73,
    hdi: 64,
    cash: 605,
    income: 468,
    focus: 'production',
    territories: ['EastRussia', 'WestRussia'],
    turn: 0,
    name: 'Russia',
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

export default createRussia;
