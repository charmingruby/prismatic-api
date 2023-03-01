import { Request, Response } from 'express';

import ListOrdersService from '../../services/order/ListOrdersService';

class ListOrdersController{
    async handle(req:Request, res:Response) {
        const orders = await ListOrdersService.execute();
        return res.json(orders);
    }
}

export default new ListOrdersController();
