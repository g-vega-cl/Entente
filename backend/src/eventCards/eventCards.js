import EventCards from './eventCards.model.js';

export const defaultEvents = [
  {
    title: 'Terrorist attack!',
    description: 'A bomb was set up near the headquartes of one of the most prominent conservative news outlets',
    firstChoice: {
      title: 'Blame the immigrants!',
      stability: -3,
      innovation: -0.05,
      authority: 5,
    },
    secondChoice: {
      title: 'Let\'s unite against hate',
      stability: 3,
      innovation: 0.05,
      authority: -2,
    },
  },
  {
    title: 'Natural disaster!',
    description: 'A strong disaster has left thousands of citizens in need for aid',
    firstChoice: {
      title: 'Send all the aid we can!',
      stability: 3,
      innovation: 0.05,
      authority: 1,
      cash: -500,
    },
    secondChoice: {
      title: 'We can only pray',
      stability: -1,
      innovation: -0.05,
      authority: 0,
      hdi: -1,
    },
  },
  {
    title: 'National artist goes viral!',
    description: 'We can nudge them to do our bidding.',
    firstChoice: {
      title: 'Kids need to appreciate science!',
      stability: 1,
      innovation: 0.15,
      authority: -2,
      cash: -100,
      hdi: 1,
    },
    secondChoice: {
      title: 'The world must know of our greatness',
      stability: 3,
      authority: 3,
      cash: 100,
    },
  },
  {
    title: 'Corruption is running rampant in the country!',
    description: 'The upper echelons of our goverment were caught in a series of scandals',
    firstChoice: {
      title: 'Cover our cronies up!',
      stability: -4,
      innovation: -0.10,
      authority: 6,
      cash: 300,
      hdi: -3,
    },
    secondChoice: {
      title: 'Clean up the goverment!',
      stability: 2,
      authority: -3,
      cash: -600,
    },
  },
  {
    title: 'The people complain about lack of science funding!',
    description: 'From universities to companies, your country feels you are lagging beheind your peers.',
    firstChoice: {
      title: 'Fund the entrepreneurs!',
      stability: 3,
      innovation: 0.30,
      authority: -5,
      cash: -700,
      hdi: 3,
      modifiers: [{ name: 'income', value: 1.1 }],
    },
    secondChoice: {
      title: 'In this country I am the truth!',
      stability: -1,
      authority: 6,
      cash: 400,
      hdi: -2,
    },
  },
  {
    title: 'Companies want tax breaks!',
    description: 'Do we want to give companies more money, how will we say this to the kids!',
    firstChoice: {
      title: 'Go coorporations!',
      stability: -2,
      authority: -1,
      cash: 2000,
      hdi: -1,
      modifiers: [{ name: 'income', value: 0.95 }],
    },
    secondChoice: {
      title: 'The state needs the money',
      stability: -1,
      authority: 1,
      hdi: 1,
    },
  },
  {
    title: 'The olimpics are here!',
    description: 'Should we support our athletes?',
    firstChoice: {
      title: 'With our support, our athletes won!',
      stability: 2,
      authority: 2,
      cash: -300,
    },
    secondChoice: {
      title: 'We\'ll do better next time',
      stability: -1,
      cash: 300,
    },
  },
  {
    title: 'A massive loan',
    description: 'A foreign nation has offered us a low interest loan, what are they up to?',
    firstChoice: {
      title: 'We\'ll take it!',
      stability: -5,
      hdi: 3,
      authority: -5,
      cash: 3000,
      modifiers: [{ name: 'income', value: 0.90 }],
    },
    secondChoice: {
      title: 'We don\'t need your money!',
      stability: 3,
      authority: 2,
      cash: -500,
      modifiers: [{ name: 'income', value: 1.10 }],
    },
  },
  {
    title: 'Conflict in Africa!',
    description: 'An influential leader is conquering their neighbors in Africa',
    firstChoice: {
      title: 'We must support him!',
      stability: -2,
      hdi: 2,
      authority: 5,
      cash: -1000,
      modifiers: [{ name: 'income', value: 1.10 }],
    },
    secondChoice: {
      title: 'Stop his massacre!',
      stability: 3,
      authority: -2,
      cash: -500,
      innovation: 0.05,
    },
  },
  {
    title: 'Our debt is making us weak!',
    description: 'We need to find a way to deal with our debt',
    firstChoice: {
      title: 'Cut spending!',
      stability: -3,
      hdi: -2,
      authority: 2,
      cash: 1500,
      innovation: -0.05,
      modifiers: [{ name: 'income', value: 0.90 }],
    },
    secondChoice: {
      title: 'We will grow out of it!',
      stability: 1,
      innovation: 0.05,
      hdi: 1,
    },
  },
  {
    title: 'A local company is offering us a military contract',
    description: 'This is an opportunity to make our military more efficient!',
    firstChoice: {
      title: 'Give us the equipment!',
      stability: 2,
      hdi: -1,
      authority: 2,
      cash: -500,
      innovation: 0.05,
      modifiers: [{ name: 'militaryCost', value: 0.90 }],
    },
    secondChoice: {
      title: 'We don\'t need your help',
      authority: -1,
      hdi: 1,
    },
  },
  {
    title: 'A unicorn is forming in our contry',
    description: 'This new company could disrupt the way life works!',
    firstChoice: {
      title: 'Finance them!',
      stability: -2,
      hdi: 5,
      authority: -2,
      cash: -800,
      innovation: 0.15,
      modifiers: [{ name: 'income', value: 1.10 }],
    },
    secondChoice: {
      title: 'We should let the market run it\'s course',
      authority: 3,
      hdi: -2,
      stability: 2,
      cash: 500,
      innovation: -0.03,
    },
  },
  {
    title: 'A polarizing politician is emerging!',
    description: 'Should we let this guy roam free?',
    firstChoice: {
      title: 'Let\'s hear him',
      stability: -2,
      authority: 3,
      innovation: -0.05,
    },
    secondChoice: {
      title: 'Nip it in the bud',
      authority: -1,
      hdi: 1,
      stability: 1,
    },
  },
  {
    title: 'Shortage!',
    description: 'A shortage of goods is sweeping through the country',
    firstChoice: {
      title: 'Subsidize our people!',
      stability: 1,
      authority: 1,
      cash: -300,
    },
    secondChoice: {
      title: 'Let the market be',
      authority: -1,
      stability: -1,
      cash: 300,
    },
  },
];

export const defaultEventsFrance = [
  {
    title: 'The African colonies!',
    description: 'Should we try to reconnect with our old empire?',
    country: 'France',
    firstChoice: {
      title: 'Let\'s grow closer to our african brothers!',
      stability: 1,
      authority: -1,
      cash: -300,
      innovation: 0.05,
      modifiers: [{ name: 'income', value: 1.10 }],
    },
    secondChoice: {
      title: 'Let\'s just exploit them',
      authority: 3,
      stability: -2,
      cash: 1500,
    },
  },
];

export const defaultEventsSpain = [
  {
    title: 'The Americas',
    description: 'Should we try to reconnect with our old empire?',
    country: 'Spain',
    firstChoice: {
      title: 'Let\'s grow closer to our american brothers!',
      stability: 1,
      authority: -1,
      cash: -800,
      innovation: 0.15,
      modifiers: [{ name: 'income', value: 1.20 }],
    },
    secondChoice: {
      title: 'We already took all their gold!',
      authority: 3,
      stability: -2,
      cash: 2500,
    },
  },
];

export const defaultEventsUK = [
  {
    title: 'The Commonwealth',
    description: 'Should we try to reconnect with our old empire?',
    country: 'UK',
    firstChoice: {
      title: 'Let the sun never set again!',
      stability: 2,
      authority: -1,
      cash: -1200,
      innovation: 0.15,
      modifiers: [{ name: 'income', value: 1.20 }],
    },
    secondChoice: {
      title: 'We\'d rather not.',
      authority: 3,
      stability: -1,
      cash: 3500,
    },
  },
];

export const defaultEventsGermany = [
  {
    title: 'Our german heritage',
    description: 'Should we push for our old borders?',
    country: 'Germany',
    firstChoice: {
      title: 'We need the Lebensraum!',
      stability: -2,
      authority: 6,
      cash: -2000,
      innovation: 0.05,
      modifiers: [{ name: 'income', value: 1.15 }, { name: 'militaryCost', value: 0.90 }],
    },
    secondChoice: {
      title: '*XX century flashbacks*',
      authority: -2,
      stability: -2,
      cash: 1500,
      modifiers: [{ name: 'income', value: 1.05 }],
      innovation: 0.05,
    },
  },
];

export const defaultEventsItaly = [
  {
    title: 'The roman empire',
    description: 'Should we rekindle our imperialist ambitions',
    country: 'Italy',
    firstChoice: {
      title: 'Senātus Populusque Rōmānus!',
      stability: -2,
      authority: 6,
      cash: -1300,
      innovation: 0.10,
      modifiers: [{ name: 'income', value: 1.10 }, { name: 'militaryCost', value: 0.8 }],
    },
    secondChoice: {
      title: 'We are fine in our peninsula',
      authority: 2,
      stability: 2,
      cash: 1500,
    },
  },
];

export const defaultEventsRussia = [
  {
    title: 'The new soviet union!',
    description: 'Let\'s retake what\'s rightfully ours',
    country: 'Russia',
    firstChoice: {
      title: 'We shall start with Europe',
      stability: -2,
      hdi: -2,
      authority: 8,
      cash: -1300,
      modifiers: [{ name: 'income', value: 1.10 }, { name: 'militaryCost', value: 0.9 }],
    },
    secondChoice: {
      title: 'Retake the \'stans!',
      stability: 1,
      hdi: -1,
      authority: 3,
      cash: -100,
      modifiers: [{ name: 'income', value: 1.03 }, { name: 'militaryCost', value: 0.97 }],
    },
  },
];

export const createCardDatabase = async () => {
  const currentEvents = await EventCards.find();
  defaultEvents.forEach(async (event) => {
    if (!currentEvents.length) {
      await new EventCards(event).save();
      currentEvents.append('firstEv');
    }
    const newEvent = await EventCards.findOneAndUpdate({ title: event.title }, event, {
      new: true,
      upsert: true,
    });
    await newEvent.save();
  });
  defaultEventsFrance.forEach(async (event) => {
    const newEvent = await EventCards.findOneAndUpdate({ title: event.title }, event, {
      new: true,
      upsert: true,
    });
    await newEvent.save();
  });
  defaultEventsGermany.forEach(async (event) => {
    const newEvent = await EventCards.findOneAndUpdate({ title: event.title }, event, {
      new: true,
      upsert: true,
    });
    await newEvent.save();
  });
  defaultEventsRussia.forEach(async (event) => {
    const newEvent = await EventCards.findOneAndUpdate({ title: event.title }, event, {
      new: true,
      upsert: true,
    });
    await newEvent.save();
  });
  defaultEventsSpain.forEach(async (event) => {
    const newEvent = await EventCards.findOneAndUpdate({ title: event.title }, event, {
      new: true,
      upsert: true,
    });
    await newEvent.save();
  });
  defaultEventsUK.forEach(async (event) => {
    const newEvent = await EventCards.findOneAndUpdate({ title: event.title }, event, {
      new: true,
      upsert: true,
    });
    await newEvent.save();
  });
  defaultEventsItaly.forEach(async (event) => {
    const newEvent = await EventCards.findOneAndUpdate({ title: event.title }, event, {
      new: true,
      upsert: true,
    });
    await newEvent.save();
  });
};
