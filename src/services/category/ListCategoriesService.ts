import { prisma } from '../../libs/prisma';

class ListUsersService {
    async execute() {
        const categories = await prisma.category.findMany({
            select: {
                id: true,
                name: true
            }
        });
        return categories;
    }
}

export default new ListUsersService();
