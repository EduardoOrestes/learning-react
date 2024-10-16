import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

// Context API
// tem que desestruturar {} porque foi um export nomeado
import { ThemeContext } from './ThemeContext';

// usando {} para desestruturar a props enviada onde chama esse componente

// a children esta dentro de props (é do react)... ela é o body de onde chama esse componente

// export default function Header(props) {
// ai pega o valor {props.title}

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: '#ccc',
        fontFamily: 'sans-serif'
      }}
    >
      <h1>
        {/* {props.title || 'Learning React'} */}
        {props.title}
      </h1>

      <Button onClick={onToggleTheme}>
        Mudar tema
      </Button>

      {props.children}
    </div>
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
