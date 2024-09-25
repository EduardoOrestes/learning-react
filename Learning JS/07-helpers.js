// INCLUDES - verificar se dentro de uma string ou array existe o que esta sendo passado para ela

const tech = 'Node.js'

const includesString = tech.includes('Node'); // Deve ser exato, ele é case sensitive

// quando passado como objeto no console log ele retorna { includes: xxx }
console.log({ includesString });



const array = ['Node.js', 'React', 'TypeScript'];

// deve ser exatamente o conteudo do array e nao so uma parte
const includesArray = array.includes('React')

console.log({ includesArray });


// START WITH - parecido com o includes, serve para verificar se uma string comeca com uma sequencia
// de caracteres

const startsWith = tech.startsWith('No'); // case sensitive
console.log({ startsWith });


// ENDS WITH - parecido com start with, so que no final

const endsWith = tech.endsWith('.js'); // case sensitive
console.log({ endsWith });
