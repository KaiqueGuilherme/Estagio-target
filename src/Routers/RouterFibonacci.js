import express from 'express';
import ControllerFibonacci from '../Controller/FibonacciController.js';


const FibonacciRouter = express.Router();

const controllerFibonacci= new ControllerFibonacci();


FibonacciRouter.post('/Fibonacci', controllerFibonacci.FibonacciC);


export default FibonacciRouter;
