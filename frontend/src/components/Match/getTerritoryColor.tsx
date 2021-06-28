const getTerrtoryColor = (currentTerritory: any, territories: any) => {
  let returnedColor = '#292222';
  let influence = 0;
  territories.forEach((territory: any) => {
    if (territory.name.toLowerCase() === currentTerritory.toLowerCase()) {
      switch (territory.owner.toLowerCase()) {
        case 'spain':
          returnedColor = 'yellow';
          influence = territory.influence;
          break;
        case 'france':
          returnedColor = '#4f75ff';
          influence = territory.influence;
          break;
        case 'uk':
          returnedColor = 'red';
          influence = territory.influence;
          break;
        case 'germany':
          returnedColor = 'brown';
          influence = territory.influence;
          break;
        case 'italy':
          returnedColor = '#00b806';
          influence = territory.influence;
          break;
        case 'russia':
          returnedColor = 'purple';
          influence = territory.influence;
          break;
        default:
          returnedColor = '#babab8';
          influence = territory.influence;
          break;
      }
    }
  });
  return [returnedColor, influence];
};

export default getTerrtoryColor;
