import React from 'react';


const VideoDetail = ({ video }) => {
    if(video){
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

        return (
            <div className="video-detail">
                <iframe width="100%" height="400" src={videoSrc} frameBorder="0" allowFullScreen />
                <h5>{video.snippet.title}</h5>
                <p>{video.snippet.description}</p>
            </div>
        )   
    }
    return (
        <div className="video-detail"></div>
    )
}

export default VideoDetail;