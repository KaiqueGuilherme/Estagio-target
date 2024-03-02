import ServiceString from "../Services/StringSpeakService.js";


export default class ControllerString{

    constructor() {
        this.serviceSpeak = new ServiceString();
    
        this.PostText = async (req, res, next) => {

            const Text = req.body.Text;
            console.log(Text);
            try{
            const TextSer = await this.serviceSpeak.revertText(Text);
            
            res.status(200).json({message: "Frase Invertida:", TextSer});
            }catch(error){
                console.error('Erro ao obter faturamento:', error);
                res.status(500).json({ error: 'Erro ao obter faturamento' });
            }
    }    

}
    
}