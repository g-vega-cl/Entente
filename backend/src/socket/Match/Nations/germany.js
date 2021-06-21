const createGermany = (online, useridentifier) => {
  const nation = useridentifier ? {
    useridentifier,
    online: online || false,
    stability: 94,
    innovation: 1.12,
    authority: 15,
    hdi: 94,
    cash: 254,
    income: 1729,
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
    stability: 94,
    innovation: 1.12,
    authority: 15,
    hdi: 94,
    cash: 254,
    income: 1729,
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

export default createGermany;
