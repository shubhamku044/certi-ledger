import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import type { Express, Request, Response } from 'express';

const app: Express = express();

app.use(morgan('tiny'));
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cors());

app.get('/health', (_: Request, res: Response) => {
  console.log('heyy')
  res.status(200).json({
    health: 'Up and running'
  });
});
app.post('/registerrecipient', (req: Request, res: Response) => {
  try {
    // Extract user data from the request body
    const {
      username,
      password,
      firstName,
      lastName,
      email,
    } = req.body;

    // You can perform any validation or database operations here if needed.

    // Return the same data as a response
    const userData = {
      username,
      password,
      firstName,
      lastName,
      email,
    };

    res.status(200).json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while registering the recipient.' });
  }
});

app.get('/', (_: Request, res: Response) => {
  res.status(200).json({
    health: 'Up and running'
  });
});
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    msg: `Can't find the ${req.originalUrl} in this server`
  });
});

export default app;
