const createSpain = (online, useridentifier) => {
  const nation = useridentifier ? {
    useridentifier,
    online: online || false,
    stability: 55,
    innovation: 0.93,
    authority: 18,
    hdi: 80,
    cash: 790,
    income: 480,
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
    stability: 55,
    innovation: 0.93,
    authority: 18,
    hdi: 80,
    cash: 790,
    income: 480,
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

export default createSpain;
