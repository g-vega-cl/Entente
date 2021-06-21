const createUK = (online, useridentifier) => {
  const nation = useridentifier ? {
    useridentifier,
    online: online || false,
    stability: 75,
    innovation: 1.42,
    authority: 30,
    hdi: 88,
    cash: 209,
    income: 966,
    focus: 'production',
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
      production: [],
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
      production: [],
    },
    modifiers: [],
  };
  return nation;
};

export default createUK;
