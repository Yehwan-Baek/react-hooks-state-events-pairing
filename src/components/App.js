import React, {useState} from "react";
import CommentList from "./CommentsList.js";
import VideoDetails from "./VideoDetails.js";

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
      <VideoDetails 
        video={video}
        handleUpvotes={handleUpvotes}
        handleDownvotes={handleDownvotes}
      />
      <CommentList 
        video={video}
        showComments={showComments}
        handleToggleComments={handleToggleComments}
        handleRemoveComment={handleRemoveComment}
        handleSortComments={handleSortComments}
      />
    </div>
  );
}

export default App;
