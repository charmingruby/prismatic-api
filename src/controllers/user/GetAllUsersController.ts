import { Request,Response } from 'express';

import GetAllUsersService from '../../services/user/GetAllUsersService';

class GetAllUsersController {
    async handle(req:Request, res:Response) {
        const users = await GetAllUsersService.execute();

        if(users.length === 0) {
            return res.json({advice: 'There\'s no users registered'});
        }

        return res.json(users);
    }
}

export default new GetAllUsersController();
