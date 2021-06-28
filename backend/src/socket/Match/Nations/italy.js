const createItaly = (online, useridentifier) => {
  const nation = useridentifier ? {
    useridentifier,
    turn: 0,
    online: online || false,
    stability: 48,
    innovation: 0.51,
    authority: 23,
    hdi: 75,
    cash: 200,
    territories: ['NorthItaly', 'SouthItaly'],
    focus: 'production',
    name: 'Italy',
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
    online: online || false,
    stability: 48,
    innovation: 0.51,
    authority: 23,
    hdi: 75,
    cash: 200,
    focus: 'production',
    territories: ['NorthItaly', 'SouthItaly'],
    name: 'Italy',
    turn: 0,
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

export default createItaly;
