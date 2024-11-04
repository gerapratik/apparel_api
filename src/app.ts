import express from 'express';
import router from './routes';

const app = express();

app.use(express.json());
app.use((req, res, next) => {
    console.log(`Received request: ${req.method} ${req.url}`);
    next();
  });

app.use('/api', router);

export default app;
