import ServiceFaturamento from "../Services/FaturamentoService.js";

export default class ControllerFaturamento{

    constructor() {
        this.serviceFaturamento = new ServiceFaturamento();

    this.getALLvalues = async (req, res, next) => {
            try{
            const AllFaturamento = await this.serviceFaturamento.getAllValuesMonth();
            res.status(200).json({message: "Extrato dia 1 ao 30:", AllFaturamento});
            }catch(error){
                console.error('Erro ao obter faturamento:', error);
                res.status(500).json({ error: 'Erro ao obter faturamento' });
            }
    }    

    this.getALLvaluesMonth = async (req, res, next) => {
        try{
        const ValuesMonth = await this.serviceFaturamento.getAllFaturamentoService();
        res.status(200).json({message: "Extrato apenas valores:", ValuesMonth});
        }catch(error){
            console.error('Erro ao obter faturamento:', error);
            res.status(500).json({ error: 'Erro ao obter faturamento' });
        }
    }

    this.getLowestValuePerDay = async (req, res, next) => {
        try{
        const LowestValues = await this.serviceFaturamento.LowestValuePerDay();
        res.status(200).json({message: "Menor valor faturado:", LowestValues});
        }catch(error){
            console.error('Erro ao obter faturamento:', error);
            res.status(500).json({ error: 'Erro ao obter faturamento' });
        }
    }

    this.getLargestValuePerDay = async (req, res, next) => {
        try{
        const BiggerValues = await this.serviceFaturamento.LargestValuePerDay();
        res.status(200).json({message: "Maior valor faturado:", BiggerValues});
        }catch(error){
            console.error('Erro ao obter faturamento:', error);
            res.status(500).json({ error: 'Erro ao obter faturamento' });
        }
    }

    this.getAverageofthemonth = async (req, res, next) => {
        try{
        const Average = await this.serviceFaturamento.AverageofthemonthService();
        res.status(200).json({message: "Faturamento de data acima da media:", Average});
        }catch(error){
            console.error('Erro ao obter faturamento:', error);
            res.status(500).json({ error: 'Erro ao obter faturamento' }) ;
        }
    }
}
    
}