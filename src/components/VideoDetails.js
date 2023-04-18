import React from "react";

function VideoDetails({video, handleUpvotes, handleDownvotes}) {

    return (
        <div className="video-details">
            <h2>{video.title}</h2>
            <p>{video.views} views | Uploaded {video.createdAt}</p>
            <button onClick={handleUpvotes}>{video.upvotes}👍</button>
            <button onClick={handleDownvotes}>{video.downvotes}👎</button>
        </div>
    );
}

export default VideoDetails;