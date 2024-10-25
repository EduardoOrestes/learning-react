// START - yarn dev

// Proxima Estilizando Components com styled

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
