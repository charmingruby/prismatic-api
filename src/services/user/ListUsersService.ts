import { prisma } from '../../libs/prisma';

class ListUsersService {
    async execute() {
        const users = await prisma.user.findMany(
            {select: {
                id: true,
                name: true,
                email: true,
                created_at: true,
                updated_at: true
            }});

        return users;
    }
}

export default new ListUsersService();
