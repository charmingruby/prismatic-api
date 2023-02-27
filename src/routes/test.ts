import { Router, Request, Response } from "express";

export const testRouter = Router();

testRouter.get('/', (req:Request, res:Response) => {
    return res.json({ok: 'true'})
})