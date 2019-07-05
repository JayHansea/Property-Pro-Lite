import express from 'express';
import userController from './controllers/user';
import propertyController from './controllers/property';
import agentController from './controllers/agent';

const router = express.Router();

router.post('/api/v1/user', userController.create);
router.put('/api/v1/user/:id', userController.update);

router.post('/api/v1/agent', agentController.create);
router.put('/api/v1/agent/:id', agentController.update);

router.post('/api/v1/property', propertyController.create);
router.get('/api/v1/property', propertyController.getAll);
router.get('/api/v1/property/:id', propertyController.getOne);
router.put('/api/v1/property/:id', propertyController.update);
router.delete('/api/v1/property/:id', propertyController.delete);

router.all('*', (req, res) => {
  res.status(404).send({
    status: 404,
    message: 'endpoint does not exist',
  });
});

export default router;
