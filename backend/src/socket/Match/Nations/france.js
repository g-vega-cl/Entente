const createFrance = (online, useridentifier) => {
  const nation = useridentifier ? {
    useridentifier,
    online: online || false,
    stability: 76,
    innovation: 1.12,
    authority: 25,
    hdi: 78,
    cash: 212,
    income: 1334,
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
    stability: 76,
    innovation: 1.12,
    authority: 25,
    hdi: 78,
    cash: 212,
    income: 1334,
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

export default createFrance;
