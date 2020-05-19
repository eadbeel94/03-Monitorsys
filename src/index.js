//Inicializo servidor
const express = require('express');                                 //Solicito a express desde node modules
const path = require('path');                                       //Solicito el metodo path desde node modules
const cors = require('cors');                                       //Solicito Cors
const server = express();                                           //Instancio a express para usar sus metodos
                                     
//Settings
server.set('port',process.env.PORT || 3010);                        //Declaro una variable con el numero del puerto en formato Express

//Middlewares
server.use(express.json());                                         //Utilizo el middleware para usar JSONs
server.use(cors());                                                 //Utilizo el middleware cors para poder enlazar la base de datos
//Middleware only production                                        //desde cualquier URL
const compression = require('compression');                           //Solicito metodo de compression para usar Gzips
server.use(compression());                                          //Utilizo a compresison

server.get('*.js', function(req, res, next) {                       //Mando llamar en vez de los JS a los JS.GZIP
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/javascript');
    next();
});
server.get('*.css', function(req, res, next) {                      //Mando llamar en vez de los cSS a los CSS.GZIP
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/css');
    next();
});

//Routes
server.use(require('./routess.js'));                                //Solicito la seccion de routes con todas las Rest API

//Static files
server.use(express.static(path.join(__dirname, '../public')));      //Solicito el index.html generado en public

//Iniciando el servidor
server.listen(server.get('port'), function(){                       //Creo al servidor
    console.log(`Server on port ${server.get('port')}`);            //Imprimo en pantalla el status del servidor
});