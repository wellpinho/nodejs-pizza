import { Request, Response, Router } from 'express';
import { userRoutes } from './modules/users/routes/userRoutes';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
  return res.json({ message: 'Sujeito Pizza'})
})

routes.use(userRoutes)

export { routes }
