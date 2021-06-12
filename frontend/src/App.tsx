import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Lobby from './components/Lobby/Lobby';
import Auth from "./components/Auth/Auth";



const dataContext = React.createContext({data:[]});

function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    setData([]);
  },[setData])
  return (
    <dataContext.Provider value={{ data }}>
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Lobby}/>
          <Route path="/auth" exact component={Auth}/>
        </Switch>
    </BrowserRouter>
    </dataContext.Provider>
  );
}

export default App;
