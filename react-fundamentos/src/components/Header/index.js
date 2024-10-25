// Proxima - CSS Modules

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';
// esse import é nomeado porque o css modules está sendo usado
// import * as styles from './Header.module.scss'; OLD

// Context API
// tem que desestruturar {} porque foi um export nomeado
import { ThemeContext } from '../../context/ThemeContext';

// Criado usando o Styled Components
const Title = styled.h1`
  color: #637bf3;
`;

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
        fontFamily: 'sans-serif',
        marginBottom: 24
      }}
    >
      <Title>
        {/* {props.title || 'Learning React'} */}
        {props.title}
      </Title>

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
