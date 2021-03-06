const createFrance = (online, useridentifier) => {
  const nation = useridentifier ? {
    useridentifier,
    turn: 0,
    online: online || false,
    stability: 76,
    innovation: 1.12,
    authority: 25,
    hdi: 78,
    cash: 212,
    territories: ['SouthFrance', 'EastFrance', 'WestFrance'],
    focus: 'production',
    intelligence: [],
    name: 'France',
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
    stability: 76,
    innovation: 1.12,
    authority: 25,
    hdi: 78,
    cash: 212,
    territories: ['SouthFrance', 'EastFrance', 'WestFrance'],
    focus: 'production',
    intelligence: [],
    name: 'France',
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

export default createFrance;
