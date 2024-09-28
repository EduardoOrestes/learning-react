import React from 'react';

import Post from './Post';

const category = 'Posts da semana';
const title = 'Título da notícia';

export default function App() {
  return (
    <>
      {/* added id 'idTitle' to tag */}
      <h1 id="idTitle">JStack`s Blog {console.log('Log dentro do JSX')}</h1>
      <h2>{category}</h2>

      <hr />

      {/* <Post
        title={`${title} 01`}
        subtitle="Subtitulo da noticia 01"
      />

      <Post
        title={`${title} 02`}
        subtitle="Subtitulo da noticia 02"
      />

      No post receberia a props e seria acessada - { props.title }
      */}

      <Post
        post={{
          title: `${title} 01`,
          subtitle: "Subtitulo da noticia 01"
        }}
      />

      <Post
        post={{
          title: `${title} 02`,
          subtitle: "Subtitulo da noticia 02"
        }}
      />

      <Post
        post={{
          title: `${title} 03`,
          subtitle: "Subtitulo da noticia 03"
        }}
      />
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
