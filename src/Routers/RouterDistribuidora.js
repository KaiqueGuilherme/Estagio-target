import express from 'express';
import ControllerDistribuidora from '../Controller/DistribuidoraController.js';


const DistribuidoraRouter = express.Router();

const distribuidoraController = new ControllerDistribuidora();


DistribuidoraRouter.get('/montPercentual', distribuidoraController.GetFaturationMonth);



export default DistribuidoraRouter;
