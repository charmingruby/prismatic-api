import { prisma } from '../../libs/prisma';

type ItemRequest = {
  order_id: string,
  product_id: string
  amount: number
}

class AddItemService {
    async execute({ order_id, product_id, amount }:ItemRequest){
        const order = await prisma.item.create({
            data: {
                amount: amount,
                product_id: product_id,
                order_id: order_id
            }
        });
        return order;
    }
}

export default new AddItemService();
