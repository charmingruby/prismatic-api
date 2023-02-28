import { Request, Response } from 'express';

import AuthUserService from '../../services/user/AuthUserService';

class AuthUserController {
    async handle(req:Request, res:Response) {
        const {email, password} = req.body;

        const user = AuthUserService.execute({email, password});

        return user;
    }
}

export default new AuthUserController();
