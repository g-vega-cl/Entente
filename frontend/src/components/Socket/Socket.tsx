import React, { useEffect, useState } from 'react';
import 'whatwg-fetch';
import openSocket from 'socket.io-client';


const Socket = () => {
  const [io, setIo] = useState<any>();
  const [socketMessages, setSocketMessages] = useState<string[]>([]);
   
  useEffect(()=>{
    console.log("useEffect");
    setIo(openSocket('http://localhost:5000'));
  },[]);

  if(io){
    io.on('example_message',(message:string)=>{
      console.log("msg")
      setSocketMessages([...socketMessages, message])
    });
  }
  
  console.log(socketMessages);
  
  
  const sendSocketIO = () => {
    console.log("Emit io");
    io.emit('example_message', 'demo');
  }

  return(
  <div>
    <button onClick={sendSocketIO}>Send Socket.io</button>
  </div>)
}
export default Socket;