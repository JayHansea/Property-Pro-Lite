/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
import express from 'express';
import database from './database/index';
import router from './route';


const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;

database.using(new User({ name: 'David Kezi', age: 28 })).write('insert');
database.using(new Agent({ name: 'Tochukwu Godwin', age: 30 })).write('insert');
database.using(new Agent({ name: 'Micheal Obi' })).write('update', { age: 30 });

console.log(database.list());
console.log(database.listInline());

database.read(User)._rows;

const property = new Property({ location: '125 Olakunle Street, Lagos', price: 23000.00 });
database.read(Agent, { name: 'Micheal Obi' }).last().createsProperty(property);
database.using(property).write('insert');

database.read(User).first();
database.delete(User, { age: 30 });
database.delete(User);

app.use('/', express.static('UI'));
app.use(router);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server Started On Port ${port}`);
});

export default app;
