const apiCall = new Promise((resolve, reject) => {
  // o setTimeout é so para simular que é um processo demorado
  setTimeout(() => {
    // resolve('Successo');

    reject('Error')
  }, 2000);
});

// .then recebe uma função como único argumento,
// essa função é basicamente a qual vai ser executada quando o resolve é chamado
// .catch funciona da mesma forma que o .then, mas é referente ao erro

apiCall
  .then((resposta) => {
    console.log(resposta)
  })
  .catch((erro) => {
    console.log(erro)
  });

  console.log('Depois da promise...')


// =================================================================================================

// para executar o await, ele deve estar dentro de uma função assincrona
// com o await, o codigo so vai seguir depois que a promisse mudar o status
// de pending para rejected ou resolved

// async - diz que a função é assincrona
// async function run() {
//   try {
//     const resposta = await apiCall;

//     console.log(resposta)
//   } catch (erro) {
//     console.log(erro)
//   }
// }

// run();

// =================================================================================================

// DIFERENÇA ENTRE AS PROMISES
// quando se usa o then e o catch, o codigo nao fica travado esperando o resultado;
// na function async, o codigo vai ficar esperando o resultado para depois continuar

