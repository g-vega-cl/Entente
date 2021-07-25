/* eslint-disable no-console */
import cors from 'cors';
import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';
import indexRouter from './routes/index/index.js';
import startSocket from './socket/sockets.js';
import matchRouter from './routes/match/match.api.js';
import mainLoop from './Loop/Ai/MainLoop.js';

dotenv.config();
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/', indexRouter);
app.use('/match', matchRouter);

const PORT = process.env.PORT || 5000;

startSocket(io);
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect(process.env.CONNECTION_URL, mongooseOptions)
  .then(() => httpServer.listen(PORT, () => console.log('Server running on port 5000')))
  .catch((e) => console.log(e.message));

setInterval(() => {
  console.log('Main loop', new Date());
  mainLoop();
}, 15000);

export default app;
