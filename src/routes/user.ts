import { Router } from 'express';

import CreateUserController from '../controllers/user/CreateUserController';
import ListUsersController from '../controllers/user/ListUsersController';
import AuthUserController from '../controllers/user/AuthUserController';
import DetailUserController from '../controllers/user/DetailUserController';

import { isAuthenticated } from '../middlewares/isAuthenticated';

export const userRouter = Router();

userRouter.get('/users', ListUsersController.handle);

userRouter.post('/users', CreateUserController.handle);
userRouter.post('/session', AuthUserController.handle);
userRouter.get('/me', isAuthenticated, DetailUserController.handle);
