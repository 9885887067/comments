import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails} = props
  const {id, name, comment, date, isLiked, initialClassName} = commentDetails
  const postTime = formatDistanceToNow(date)
  return (
    <li className="list-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">name[0].toUpperCase()</p>
        </div>
      </div>
      <div className="user-name-container">
        <p className="name">{name}</p>
        <p className="time">{postTime}</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
          className="like"
        />
        <button>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
