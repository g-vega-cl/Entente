import React, { useContext, useState, useEffect } from 'react';
import { Button, Col, Row } from 'antd';
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from 'unique-names-generator';
import getRandomFlag from './getRandomFlag';
import preferredCountrySelect from './preferredCountrySelect';
import { useHistory } from 'react-router-dom';
import { ioContext } from '../../App';
import GetTurn from '../Match/GetTurn';
import axios from 'axios';

const requestAxios = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  timeout: 1000,
});

const Lobby = () => {
  const io = useContext(ioContext);
  const history = useHistory();
  const [name, setName] = useState<string>(
    localStorage.getItem('user_name') || ''
  );
  const [preferredNation, setPreferredNation] = useState<string>('france');
  const [matchUserCountSocket, setMatchUserCountSocket] = useState<any>(1);
  const [findMatchSquareVisible, setFindSquareVisible] =
    useState<boolean>(false);
  const [findMatchEmitted, setFindMatchEmitted] = useState<boolean>(false);
  console.log('Lobby again?');

  useEffect(() => {
    if (!name) {
      setName(
        uniqueNamesGenerator({
          dictionaries: [adjectives, colors, animals],
        }).replaceAll('_', ' ')
      );
    }
  }, [name]);

  const toggleSquare = () => {
    setFindSquareVisible(!findMatchSquareVisible);
  };

  const findMatch = async () => {
    const matchData = {
      name,
      preferredNation,
    };
    await requestAxios.post(`/match/find_match`, matchData).then((res) => {
      console.log('res', res);
    });
    localStorage.setItem('user_name', name);
    toggleSquare();
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://i.ibb.co/d5J6DFP/map-of-the-world-2401458-1920.jpg")`,
      }}
    >
      <Row style={{ height: '15vh' }}></Row>
      <Row style={{ height: '70vh' }}>
        <Col span={2}></Col>
        <Col span={6} style={{ backgroundColor: 'white', border: 'solid' }}>
          <Row style={{ marginTop: '5vh' }}>
            <Col style={{ marginLeft: '10%' }}>
              <p style={{ fontSize: '16px' }}>{name}</p>
            </Col>
            <Col style={{ marginLeft: '5%' }}>
              <p style={{ fontSize: '16px' }}>{getRandomFlag()}</p>
            </Col>
          </Row>
        </Col>
        <Col
          span={1}
          style={{
            backgroundColor: 'white',
            borderTop: 'solid',
            borderBottom: 'solid',
          }}
        ></Col>
        <Col span={13} style={{ backgroundColor: 'white', border: 'solid' }}>
          <Row style={{ marginTop: '30px' }}>
            <Col style={{ margin: 'auto' }}>
              <Button
                type='primary'
                style={{ width: '40vw' }}
                onClick={findMatch}
              >
                Find match
              </Button>
            </Col>
          </Row>
          <Row style={{ marginTop: '3vh' }}>
            <Col style={{ margin: 'auto', display: 'flex' }}>
              <p style={{ fontSize: '16px', width: '28vw' }}>
                Preferred country
              </p>
              {preferredCountrySelect(preferredNation, setPreferredNation)}
            </Col>
          </Row>
          {findMatchSquareVisible && (
            <Row style={{ marginTop: '5vh' }}>
              <Col style={{ margin: 'auto', display: 'flex' }}>
                <p style={{ fontSize: '16px', width: '28vw' }}>Finding match</p>
                <p>{matchUserCountSocket}/6</p>
              </Col>
            </Row>
          )}
        </Col>
        <Col span={2}></Col>
      </Row>
      <Row style={{ height: '15vh' }}></Row>
    </div>
  );
};

export default Lobby;
