import {Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';

type PayLoad = {
  sub: string;
}

export function isAuthenticated(req:Request, res:Response, next:NextFunction) {
    const authToken = req.headers.authorization;

    if(!authToken) return res.status(401).end();

    const [, token] = authToken.split(' ');

    try {
        const { sub } = verify(
            token,
            process.env.SECRET_JWT
        ) as PayLoad;
        req.user_id = sub;
    } catch(error) {
        return res.status(401).end();
    }

    return next();
}
