import React, { useEffect, useState } from 'react';
import 'whatwg-fetch';
import openSocket from 'socket.io-client';

const Socket = () => {
  const [io, setIo] = useState<any>();
  const [socketMessages, setSocketMessages] = useState<string[]>([]);

  useEffect(() => {
    setIo(openSocket('http://localhost:5000'));
  }, []);

  if (io) {
    io.on('example_message', (message: string) => {
      setSocketMessages([...socketMessages, message]);
    });
  }
};
export default Socket;
