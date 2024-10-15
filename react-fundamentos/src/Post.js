import React from 'react';

// usado para tipar as props
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

export default function Post(props) {
  // console.log(props);

  // if (props.post.read) {
  //   return <h2>{props.post.title} já foi lido.</h2>
  // }

  return (
    <>
      {props.post.read
        ? <h2>{props.post.title} já foi lido.</h2>
        : <article>
            <PostHeader
              onRemove={props.onRemove}
              post = {{
                id: props.post.id,
                title: props.post.title,
                read: props.post.read,
              }}
            />
            <br />
            <small>{ props.post.subtitle }</small><br />

            Media: {props.post.likes / 2}
          </article>
      }
      <br />
    </>
  )
}

// Adicionando tipagem para as props
// .shape() - para objetos
Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired
  }).isRequired,
}
