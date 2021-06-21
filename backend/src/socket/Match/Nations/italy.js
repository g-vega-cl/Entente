const createItaly = (online, useridentifier) => {
  const nation = useridentifier ? {
    useridentifier,
    online: online || false,
    stability: 48,
    innovation: 0.51,
    authority: 23,
    hdi: 75,
    cash: 200,
    income: 863,
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
    stability: 48,
    innovation: 0.51,
    authority: 23,
    hdi: 75,
    cash: 200,
    income: 863,
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

export default createItaly;
