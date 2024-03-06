import {Component} from 'react'

import './index.css'

import CommentItem from '../CommentItem'

import {v4 as uuidv4} from 'uuid'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsList: [],
    nameInput: '',
    textAreaInput: '',
  }

  onChangeInput = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  onChangetextArea = event => {
    this.setState({
      textAreaInput: event.target.value,
    })
  }

  onAddComment = event => {
    event.preventDeafault()
    const {nameInput, textAreaInput} = this.state
    const initialContainerBackgroundClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name: nameInput,
      comment: textAreaInput,
      date: new Date(),
      isLiked: false,
      initialClassName: initialContainerBackgroundClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
    }))
  }
  render() {
    const {nameInput, textAreaInput, commentsList} = this.state

    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Comments</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="image"
          />

         
          <form className="form-container" onSubmit={this.onAddComment}>
           <p className="para">Say something about 4.0 Technologies</p>
            <input
              type="search"
              placeholder="Your Name"
              className="input"
              onChange={this.onChangeInput}
            />
            <textarea
              rows="8"
              type="textarea"
              placeholder="Your Comment"
              className="textarea"
              onChange={this.onChangetextArea}
            ></textarea>
            <button className="button" type="button">
              Add Comment
            </button>
          </form>
          <hr className="separator" />

          <p className="desc">
            {commentsList.length}
            <span className="span">Comments</span>
          </p>

          <ul className="list-container">
            {commentsList.map(comment => (
              <CommentItem commentDetails={comment} key={comment.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
