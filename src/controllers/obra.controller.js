const Obra = require ('../models/obra.model');

module.exports = {
    async index(req, res){
        const obra = await Obra.find();
        res.json(obra);
    },
    async create(req, res){
        const {nome_obra, responsavel_obra, inicio_obra} = req.body;

        let data = {};
        
        let obra = await Obra.findOne({nome_obra});

        if(!obra){
            data = {nome_obra, responsavel_obra, inicio_obra};
            obra = await Obra.create(data);

            return res.status(200).json(obra);
        }else{
            return res.status(500).json(obra);
        }
    },
    async details(req, res){
        const id = {_id} = req.params;
        const obra = await Obra.findOne(id);
        res.json(obra);
    },
    async delete(req, res){

        const id = {_id} = req.params;
        const obra = await Obra.findByIdAndDelete(id);
        return res.json(obra);

    },
    async update(req, res){

        const {_id, nome_obra, responsavel_obra, inicio_obra} = req.body;
        const data = {nome_obra, responsavel_obra, inicio_obra};
        const obra = await Obra.findOneAndUpdate(_id, data,{new:true});
        res.json(obra);
        
    }
};