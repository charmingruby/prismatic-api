import { Request,Response } from 'express';

import ListUsersService from '../../services/user/ListUsersService';

class ListUsersController {
    async handle(req:Request, res:Response) {
        const users = await ListUsersService.execute();

        if(users.length === 0) {
            return res.json({advice: 'There\'s no users registered'});
        }

        return res.json(users);
    }
}

export default new ListUsersController();
