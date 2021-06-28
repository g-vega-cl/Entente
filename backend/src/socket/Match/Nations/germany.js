const createGermany = (online, useridentifier) => {
  const nation = useridentifier ? {
    useridentifier,
    turn: 0,
    online: online || false,
    stability: 94,
    innovation: 1.15,
    authority: 15,
    hdi: 94,
    cash: 254,
    territories: ['SouthGermany', 'WestGermany', 'EastGermany'],
    focus: 'production',
    name: 'Germany',
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
  } : {
    turn: 0,
    online: online || false,
    stability: 94,
    innovation: 1.12,
    authority: 15,
    hdi: 94,
    cash: 254,
    income: 1729,
    focus: 'production',
    name: 'Germany',
    territories: ['SouthGermany', 'WestGermany', 'EastGermany'],
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

export default createGermany;
