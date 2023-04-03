// const initialContainerBackgroundClassNames = [
//   'amber',
//   'blue',
//   'orange',
//   'emerald',
//   'teal',
//   'red',
//   'light-blue',
// ]

// Write your code here

import {Component} from 'react'

import './index.css'

class Comments extends Component {
  render() {
    return (
      <div className="comment-main-container">
        <div className="comment-top-section">
          <h1 className="comment-main-heading">Comments</h1>
          <div className="card-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comment-image"
            />
            <div className="comment-card-container">
              <h1 className="card-heading">
                Say something about 4.0 technologies
              </h1>
              <input
                type="text"
                placeholder="Your Name"
                className="user-name"
              />
              <textarea rows="10" cols="20" className="user-comment">
                Your Comment
              </textarea>
              <button type="button" className="add-button">
                Add Comment
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="bottom-section">
          <h1>Comments</h1>
        </div>
      </div>
    )
  }
}

export default Comments
