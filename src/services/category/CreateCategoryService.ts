import { prisma } from '../../libs/prisma';

type CategoryRequest = {
  name: string
}

class CreateCategoryService {
    async execute({ name }:CategoryRequest) {
        if(name === '') throw new Error('Please inform the name');

        const categoryAlreadyExists = await prisma.category.findFirst({
            where: {
                name: name,
            }
        });

        if(categoryAlreadyExists) throw new Error('This category name already exists');

        const category = await prisma.category.create({
            data: {
                name: name,
            },
            select: {
                id: true,
                name: true,
            }
        });

        return category;
    }
}

export default new CreateCategoryService();
