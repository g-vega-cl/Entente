import { useContext, useState } from 'react';
import MatchMap from './MatchMap';
import { ioContext } from '../../App';
const Match = () => {
  const [clickedRegion, setClickedRegion] = useState('');
  // const io = useContext(ioContext);
  // console.log('EA', io);
  return (
    <MatchMap
      clickedRegion={clickedRegion}
      setClickedRegion={setClickedRegion}
    />
  );
};

export default Match;
