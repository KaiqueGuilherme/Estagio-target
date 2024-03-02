import express from 'express';
import ControllerFaturamento from '../Controller/FaturamentoController.js';

const faturamentoRouter = express.Router();

const controllerFaturamento = new ControllerFaturamento();


faturamentoRouter.get('/Allitens', controllerFaturamento.getALLvalues);
faturamentoRouter.get('/ValuesperDay', controllerFaturamento.getALLvaluesMonth);
faturamentoRouter.get('/Lowest', controllerFaturamento.getLowestValuePerDay);
faturamentoRouter.get('/BiggerValues', controllerFaturamento.getLargestValuePerDay);
faturamentoRouter.get('/countDaysAboveAverage', controllerFaturamento.getAverageofthemonth);


export default faturamentoRouter;
