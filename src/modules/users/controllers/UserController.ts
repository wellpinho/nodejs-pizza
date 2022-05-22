import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
  async list(req: Request, res: Response) {
    const listUsers = new UserService();
    const users = await listUsers.list();

    users
      ? res.status(200).json(users)
      : res.status(200).json({ Message: "users not found" });
  }
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const createUserService = new UserService();

    const user = await createUserService.create({
      name,
      email,
      password,
    });

    return res.json(user);
  }
}
