import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
  async create(req: Request, res: Response) {
    const {
      name,
      email,
      password,
    } = req.body;

    const createUserService = new UserService();

    const user = await createUserService.execute({
      name,
      email,
      password,
    })

    return res.json(user);
  }
}
