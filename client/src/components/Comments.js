import React, { Component } from 'react'


class Comments extends Component {

  constructor(props) {
    super(props)
  }

  renderComments() {
    if(this.props.comments.length){
    return this.props.comments.map(comment =>
      <li key={comment.id}>{comment.body}</li>
      )
    }
  }

  renderNewComment() {
    if(this.props.newComment){
      debugger
    }
  }


render() {
    return (

      <ul>
      {this.renderComments()}
      {this.renderNewComment()}
      </ul>

    )
  }
}


export default Comments
