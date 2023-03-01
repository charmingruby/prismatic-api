import { prisma } from '../../libs/prisma';

type OrderRequest = {
  order_id: string
}

class FinishOrderController{
    async execute({ order_id }: OrderRequest) {
        const orderExists = await prisma.order.findFirst({
            where: {
                id: order_id
            }
        });

        if(!orderExists) throw new Error('This order doesn\'t exists');

        const finishedOrder = await prisma.order.update({
            where: {
                id: order_id
            },
            data: {
                status: true
            }
        });
        return finishedOrder;
    }
}

export default new FinishOrderController();
