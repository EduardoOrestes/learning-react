import React from 'react';

// usado para tipar as props
import PropTypes from 'prop-types';

export default function Post(props) {
  console.log(props);

  return (
    <>
      <article>
        <strong>{ props.post.title }</strong><br />
        <small>{ props.post.subtitle }</small><br />

        Media: {props.likes / 2}
      </article>

      <br />
    </>
  )
}

// Adicionando tipagem para as props
// .shape() - para objetos
Post.propTypes = {
  likes: PropTypes.number.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
}
