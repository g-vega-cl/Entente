const createSpain = (online, useridentifier) => {
  const nation = useridentifier ? {
    useridentifier,
    turn: 0,
    online: online || false,
    stability: 55,
    innovation: 0.93,
    authority: 18,
    hdi: 80,
    cash: 790,
    territories: ['NorthSpain', 'SouthSpain'],
    focus: 'production',
    intelligence: [],
    secret: {
      operations: [],
      ongoing: [],
    },
    tech: [],
    name: 'Spain',
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
    stability: 55,
    innovation: 0.93,
    authority: 18,
    hdi: 80,
    cash: 790,
    income: 480,
    focus: 'production',
    turn: 0,
    name: 'Spain',
    intelligence: [],
    territories: ['NorthSpain', 'SouthSpain'],
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

export default createSpain;
