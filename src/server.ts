require('dotenv').config()
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(express.json());

// qualquer ip pode acessar o app
app.use(cors());

app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  })
})

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`Server runing on port ${port}`));
