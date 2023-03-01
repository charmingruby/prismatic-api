import { Router } from 'express';

import multer from 'multer';
import uploadConfig from '../libs/multer';

import CreateProductController from '../controllers/product/CreateProductController';
import ListByCategoryController from '../controllers/product/ListByCategoryController';

import { isAuthenticated } from '../middlewares/isAuthenticated';

export const productRouter = Router();

const upload = multer(uploadConfig.upload('./tmp'));

productRouter.post('/products', isAuthenticated, upload.single('file'), CreateProductController.handle);
productRouter.get('/categories/products', isAuthenticated, ListByCategoryController.handle);
