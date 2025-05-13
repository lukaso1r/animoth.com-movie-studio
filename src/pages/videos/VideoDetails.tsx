import React from 'react';
import { useParams } from 'react-router-dom';

const VideoDetails: React.FC = () => {

    const videoId = useParams().id;

    return (
        <div className="videoDetails px-10">
        <h1>Video Details, video id: {videoId}</h1>
        <p>Details about the video will be displayed here.</p>
        </div>
    )

}

export default VideoDetails