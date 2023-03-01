import { prisma } from '../../libs/prisma';

class DatailUserService {
    async execute(user_id: string) {
        const user = await prisma.user.findFirst({
            where: {
                id: user_id
            },
            select: {
                id: true,
                name: true,
                email: true,
            }
        });

        return user;
    }
}

export default new DatailUserService();
