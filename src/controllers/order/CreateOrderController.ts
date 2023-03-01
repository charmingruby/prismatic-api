import { Request, Response } from 'express';

import CreateOrderService from '../../services/order/CreateOrderService';

class CreateOrderController{
    async handle(req:Request, res:Response) {
        const { adress , name } = req.body;
        const order = await CreateOrderService.execute({ adress , name });
        return res.json(order);
    }
}

export default new CreateOrderController();
