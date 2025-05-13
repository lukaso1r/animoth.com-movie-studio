import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleVideo } from '../../api/getSingleVideo';

import VideoSingleItem from '../../components/VideoSingleItem';

const VideoDetails: React.FC = () => {

    const [video, setVideo] = useState<any>(null);

    const documentId = useParams().documentId;

    useEffect(() => {
        const fetchVideo = async () => {
            const videoData = await getSingleVideo(documentId as string);
            setVideo(videoData);
        };
        fetchVideo();
    }, [documentId]);
    
    return (
        <div className="videoDetails px-10 flex flex-col gap-10 items-start justify-start max-h-screen">
            <h1>Video Details, video id: {documentId}</h1>
            <h2>Video Title: {video?.title}</h2>
            <p>Details about the video will be displayed here.</p>
            <div className='videoBox bg-red bg-[red] p-3 w-auto ' >   
                {video && <VideoSingleItem video={video}/>}
                
            </div> 
        </div>
    )

}

export default VideoDetails