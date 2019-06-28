/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import bodyParser from 'body-parser';
import Controllers from './controllers/register';

export default function (app) {
  app.use(bodyParser.json());

  // eslint-disable-next-line max-len
  /* app.get('/', (req, res) => res.status(200).send({ message: 'YAY! Congratulations! Your first endpoint is working' })); */

  app.get(Controllers.home.path, Controllers.home.handler);

  app.post(Controllers.register.path, Controllers.register.handler);
}
