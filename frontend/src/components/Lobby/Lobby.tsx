import React, {useState, useEffect} from "react";
import { Button, Col, Row } from 'antd';
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';
import getRandomFlag from "./getRandomFlag";
import preferredCountrySelect from "./preferredCountrySelect";
import openSocket from 'socket.io-client';

const Lobby = () => {
  const [name,setName] = useState<string>('');
  const [preferredNation, setPreferredNation] = useState<string>('france');
  const [io, setIo] = useState<any>();
  const [onlineUserCountSocket, setOnlineUserCountSocket] = useState<any>();

  useEffect(()=>{
    setName(uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }).replaceAll('_',' '));
    setIo(openSocket('http://localhost:5000'));
  },[])

  if(io){
    io.on('online_user_count',(userCount:any)=>{
      setOnlineUserCountSocket(userCount)
    });
  }

  return(
    <div style={{backgroundImage:`url("https://i.ibb.co/d5J6DFP/map-of-the-world-2401458-1920.jpg")`}}>
    <Row style={{height:'15vh'}}>
    </Row>
    <Row style={{height:'70vh'}}>
      <Col span={2}></Col>
      <Col span={6} style={{backgroundColor:'white', border:'solid'}}>
        <Row style={{marginTop:'5vh'}}>
          <Col style={{ marginLeft:'10%'}}>
            <p style={{fontSize:'16px'}}>{name}</p>
          </Col>
          <Col style={{marginLeft:'5%'}}>
            <p style={{fontSize:'16px'}}>{getRandomFlag()}</p>
          </Col>
        </Row>
      </Col>
      <Col span={1} style={{backgroundColor:'white', borderTop:'solid', borderBottom:'solid'}}></Col>
      <Col span={13} style={{backgroundColor:'white', border:'solid'}}>
        <Row>
            <Col style={{ margin:'auto'}}>
              <p>Online users: {onlineUserCountSocket?.count}</p>
            </Col>
        </Row>
        <Row >
            <Col style={{ margin:'auto'}}>
              <Button type="primary" style={{width:'40vw'}}>Find match</Button>
            </Col>
        </Row>
        <Row style={{marginTop:'3vh'}}>
            <Col style={{ margin:'auto', display:'flex'}}>
              <p style={{fontSize:'16px', width:'28vw'}}>Preferred country</p>
              {preferredCountrySelect(preferredNation,setPreferredNation)}
            </Col>
        </Row>
      </Col>
      <Col span={2}></Col>
    </Row>
    <Row style={{height:'15vh'}}>
    </Row>
    </div>
  )
}

export default Lobby;