import RepositoryDistribuidora from "../Repository/DistribuidoraRepository.js";

export default class ServiceDistribuidora {

    constructor() {
        this.repositorydistribuidora = new RepositoryDistribuidora();
    }


async StatesPerAverage(){
  const values = await this.repositorydistribuidora.getAllDistribuidoraRepository();
    
  const total = values.reduce((acc, curr) => acc + curr.Valor, 0);
  
  const DistribuidoraValues = values.map(({ cidade, Valor }) => ({ cidade, Valor }));

  const citiesWithPercentage = values.map(cidade => {
      const percentage = (cidade.Valor / total) * 100;
      return { cidade: cidade.cidade, Valor: cidade.Valor, percentual: percentage };
  });
  
  return {
      citiesWithPercentage
  };
}

}