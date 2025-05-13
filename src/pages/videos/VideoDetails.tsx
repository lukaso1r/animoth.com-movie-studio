import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleVideo } from '../../api/getSingleVideo';

import VideoSingleItem from '../../components/VideoSingleItem';
import Header from '../../components/Header';
import Menu from '../../components/Menu'


const VideoDetails: React.FC = () => {

    const [video, setVideo] = useState<any>(null);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const documentId = useParams().documentId;

    useEffect(() => {
        const fetchVideo = async () => {
            const videoData = await getSingleVideo(documentId as string);
            setVideo(videoData);
        };
        fetchVideo();
    }, [documentId]);
    
    return (
        <>
        <Header  setIsMenuVisible={setIsMenuVisible} isMenuVisible={isMenuVisible}/>
        {isMenuVisible && <Menu />}
        <div className="videoDetails py-4 pt-20 flex flex-col gap-16 items-center justify-start bg-black text-white min-h-screen">
            <div className='singleVideoTitleTex flex flex-col items-center justify-start gap-12'>
                <h1 className='text-8xl font-bold'>{video?.title}</h1>
                <p className='text-center w-2/3 font-medium text-lg'>Description soon</p>
            </div>
           <div className='videoBox w-full p-0 m-0 aspect-video' >   
                {video ? (
                    <VideoSingleItem video={video} />
                ) : (
                    <div className="skeleton-loader animate-pulse bg-gray-800 w-full h-full" />
                )}
                
            </div> 
        </div>
        
        </>
    )

}

export default VideoDetails