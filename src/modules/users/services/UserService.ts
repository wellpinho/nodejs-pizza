import { prismaClient } from "../../../prisma";

interface IUserRequest {
  name: string;
  email: string;
  password: string;
}

// recebe por params os dados do use vindos do controller
export class UserService {
  async list() {
    const users = await prismaClient.user.findMany({
      select: { id: true, name: true, email: true },
    });

    return users;
  }

  async create({ name, email, password }: IUserRequest) {
    // verifica se não enviou email
    if (!email) {
      throw new Error("Email incorrect");
    }
    // verificar se já existe um email no banco cadastrado
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: { email },
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}
