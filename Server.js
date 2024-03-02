import express  from "express";
import faturamentoRouter from "./src/Routers/FaturamentoRouter.js";
import DistribuidoraRouter from "./src/Routers/RouterDistribuidora.js";


export function serverCreate() {
    const Tardex = express();

    Tardex.use(express.json());

    Tardex.use('/api', faturamentoRouter);
    Tardex.use('/api2', DistribuidoraRouter);
    

    return Tardex;
}
