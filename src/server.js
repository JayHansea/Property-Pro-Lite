/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
import fs from 'fs';
import express from 'express';
import stub from './database/index';
import router from './route';


const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;

database.connectAndLoad(fs);

app.use('/', express.static('UI'));
app.use(router);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('DATABASE CONTENTS: ', database.show());
  console.log(`Server Started On Port ${port}`);
});

process.on('uncaughtException', () => {
  database.clear();
  database.offloadAndDisconnect(fs);
});

process.on('unhandledRejection', () => {
  database.offloadAndDisconnect(fs);
});

process.on('exit', () => {
  database.offloadAndDisconnect(fs);
});

process.on('SIGINT', () => {
  database.offloadAndDisconnect(fs);
});

process.on('SIGTERM', () => {
  database.offloadAndDisconnect(fs);
});

export default app;
