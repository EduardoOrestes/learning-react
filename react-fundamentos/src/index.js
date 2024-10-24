// START - yarn dev

// Proxima Introdução ao Styled Components

import React from "react";
import ReactDOM from 'react-dom';

import GlobalStyle from './styles/global'

// importa por default o arquivo index, caso contrario deve colocar o nome do arquivo
import App from './components/App';

// import './index.scss'; OLD

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
