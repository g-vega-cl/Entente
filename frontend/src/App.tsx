import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Lobby from './components/Lobby/Lobby';
import Auth from './components/Auth/Auth';
import Match from './components/Match/Match';
import 'antd/dist/antd.css';

export const dataContext = React.createContext<any>({});
export const ioContext = React.createContext<any>({});
export function App() {
  const [turnData, setTurnData] = useState<any>();
  useEffect(() => {
    setTurnData({
      event: false,
      allTerritories: [],
    });
  }, [setTurnData]);
  return (
    <dataContext.Provider
      value={{ turnData: turnData, setTurnData: setTurnData }}
    >
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Lobby} />
          <Route path='/auth' exact component={Auth} />
          <Route path='/match/:id' exact component={Match} />
        </Switch>
      </BrowserRouter>
    </dataContext.Provider>
  );
}
