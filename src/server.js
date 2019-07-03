import express from 'express';
import userController from './controllers/user';
import propertyController from './controllers/property';
import agentController from './controllers/agent';

const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;

app.post('/api/v1/user', userController.create);
app.get('/api/v1/user', userController.getAll);
app.get('/api/v1/user/:id', userController.getOne);
app.put('/api/v1/user/:id', userController.update);
app.delete('/api/v1/user/:id', userController.delete);

app.post('/api/v1/user', agentController.create);
app.get('/api/v1/user', agentController.getAll);
app.get('/api/v1/user/:id', agentController.getOne);
app.put('/api/v1/user/:id', agentController.update);
app.delete('/api/v1/user/:id', agentController.delete);

app.post('/api/v1/property', propertyController.create);
app.get('/api/v1/property', propertyController.getAll);
app.get('/api/v1/property/:id', propertyController.getOne);
app.put('/api/v1/property/:id', propertyController.update);
app.delete('/api/v1/property/:id', propertyController.delete);

app.use('/', express.static('UI'));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server Started On Port ${port}`);
});

export default app;
