import { useContext, useState, useRef } from 'react';
import MatchMap from './MatchMap';
import { ioContext, dataContext } from '../../App';
import { useParams } from 'react-router-dom';
import topBar from './topBar';
import Event from './Event';
import MilitaryButton from './MilitaryButton';
import EndTurnButton from './EndTurnButton';

const Match = () => {
  const [clickedRegion, setClickedRegion] = useState('');
  const [showEvent, setShowEvent] = useState(true);
  const [showMilitary, setShowMilitary] = useState(false);
  const [militaryBuy, setMilitaryBuy] = useState(0);
  const [deployTerritory, setDeployTerritory] = useState('');
  const [attackTerritory, setAttackTerritory] = useState('');
  const [fromAttackTerritory, setFromAttackTerritory] = useState('');
  const [attackValue, setAttackValue] = useState('');
  const io = useContext(ioContext);
  const { turnData, setTurnData } = useContext(dataContext);
  const params: any = useParams();
  const user_name = localStorage.getItem('user_name');
  const match_id = params?.id;

  if (io) {
    io.on(`turn/${user_name}-${match_id}`, (data: any) => {
      setTurnData(data);
      if (data.event) {
        setShowEvent(true);
      }
    });
    // io.on('send_me_match_data', (data: any) => {
    //   console.log('send me match data');
    //   io.emit('refresh_match_with_loop', {
    //     user_name,
    //     match_id,
    //   });
    // });
  }
  return (
    <>
      {showEvent && Event(io, turnData?.event, setShowEvent)}
      {topBar(turnData)}
      {MilitaryButton(
        turnData,
        setShowMilitary,
        showMilitary,
        io,
        user_name,
        match_id,
        militaryBuy,
        setMilitaryBuy,
        deployTerritory,
        setDeployTerritory,
        attackTerritory,
        setAttackTerritory,
        fromAttackTerritory,
        setFromAttackTerritory,
        attackValue,
        setAttackValue
      )}
      <MatchMap
        territories={turnData?.allTerritories}
        setClickedRegion={setClickedRegion}
      />
      {EndTurnButton(turnData, io, user_name, match_id)}
    </>
  );
};

export default Match;
