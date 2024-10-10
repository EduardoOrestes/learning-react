import React from 'react';

import PropTypes from 'prop-types';

// usando {} para desestruturar a props enviada onde chama esse componente

// a children esta dentro de props (é do react)... ela é o body de onde chama esse componente

// export default function Header(props) {
// ai pega o valor {props.title}

export default function Header(props) {
  return (
    <>
      <h1>
        {/* {props.title || 'Learning React'} */}
        {props.title}
      </h1>

      {props.children}
    </>
  )
}

// .node é para passar um conteudo (node)
// title - required / children - optional
Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}


// quando nao passar o title, vai pegar o defaultProps
Header.defaultProps = {
  title: 'Learning React'
}
