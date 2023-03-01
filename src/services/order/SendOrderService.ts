import { prisma } from '../../libs/prisma';

type OrderRequest = {
  order_id: string
}

class SendOrderService{
    async execute({ order_id }:OrderRequest) {
        const orderExists = await prisma.order.findFirst({
            where: {
                id: order_id
            }
        });

        if(!orderExists) throw new Error('This order doesn\'t exists');

        const order = prisma.order.update({
            where: {
                id: order_id
            },
            data: {
                draft: false
            }
        });

        return order;
    }
}

export default new SendOrderService();
