import { prisma } from '../../libs/prisma';

type OrderRequest = {
  order_id: string
}

class RemoveOrderService{
    async execute({ order_id }:OrderRequest) {
        const orderExists = await prisma.order.findFirst({
            where: {
                id: order_id
            }
        });

        if(!orderExists) throw new Error('This order don\'t exists');

        const deletedOrder = prisma.order.delete({
            where: {
                id: order_id
            }
        });

        return deletedOrder;
    }
}

export default new RemoveOrderService();
