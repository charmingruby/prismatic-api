import { prisma } from '../../libs/prisma';

type ProductRequest = {
  category_id: string
}

class ListByCategoryService{
    async execute({ category_id }:ProductRequest) {
        const products = await prisma.product.findMany({
            where: {
                category_id: category_id
            }
        });

        return products;
    }
}

export default new ListByCategoryService();
