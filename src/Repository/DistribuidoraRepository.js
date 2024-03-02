
import fs from 'fs';
import Distribuidora from '../Models/ModelDistribuidora.js';



export default class RepositoryDistribuidora {

    async getAllDistribuidoraRepository() {
        try {
            const Json = JSON.parse(await this.readFileAsync('./src/Repository/Distribuidora.json', 'utf8'));
            const data = Json.faturamentoCidades;
            const response = data.map(faturamentoCidades => new Distribuidora(faturamentoCidades.cidade, faturamentoCidades.Tipo, faturamentoCidades.Valor));
            return response;
        } catch (error) {
            console.error('Erro ao obter dados:', error);
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


}