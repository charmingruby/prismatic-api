import { prisma } from '../../libs/prisma';

type AuthRequest = {
  email: string,
  password: string
}

class AuthUserService {
    async execute({email, password}: AuthRequest) {
        return;
    }
}

export default new AuthUserService();
