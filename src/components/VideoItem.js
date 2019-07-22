import React from 'react';


const VideoItem = ({ video, onVideoSelect }) => {
return (
    <div className="video-item" onClick={() => onVideoSelect(video)}>
        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
        <h6>{video.snippet.title} <small>{video.snippet.channelTitle}</small></h6>
    </div>
)
}

export default VideoItem;