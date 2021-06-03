const Usuario = require ('../models/usuario.model');

module.exports = {
    async index(req, res){
        const user = await Usuario.find();
        res.json(user);
    },
    async create(req, res){
        const {nome, email, senha} = req.body;

        let data = {};
        
        let user = await Usuario.findOne({email});

        if(!user){
            data = {nome, email, senha};
            user = await Usuario.create(data);

            return res.status(200).json(user);
        }else{
            return res.status(500).json(user);
        }
    },
    async details(req, res){
        const id = {_id} = req.params;
        const user = await Usuario.findOne(id);
        res.json(user);
    },
    async delete(req, res){

        const id = {_id} = req.params;
        const user = await Usuario.findByIdAndDelete(id);
        return res.json(user);

    },
    async update(req, res){

        const {_id, nome, email, senha} = req.body;
        const data = {nome, email, senha};
        const user = await Usuario.findOneAndUpdate(_id, data,{new:true});
        res.json(user);
        
    }
};