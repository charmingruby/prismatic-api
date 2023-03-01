import { Request, Response } from 'express';

import ListCategoriesService from '../../services/category/ListCategoriesService';

class ListUsersController {
    async handle(req:Request, res:Response) {
        const categories = await ListCategoriesService.execute();
        return res.json(categories);
    }
}

export default new ListUsersController();
