import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Lobby from './components/Lobby/Lobby';
import Auth from './components/Auth/Auth';
import Match from './components/Match/Match';
import socket from './components/Socket/Socket';
import openSocket from 'socket.io-client';
import 'antd/dist/antd.css';

const dataContext = React.createContext({ data: [] });
export const ioContext = React.createContext<any>({});
export function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([]);
  }, [setData]);
  const [io, setIo] = useState<any>();
  useEffect(() => {
    setIo(openSocket('http://localhost:5000'));
  }, [setIo]);
  if (io) {
    return (
      <dataContext.Provider value={{ data }}>
        <ioContext.Provider value={io}>
          <BrowserRouter>
            <Switch>
              <Route path='/' exact component={Lobby} />
              <Route path='/socket' exact component={socket} />
              <Route path='/auth' exact component={Auth} />
              <Route path='/match/:id' exact component={Match} />
            </Switch>
          </BrowserRouter>
        </ioContext.Provider>
      </dataContext.Provider>
    );
  } else {
    return <div>Loading...</div>;
  }
}
