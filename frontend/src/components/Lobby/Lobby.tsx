import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from 'antd';
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from 'unique-names-generator';
import getRandomFlag from './getRandomFlag';
import preferredCountrySelect from './preferredCountrySelect';
import openSocket from 'socket.io-client';
import { useHistory } from 'react-router-dom';

const Lobby = () => {
  const [name, setName] = useState<string>(
    localStorage.getItem('user_name') || ''
  );
  const [preferredNation, setPreferredNation] = useState<string>('france');
  const [io, setIo] = useState<any>();
  const [onlineUserCountSocket, setOnlineUserCountSocket] = useState<any>();
  const [matchUserCountSocket, setMatchUserCountSocket] = useState<any>(1);
  const [findMatchSquareVisible, setFindSquareVisible] =
    useState<boolean>(false);

  const history = useHistory();

  useEffect(() => {
    if (!name) {
      setName(
        uniqueNamesGenerator({
          dictionaries: [adjectives, colors, animals],
        }).replaceAll('_', ' ')
      );
    }
  }, [name]);
  useEffect(() => {
    if (!onlineUserCountSocket) {
      setIo(openSocket('http://localhost:5000'));
    }
  }, [onlineUserCountSocket]);

  if (io) {
    io.on('online_user_count', (userCount: any) => {
      setOnlineUserCountSocket(userCount);
    });
    io.on('found_match_from_user', (matchOnlineUsers: number) => {
      console.log('found match for user ', matchOnlineUsers);
      setMatchUserCountSocket(matchOnlineUsers);
    });
    io.on('starting_match', (matchId: string) => {
      console.log('starting_match');
      history.push(`/match/${matchId}`);
    });
  }

  const toggleSquare = () => {
    setFindSquareVisible(!findMatchSquareVisible);
  };

  const findMatch = () => {
    const matchData = {
      name,
      preferredNation,
    };
    if (io) {
      io.emit('find_match', matchData);
      localStorage.setItem('user_name', name);
    }
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
          <Row>
            <Col style={{ margin: 'auto' }}>
              <p>Online users: {onlineUserCountSocket?.count}</p>
            </Col>
          </Row>
          <Row>
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
