/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
import fs from 'fs'
import express from 'express';
import stub from './database/index';
import router from './route';


const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;

database.connectAndLoad(fs);
/*
@tochukwu: I gave these to you as examples not actual code you are to use in your project (that is why they were in comments in the codepen)

database.using(new User({ name: 'David Kezi', age: 28 })).write('insert');
database.using(new Agent({ name: 'Tochukwu Godwin', age: 30 })).write('insert');
database.using(new Agent({ name: 'Micheal Obi' })).write('update', { age: 30 });
*/


/*

@tochukwu: these are example code to show you how to use the code i wrote not to make up your code

database.read(User)._rows;

======== This is how a property is created in the database by an agent ==========
const property = new Property({ location: '125 Olakunle Street, Lagos', price: 23000.00 });
database.read(Agent, { name: 'Micheal Obi' }).last().createsProperty(property);
database.using(property).write('insert');

database.read(User).first();
database.delete(User, { age: 30 });
database.delete(User);
*/

app.use('/', express.static('UI'));
app.use(router);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log("DATABASE CONTENTS: ", database.list());
  // console.log("DATABASE CONTENTS: ", database.listInline());
  console.log(`Server Started On Port ${port}`);
});

process.on('uncaughtException', () => {
  database.offloadAndDisconnect(fs)
})

process.on('unhandledRejection', () => {
  database.offloadAndDisconnect(fs)
})

process.on('exit', () => {
  database.offloadAndDisconnect(fs)
})

process.on('SIGINT', () => {
  database.offloadAndDisconnect(fs)
});

process.on('SIGTERM', () => {
  database.offloadAndDisconnect(fs)
});

export default app;
