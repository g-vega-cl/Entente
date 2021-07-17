const getRandomNationName = () => {
  const random = Math.random();
  if (random < 0.16) {
    return 'spain';
  }
  if (random < 0.32) {
    return 'italy';
  }
  if (random < 0.5) {
    return 'france';
  }
  if (random < 0.66) {
    return 'uk';
  }
  if (random < 0.82) {
    return 'russia';
  }
  if (random < 1) {
    return 'germany';
  }
  return 'russia';
};
export default getRandomNationName;
