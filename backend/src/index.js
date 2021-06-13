import cors from 'cors';
import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';
import indexRouter from './routes/index/index.js';
import startSocket from './socket/sockets.js';

dotenv.config();
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/', indexRouter);

const PORT = process.env.PORT || 5000;

startSocket(io);

mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => httpServer.listen(PORT, () => console.log('Server running on port 5000')))
  .catch((e) => console.log(e.message));

export default app;
