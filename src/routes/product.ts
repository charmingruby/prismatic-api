import { Router } from 'express';

import multer from 'multer';
import uploadConfig from '../libs/multer';

import CreateProductController from '../controllers/product/CreateProductController';

import { isAuthenticated } from '../middlewares/isAuthenticated';

export const productRouter = Router();

const upload = multer(uploadConfig.upload('./tmp'));

productRouter.post('/products', isAuthenticated, upload.single('file'), CreateProductController.handle);
