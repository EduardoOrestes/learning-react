const array = [
  { name: 'iPhone', price: 5000 , quantity: 2 },
  { name: 'Samsung', price: 4000, quantity: 3 },
  { name: 'Xaiomi', price: 3000, quantity: 1 },
];

// =================================================================================================
// .find
// =================================================================================================

// ele espera que o conteudo da funcao retorne true ou false
// se tiver mais de um, vai trazer só o primeiro, porque quando ele achar um ja vai retornar o
// elemento e nao continua

// const result = array.find((product) => {
//   return product.price > 1000
// });

// short sintaxe
const result = array.find((product) => product.price > 1000);

// console.log({ result });


// =================================================================================================
// .findIndex
// =================================================================================================

// parecido com o find, mas ele vai retornar apenas o index do element, retorna a posicao do elemento
const resultIndex = array.findIndex((product) => product.price == 'Samsung');

// console.log({ resultIndex });
// console.log('Produto:', array[resultIndex]);


// =================================================================================================
// .some
// =================================================================================================

// verificar se algum elemento do array bate com a condicao colocada dentro da funcao
// ele retorna um boolean

const some = array.some((product) => product.price < 1000);

// console.log({ some });


// =================================================================================================
// .every
// =================================================================================================

// parecido com o some, so que ele verifica se todos atende a condicao

const every = array.every((product) => product.price < 10000);

// console.log({ every });


// =================================================================================================
// .map
// =================================================================================================

// precisa dar o return. Com os parenteses, ja se subentend que o que tem dentro é o retorno

// const map = array.map((product) => {
//   return {
//     ...product,
//     subTotal: product.quantity * product.price
//   };
// });

// short sintaxe
// const map = array.map((product) => ({
//   ...product,
//   subtotal: product.quantity * product.price
// }));

// console.log(map);


// =================================================================================================
// .filter
// =================================================================================================

// const filter = array.filter((product) => product.quantity > 1 );

// console.log({ filter });


// =================================================================================================
// .reduce
// =================================================================================================

// recebe dois argumentos...
// valor inicial do reduce é o zero "}, 0);" - poderia ser qualquer tipo (string, objeto, array)
// esse zero é representado pela variavel accumulator

// accumulator é uma variavel que navega em todas iterecaoes e recebe o retorno de cada iteracao

// vai passar 3 vezes porque tem 3 produtos,
// a cada passada, vai somar mais um ao accumulator que iniciou com 0
// const reduce = array.reduce((accumulator, product) => {
//   return accumulator + 1;
// }, 0);

// console.log({ reduce }); -> result: { reduce: 3 }

// vai somar e retornar o valor total de dos produtos
const reduce = array.reduce((accumulator, product) => {
  return accumulator + ( product.price * product.quantity)
}, 0);

console.log({ reduce });
