import { Request, Response } from 'express';

import CreateProductService from '../../services/product/CreateProductService';

class CreateProductController{
    async handle(req:Request, res:Response) {
        const { name, price, description, category_id } = req.body;

        if(!req.file) throw new Error('Error uploading the file');
        else {
            const { originalname, filename:banner } = req.file;

            const product = await CreateProductService.execute({
                name,
                price,
                description,
                banner,
                category_id
            });

            return res.json(product);
        }
    }
}

export default new CreateProductController();
