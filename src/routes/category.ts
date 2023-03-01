import { Router } from 'express';

import { isAuthenticated } from '../middlewares/isAuthenticated';

import CreateCategoryController from '../controllers/category/CreateCategoryController';
import ListCategoriesController from '../controllers/category/ListCategoriesController';

export const categoryRouter = Router();

categoryRouter.get('/categories', isAuthenticated, ListCategoriesController.handle);
categoryRouter.post('/categories', isAuthenticated, CreateCategoryController.handle);
