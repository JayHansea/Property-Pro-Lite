/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import express from 'express';
import routesSetup from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/', express.static('UI'));

routesSetup(app);

// server
app.listen(port, () => {
  console.log(`Server Started On Port ${port}`);
});

export default app;
