import { prisma } from '../../libs/prisma';
import { hash } from 'bcryptjs';

type UserRequest = {
  name: string,
  email: string,
  password: string
}

class CreateUserService {
    async execute({name, email, password}: UserRequest) {
        if(!email) {
            throw new Error('Please inform your email');
        }

        const userAlreadyExists = await prisma.user.findFirst({where: {
            email: email
        }});

        if(userAlreadyExists) {
            throw new Error(' User already exists');
        }

        const passwordHash = await hash(password, 8);

        const user = prisma.user.create({
            data: {
                name,
                email,
                password: passwordHash
            },
            select: {
                id:true,
                name: true,
                email: true,
            }
        }, );

        return user;
    }
}

export default new CreateUserService();
