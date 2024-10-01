import React from 'react';

// usando {} para desestruturar a props enviada onde chama esse componente

// a children esta dentro de props (é do react)... ela é o body de onde chama esse componente

// export default function Header(props) {
// ai pega o valor {props.title}

export default function Header({ title, children }) {
  return (
    <>
      <h1>
        {title}
      </h1>

      {children}
    </>
  )
}
