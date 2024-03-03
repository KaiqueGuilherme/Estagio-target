

export default class ServiceFibonacci {

    async Fibonacci(PrimeiroNumero, SegundoNumero) {
        
        let Numero1 = PrimeiroNumero;
        let Numero2 = SegundoNumero;
        const resultados = [Numero1, Numero2];

        for (let c= 0; c < 100; c++) {
           const numberNext =  Numero1 + Numero2; 
            resultados.push(numberNext); 

            Numero1 = Numero2;
            Numero2 = numberNext;
        }

      return resultados;
    }
}
