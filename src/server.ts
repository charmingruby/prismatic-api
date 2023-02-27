import express, {Application, json, Router} from "express"

import router from "./routes"

const app:Application = express();

app.use(express.json());
app.use(router.testRouter);

app.listen(3333, () => console.log('📦 Server is running at: http://localhost:3333'));