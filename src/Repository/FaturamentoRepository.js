
import fs from 'fs';
import Faturamento from '../Models/ModelFaturamento.js';



export default class RepositoryFaturamento {

    async getAllFaturamentoRepository() {
        try {
            const Json = JSON.parse(await this.readFileAsync('./src/Repository/dados.json', 'utf8'));
            const data = Json.faturamentodoMes;
            const response = data.map(faturamentodoMes => new Faturamento(faturamentodoMes.dia, faturamentodoMes.valor));
            return response;
        } catch (error) {
            console.error('Erro ao obter faturamento:', error);
            return [];
        }
    }

    async readFileAsync(path, options) {
        return new Promise((resolve, reject) => {
            fs.readFile(path, options, (error, data) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            });
        });
    }

    async getValuesDay() {
        try {
            const data = JSON.parse(await this.readFileAsync('./src/Repository/dados.json', 'utf8'));
           const filteredData = data.faturamentodoMes.filter(faturamentodoMes => faturamentodoMes.valor !== 0);
           const response = filteredData.map(faturamentodoMes => new Faturamento(faturamentodoMes.dia, faturamentodoMes.valor));
           return response;
        } catch (error) {
            console.error('Erro ao obter faturamento:', error);
            return [];
        }
    }
    

}