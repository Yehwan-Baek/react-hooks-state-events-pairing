import React from "react";

function CommentList({video, showComments, handleToggleComments, handleRemoveComment, handleSortComments}) {

    const commentList = showComments ? (
        <div className="comments">
          <button onClick={handleToggleComments}>Hide comments</button>
          <h3>Comments</h3>
          {video.comments.map((comment) => (
            <div key={comment.id}>
              <h3>{comment.user}</h3>
              <p>{comment.comment}</p>
              <button onClick={()=>handleRemoveComment(comment.id)}>
                Remove Comment
              </button>
            </div>
          ))}
          <button onClick={handleSortComments}>Sort by Username</button>
        </div>
      ) : (
        <button onClick={handleToggleComments}>Show Comments</button>
      )
    return commentList;
}

export default CommentList;