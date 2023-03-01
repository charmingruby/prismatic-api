import { prisma } from '../../libs/prisma';

type ItemRequest = {
  item_id: string
}

class RemoveItemService{
    async execute({ item_id }:ItemRequest) {
        const itemExists = await prisma.item.findFirst({
            where: {
                id: item_id
            }
        });

        if(!itemExists) throw new Error('This item doesn\'t exist');

        const removedItem = await prisma.item.delete({
            where: {
                id: item_id
            }
        });

        return removedItem;
    }
}

export default new RemoveItemService();
