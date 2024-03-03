import ServiceFibonacci from "../Services/FibonacciService.js";


export default class ControllerFibonacci{

    constructor() {
        this.serviceFibo = new ServiceFibonacci();
    
        this.FibonacciC = async (req, res, next) => {

            const PrimeiroNumero = req.body.PrimeiroNumero;
            const SegundoNumero = req.body.SegundoNumero; 
            try{
            const FibonacciResult = await this.serviceFibo.Fibonacci(PrimeiroNumero,SegundoNumero);
            
            res.status(200).json({message: "Fibonacci:", FibonacciResult});
            }catch(error){
                console.error('Erro ao obter Fibonacci:', error);
                res.status(500).json({ error: 'Erro ao obter fFibonacci' });
            }
    }    

}
    
}