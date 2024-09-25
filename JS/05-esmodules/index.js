//  importação com modules.exports
// FUNCIONA COM ARQUIVOS JS
// const sayHello = require('./sayHello');


// importação com ESMODULES

// NAO FUNCIONA COM ARQUIVOS JS, DEVE SER RENOMEADO PARA MJS E DEVE SER PASSADA A EXTENÇÃO DO ARQUIVO

// UMA OPCAO

// import sayHello from './sayHello.mjs';
// sayHello('Eduardo');

// OUTRA OPCAO

// IMPORT DE UM MODULE COM EXPORTACAO DEFAULT
// import sayHello from './sayHello.js';

// IMPORT DE UM MODULE COM EXPORTACAO NOMEADA
// import { sayHello } from "./sayHello.js";

// se quiser renomear a funcao
// userName - é a exportacao default
// { sayHelloas testing} - é a exportacao nomeada
import userName, { sayHello as testing } from "./sayHello.js";

testing(userName);


