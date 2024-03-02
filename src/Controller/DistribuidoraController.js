import ServiceDistribuidora from "../Services/DistribuidoraService.js";

export default class ControllerDistribuidora{

    constructor() {
        this.serviceDistribuidora = new ServiceDistribuidora();

    this.GetFaturationMonth = async (req, res, next) => {
            try{
            const AllFaturamento = await this.serviceDistribuidora.StatesPerAverage();
            res.status(200).json({message: "Extrato percentual por estados:", AllFaturamento});
            }catch(error){
                console.error('Erro ao obter faturamento:', error);
                res.status(500).json({ error: 'Erro ao obter faturamento' });
            }
    }    

    }
}A