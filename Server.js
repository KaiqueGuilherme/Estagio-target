import express  from "express";
import faturamentoRouter from "./src/Routers/FaturamentoRouter.js";
import DistribuidoraRouter from "./src/Routers/RouterDistribuidora.js";
import StringRouter from "./src/Routers/RouterString.js";


export function serverCreate() {
    const Tardex = express();

    Tardex.use(express.json());

    Tardex.use('/api', faturamentoRouter);
    Tardex.use('/api2', DistribuidoraRouter);
    Tardex.use('/api3', StringRouter);
    

    return Tardex;
}
