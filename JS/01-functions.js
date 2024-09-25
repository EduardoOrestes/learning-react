// funcao normal ->
// function firstFunction() {
//   // this - é essa funçao
//   this.name = 'Eduardo' // é semelhante ao construtor
// };

// console.log(new firstFunction()); // sempre que se coloca um new antes do nome da funcao, esta dando
// a essa funcao um construtor, transformando ela em um objeto, caso contrario, ela é undefined,
// ate que se tenha um retorno dela

// arrow function ->
// nao tem construtor
// const secondFunction = () => {
//   // this -é no contexto do node
//   this.name = 'Eduardo';
// }

// secondFunction(); //  tem que executar a funcao para ela rodar

// console.log(this);

// diferença: contexto do objecto this.
// na funcao normal tem o seu proprio this e na awwor o this fica limitado ao scope onde elas foram
// criadas


// this no browser - é o objeto window



// function thirdFunction() {
//   this.name = "Fulano"; // this do node

//   const fourthFunction = () => {
//     console.log(this);
//     this.lastName = 'Silva'; // this da function, representa a thirdFunction
//   }

//   fourthFunction();
// };

// console.log(new thirdFunction());
// console.log(this); // this do node


// =================================================================================================
// PARAMS
// =================================================================================================


// function params() {
//   console.log(arguments); // arguments pega todos os parametros passados para a funcao
// }

// console.log(params(1, 2, 'Eduardo'))

// const testing = () => {
//   console.log(arguments); // na arrow funcation, ele pega o contexto, igual ao this
// }


// rest (...) - ao inves de pegar so o segundo, vai pegar todos o restante
// function parametros(firstParam, ...params) {
//   console.log({ firstParam });
//   console.log({ params });
// }

// parametros(1, 2, 3, 4, 'Eduardo');


// arror functions

// const soma = () => {
//   console.log('testing...');
// };
// soma();

// short sintaxe - retorna direto um valor
// const soma = () => ('hello...') // o parenteses é opcional
// console.log(soma());

// short sintaxe - retorna direto um valor
// const algumNum = 10;
// const soma = () => (
//   algumNum >= 10 ? 'Maior' : 'Menor'
// );
// console.log(soma());


// retornar um Objecto sem ter um corpo
const getUsers = () => ({
  id: 1,
  name: 'Eduardo'
});

console.log(getUsers());
