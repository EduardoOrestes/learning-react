// FUNCIONA COM ARQUIVOS JS

// module.exports = function sayHello(name) {
//   console.log(`Olá, ${name}`);
// }

// com module.exports a importacao deve ser -> const sayHello = require('./sayHello');





// no esmodules se exporta com EXPORT DEFAULT
// NAO FUNCIONA COM ARQUIVOS JS, OR ARQUIVOS DEVEM SER RENOMEADOS PARA MJS A NAO SER QUE CRIE O PACKAGE.JSON

// Pode ser no inicio da função (a palavra default é opcional, se tiver é DEFAULT se nao tiver é NOMEADA)
// export default function sayHello(name) {
//   console.log(`Olá, ${name}`);
// }


// Pode ser no final da função

function sayHello(name) {
  console.log(`Olá, ${name}`);
}

// EXPORTACAO DEFAULT
// export default sayHello;

// EXPORTACAO NOMEADA - quando quiser mander o nome ou tmb pode renomear no outro arquivo
export {sayHello};


// No mesmo arquivo pode ter a funcao nomeada e a exportacao default

const userName = 'Eduardo'
export default userName;