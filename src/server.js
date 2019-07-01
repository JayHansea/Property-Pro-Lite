import express from 'express';

const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;

app.use('/', express.static('UI'));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server Started On Port ${port}`);
});

export default app;
