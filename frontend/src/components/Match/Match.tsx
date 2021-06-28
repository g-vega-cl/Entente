import { useContext, useState, useRef } from 'react';
import MatchMap from './MatchMap';
import { ioContext, dataContext } from '../../App';
import { useParams } from 'react-router-dom';
import topBar from './topBar';
import Event from './Event';
import GetTurn from './GetTurn';
import MilitaryButton from './MilitaryButton';

const Match = () => {
  const [clickedRegion, setClickedRegion] = useState('');
  const [showEvent, setShowEvent] = useState(true);
  const [showMilitary, setShowMilitary] = useState(false);
  const [militaryBuy, setMilitaryBuy] = useState(0);
  const [deployTerritory, setDeployTerritory] = useState('');
  const turnEmit = useRef(true);
  const io = useContext(ioContext);
  const { turnData, setTurnData } = useContext(dataContext);
  const params: any = useParams();
  const user_name = localStorage.getItem('user_name');
  const match_id = params?.id;
  if (io) {
    if (turnEmit?.current) {
      GetTurn(params, io, '', '');
      turnEmit.current = false;
    }
    io.on(`turn/${user_name}-${match_id}`, (data: any) => {
      console.log('receive turn event', data);
      setTurnData(data);
    });
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
        setDeployTerritory
      )}
      <MatchMap
        territories={turnData?.allTerritories}
        setClickedRegion={setClickedRegion}
      />
    </>
  );
};

export default Match;
