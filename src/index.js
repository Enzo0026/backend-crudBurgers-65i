import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import './database';

//console.log("desde mi backend");

//Crear instancia de Express
const app = express();

//Configurar el puerto

app.set('port', process.env.PORT || 4001);

app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto ' + app.get('port'));    
});

//Middleware

app.use(morgan('dev')); //Nos da información de la consulta: tipo, status y tiempo de ejecución.
app.use(cors()); //Nos permite recibir peticiones remotas a nuestra API
app.use(express.json());
app.use(express.urlencoded({ extended: true})); //Estos dos últimos nos permiten recibir e interpretar el json de la request
/* app.use(express.static('public')); */
app.use(express.static(path.join(__dirname, '../public')));
//Rutas de prueba

app.get('/', (req, res)=>{
    res.send('Esto es una prueba de mi backend')
})

app.delete('/borrarProducto', (req, res)=>{
    res.send('Se borró el producto')
})