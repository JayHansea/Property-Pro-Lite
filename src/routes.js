/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import bodyParser from 'body-parser';
import Models from './models/user';

export default (app) => {
  app.use(bodyParser.json());

  // eslint-disable-next-line max-len
  /* app.get('/', (req, res) => res.status(200).send({ message: 'YAY! Congratulations! Your first endpoint is working' })); */

  app.get(Models.home.path, Models.home.handler);

  app.post(Models.register.path, Models.register.handler);
};
