import { prisma } from '../../libs/prisma';

class ListOrdersService{
    async execute() {
        const orders = await prisma.order.findMany();
        return orders;
    }
}

export default new ListOrdersService();
