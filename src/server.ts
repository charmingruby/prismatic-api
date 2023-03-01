import express, {Application, NextFunction, Response, Request} from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';

import router from './routes';

const app:Application = express();
app.use(express.json());
app.use(cors());
app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))
);

app.use(router.userRouter);
app.use(router.categoryRouter);
app.use(router.productRouter);
app.use(router.orderRouter);

app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
    if(err instanceof Error) {
        return res.status(400).json({
            error: err.message
        });
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    });
});

app.listen(3333, () => console.log('📦 Server is running at: http://localhost:3333'));
