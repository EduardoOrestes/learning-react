import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// Usado para Context API
import { ThemeContext } from '../context/ThemeContext';

export default function Button(props) {
  // Usado no Context API /  desestruturando
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={props.onClick}
      style={{
        color: theme === 'dark' ? '#fff' : '#000',
        background: theme === 'dark' ? '#000' : '#fff',
      }}
    >
      {props.children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}
