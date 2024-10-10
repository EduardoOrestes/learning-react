import React, { useState } from 'react';

import Post from './Post';
import Header from './Header';

const category = 'Posts da semana';
// const title = 'Título da notícia';

export default function App() {
  // [posts, setPosts] - vai desestruturizar
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20 },
    { id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 10 },
    { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 16 },
  ]);

  function handleRefresh() {
    // o setTimeout é so para fazer o teste de clicar duas vezes
    setTimeout(() => {
      // prevState - é a lista de posts antes de fazer a atualização
      // ele é usado para nao ter inconsistencia de dados
      // ele so pega o valor de posts quando ele realmente for ser executado
      // ex.: se o usuário clicar duas vezes, e a segunda for antes do state "post" ter
      // sido atualizado, ele vai adicionar apenas um post
      setPosts((prevState) => [
        // ao inves de passar o prevState é possivel passar o setPosts([...]), se nao for depender
        // do valor anterior dos posts
        ...prevState,
        {
          id: Math.random(),
          title: `Title#0${prevState.length + 1}`,
          subtitle: `Sub#0${prevState.length + 1}`,
          likes: 50,
        },
      ]);
    }, 2000);
  }

  return (
    <>
      <Header title="Learning REACT">
        {/* Aqui pode ser passado o que quiser exibir la no children */}
        <h2>Sending body to component...</h2>
      </Header>

      {/* added id 'idTitle' to tag */}
      <h1 id="idTitle">JStack`s Blog {console.log('Log dentro do JSX')}</h1>
      <h2>
        {category}
        <button onClick={handleRefresh}>Atualizar</button>
      </h2>

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


      outra opcao:
      <Post
        likes={20}
        post={{
          title: `${title} 01`,
          subtitle: "Subtitulo da noticia 01"
        }}
      />
      */}

      {/* usando map */}
      {/* sempre que for usado o MAP, ele deve ter a propriedade key do react (é como se fosse o ID) */}
      {posts.map(post => (
        <Post
          key={post.id}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
        />
      ))}
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
