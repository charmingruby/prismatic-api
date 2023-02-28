import { Router } from 'express';

import CreateUserController from '../controllers/user/CreateUserController';
import GetAllUsersController from '../controllers/user/GetAllUsersController';

export const userRouter = Router();

userRouter.get('/users', GetAllUsersController.handle);
userRouter.post('/users', CreateUserController.handle);
