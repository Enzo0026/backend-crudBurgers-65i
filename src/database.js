import mongoose from 'mongoose';

const url = 'mongodb://127.0.0.1:27017/crudburgers65i'

mongoose.connect(url);

const connetion = mongoose.connection;

connetion.once('open', ()=> {
    console.log('BD Conectada');    
});