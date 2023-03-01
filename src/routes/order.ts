import { Router } from 'express';

import CreateOrderController from '../controllers/order/CreateOrderController';
import RemoveOrderController from '../controllers/order/RemoveOrderController';
import AddItemController from '../controllers/order/AddItemController';
import RemoveItemController from '../controllers/order/RemoveItemController';
import SendOrderController from '../controllers/order/SendOrderController';
import ListOrdersController from '../controllers/order/ListOrdersController';
import DetailOrderController from '../controllers/order/DetailOrderController';
import FinishOrderController from '../controllers/order/FinishOrderController';

import { isAuthenticated } from '../middlewares/isAuthenticated';

export const orderRouter = Router();

orderRouter.get('/orders', isAuthenticated, ListOrdersController.handle);
orderRouter.post('/orders', isAuthenticated, CreateOrderController.handle);
orderRouter.delete('/orders', isAuthenticated, RemoveOrderController.handle);
orderRouter.post('/orders/add', isAuthenticated, AddItemController.handle);
orderRouter.delete('/orders/remove', isAuthenticated, RemoveItemController.handle);
orderRouter.put('/orders/send', isAuthenticated, SendOrderController.handle);
orderRouter.get('/orders/detail', isAuthenticated, DetailOrderController.handle);
orderRouter.put('/orders/finish', isAuthenticated, FinishOrderController.handle);
