import { prisma } from '../../libs/prisma';

type ProductRequest = {
  name: string,
  price: string,
  description: string,
  banner: string,
  category_id: string
}

class CreateProductService{
    async execute({ name, price, description, banner, category_id }:ProductRequest) {
        const productAlreadyExists = await prisma.product.findFirst({
            where: {
                name: name
            }
        });

        if(productAlreadyExists) throw new Error('Product already exists');

        const product = await prisma.product.create({
            data: {
                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id
            }
        });

        return product;
    }
}

export default new CreateProductService();
