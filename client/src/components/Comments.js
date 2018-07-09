import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import "../css/App.css"


class Comments extends Component {

  constructor(props) {
    super(props)
  }

  renderComments() {
    const { comments } = this.props
    if(comments){
    return comments.map(comment =>
      <ListGroupItem key={comment.id}>{comment.body}</ListGroupItem>
      )
    }
  }

  renderNewComment() {
    const { id, body } = this.props.newComment
    if(body){
      return <ListGroupItem key={id}>{body}</ListGroupItem>
    }
  }


render() {
    return (
      <div className="comments-wrapper">
      <ListGroup>
      {this.renderComments()}
      {this.renderNewComment()}
      </ListGroup>
      </div>
    )
  }
}


export default Comments
