const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const route = require('./src/routes.js');



const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/obras-database', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, function (err){
        if(err){
            console.log(err)
        }else{
            console.log('MongoDB CONECTADO com sucesso!')
        }
    }
);


app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(route);

app.listen(port, function(){
    console.log('Server running on port %d', port)
});

