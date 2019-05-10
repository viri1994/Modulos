'use strict'
const http= require('http');
const port = 3000;
const router = require('./router');

http.createServer(router).listen(port);




//http.createServer((request, response)=>{//CREAR UN SERVIDOR
	//if(request.url==="/Hola"){ //lo que el usuario escribe
		//response.end('Hola como estas'); //lo que la pagina responde
	//}

	//console.log(request.url)
	//response.end('HELLO VIRI');//si no cumple el if imprime Hello viri

//}).listen(3000);




	
