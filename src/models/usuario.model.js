const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const DataSchema = new mongoose.Schema({

    nome: {
        type: String,
        require: true,
    },
    email:{
      type: String,
      unique: true, 
      required: true,
      lowercase: true,  
    },
    senha:{
        type: String,
        required: true,
        select: false,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

DataSchema.pre('save', function(next){
    if(! this.isModified("senha")){
        return next();
    }
    this.senha = bcrypt.hashSync(this.senha, 10);
    next();
});

DataSchema.pre('findOneAndUpdate', function (next){
    const password = this.getUpdate().senha + '';
 
    this.getUpdate().senha = bcrypt.hashSync(password, 10);
    
    next();
});

const Usuario = mongoose.model('Usuario', DataSchema);
module.exports = Usuario;