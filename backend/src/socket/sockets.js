const startSocket = (io) => {
  io.on('connection', (socket) => {
    console.log('a user connected ', new Date());

    socket.on('disconnect', () => {
      console.log('User Disconnected');
    });

    socket.on('example_message', (msg) => {
      console.log(`message: ${msg}`);
    });
  });
};

export default startSocket;
