import { prisma } from '../../libs/prisma';

type OrderRequest = {
  order_id: string
}

class DetailOrderService{
    async execute({ order_id }:OrderRequest) {
        const details = await prisma.item.findMany({
            where: {
                order_id: order_id
            },
            include: {
                product: true,
                order: true
            }
        });

        return details;
    }
}

export default new DetailOrderService();
