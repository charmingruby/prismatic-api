import { prisma } from '../../libs/prisma';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

type AuthRequest = {
  email: string,
  password: string
}

class AuthUserService {
    async execute({email, password}: AuthRequest) {
        const user = await prisma.user.findFirst({where: {
            email:email
        }});

        if(!user) throw new Error('Email or password is incorrect');

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) throw new Error('Email or password is incorrect');

        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.SECRET_JWT,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        );

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        };
    }
}

export default new AuthUserService();
