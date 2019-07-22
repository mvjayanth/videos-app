import React from 'react';


const VideoItem = ({ video, onVideoSelect }) => {
return (
    <div className="video-item" onClick={() => onVideoSelect(video)}>
        <div className="pic">
        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
        </div>
        <div className="desc">
        <h6>{video.snippet.title}</h6>
        <p>{video.snippet.channelTitle}</p>
        </div>
    </div>
)
}

export default VideoItem;