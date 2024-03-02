import RepositoryFaturamento from "../Repository/FaturamentoRepository.js";

export default class ServiceFaturamento {

    constructor() {
        this.repositoryFaturamento = new RepositoryFaturamento();
    }

    async getAllValuesMonth(){
        const values = await this.repositoryFaturamento.getAllFaturamentoRepository();
        return values;
    }

    async getAllFaturamentoService(){
        const values = await this.repositoryFaturamento.getValuesDay();
        return values;
    }

async LowestValuePerDay(){
        const values = await this.repositoryFaturamento.getValuesDay();
        
        let menorValor = Infinity;
        let diaMenorValor;

        values.forEach(item => {
            if (item.valor < menorValor) {
                menorValor = item.valor;
                diaMenorValor = item.dia;
            }
        });

        const result = { dia: diaMenorValor, valor: menorValor };
        return result;
}

async LargestValuePerDay(){
    const values = await this.repositoryFaturamento.getValuesDay();
    
    let maiorValor = -Infinity;
    let diaMaiorValor;

    values.forEach(valor => {
        if (valor.valor > maiorValor) {
            maiorValor = valor.valor;
            diaMaiorValor = valor.dia;
        }
    });

    const result = { dia: diaMaiorValor, valor: maiorValor };
    return result;
}

async AverageofthemonthService(){
    const values = await this.repositoryFaturamento.getValuesDay();
    
  const total = values.reduce((acc, curr) => acc + curr.valor, 0);
  const monthlyAverage = total / values.length;

  const daysLargetValueAverage = values.filter(valor => valor.valor > monthlyAverage);

  const FaturamentosAcimadaMedia = daysLargetValueAverage.length;

  const daysFormatted = daysLargetValueAverage.map(({ dia, valor }) => ({ dia, valor }));


  return {
    monthlyAverage,
    FaturamentosAcimadaMedia,
    daysFormatted
};
}

}