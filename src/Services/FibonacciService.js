

export default class ServiceFibonacci {

    async Fibonacci(PrimeiroNumero, SegundoNumero) {
        
        const Numero1 = PrimeiroNumero;
        const Numero2 = SegundoNumero;
        const resultados = [];

        while (Numero1 > Numero2) {
           const number =  Numero1 + Numero2; 
            resultados.push(number); 
        }

      return resultados;

}
}
