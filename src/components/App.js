import React, {useState} from "react";
import videoData from "../data/video.js";

function App() {
  const [video, setVideo] = useState(videoData)
  const [showComments, setShowComments] = useState(true)

  const handleUpvotes = () => {
    setVideo({...video, upvotes: video.upvotes + 1});
  }

  const handleDownvotes = () => {
    setVideo({...video, downvotes: video.downvotes + 1});
  }

  const handleToggleComments = () => {
    setShowComments(!showComments);
  }

  const handleRemoveComment = (id) => {
    setVideo({
      ...video,
      comments: video.comments.filter((comment) => comment.id !== id)
    })
  }

  const handleSortComments = () => {
    setVideo({
      ...video,
      comments: video.comments.sort((a,b) =>
        a.username.localeCompare(b.username)
      )
    })
  }

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

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />

      <div className="video-details">
        <h2>{video.title}</h2>
        <p>{video.views} views | Uploaded {video.createdAt}</p>
        <button onClick={handleUpvotes}>{video.upvotes}👍</button>
        <button onClick={handleDownvotes}>{video.downvotes}👎</button>
      </div>
      {commentList}
    </div>
  );
}

export default App;
