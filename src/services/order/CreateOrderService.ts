import { prisma } from '../../libs/prisma';

type OrderRequest = {
  adress: string,
  name: string
}

class CreateOrderService{
    async execute({name, adress}: OrderRequest) {
        const order = await prisma.order.create({
            data: {
                adress: adress,
                name: name
            }
        });
        return order;
    }
}

export default new CreateOrderService();
