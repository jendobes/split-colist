import React from 'react'

const Comments = (props) => {

  const renderComments = props.coliving.comments.map(comment =>
    <li key={comment.id}>{comment.body}</li>
  )

  return (
    <ul>
    {renderComments}
    </ul>
  )
}

export default Comments
