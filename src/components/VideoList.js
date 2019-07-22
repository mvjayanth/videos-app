import React from 'react';
import './style.css';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return <VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video}></VideoItem>
    })

return <div className="video-list">{renderedList}</div>

}

export default VideoList;