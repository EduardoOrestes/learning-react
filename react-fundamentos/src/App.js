import React from 'react';

const category = 'Posts da semana';

export default function App() {
  return (
    <>
      <h1>JStack`s Blog {console.log('Log dentro do JSX')}</h1>
      <h2>{category}</h2>
    </>
  )
}


// o export default pode ser no final antes da function
// export default App;


// React.Fragment
// usado para envolver os filhos, nao adiciona nenhuma tag/component ao redor deles
// pode ser usado:

// <React.Fragment>
//   ...
// </React.Fragment>

// Desestruturando
// import React, { Fragment } from 'react';
// <Fragment>
//   ...
// </Fragment>

// Short sintaxe - a unica diferenca é que nao se pode passar atributo para ela
// <>
//   ...
// </>
