import React from 'react';

export default function Post(props) {
  console.log(props);

  return (
    <>
      <article>
        <strong>{ props.post.title }</strong><br />
        <small>{ props.post.subtitle }</small>
      </article>

      <br />
    </>
  )
}
