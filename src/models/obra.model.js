const mongoose = require('mongoose');
const DataSchema = new mongoose.Schema({

    nome_obra: {
        type: String,
        require: true
    },
    responsavel_obra:{
      type: String,
      required: true
    },
    inicio_obra:{
        type: Date,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
});


const Obra = mongoose.model('Obra', DataSchema);
module.exports = Obra;