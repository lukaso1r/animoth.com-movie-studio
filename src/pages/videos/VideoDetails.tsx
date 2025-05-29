import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
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
            console.log('Fetched video:', videoData);
        };
        fetchVideo();
    }, [documentId]);
   
    // const testFn = () => {
    //     console.log('Test function called');
    //     console.log('Video Description:', video?.Description);
    // }

    return (
        <>
        <Header setIsMenuVisible={setIsMenuVisible} isMenuVisible={isMenuVisible}/>
        {isMenuVisible && <Menu />}
        <div className="videoDetails py-4 pt-20 pb-24 flex flex-col gap-16 items-center justify-start bg-black text-white min-h-screen">
           <div className='videoBox w-[70%] p-0 m-0 aspect-video' >   
                {video ? (
                    <VideoSingleItem video={video} />
                ) : (
                    <div className="skeleton-loader animate-pulse bg-gray-800 w-full h-full" />
                )}
            </div> 
            <div className='singleVideoTitleTex flex flex-col items-start justify-start gap-12 w-[70%]'>
                <div className='videoInfo flex flex-row items-start justify-start w-full gap-20'>
                    <div className='videoInfoDetails min-w-max'>
                        <ul>
                            <li className='text-gray-400'>Time: <span className='text-white font-medium pl-2'>{video?.time}</span></li>
                            <li className='text-gray-400'>Director: <span className='text-white font-medium pl-2'>{video?.director}</span></li>
                            <li className='text-gray-400'>Year: <span className='text-white font-medium pl-2'>{video?.year}</span></li>
                        </ul>
                    </div>
                    <div className='videoInfoTitleWithDescription flex flex-col items-start justify-start w-full'>
                        <h1 className='text-6xl font-bold'>{video?.title}</h1>
                        <div className='flex flex-row gap-20 mt-10'>
                            <div className='videoInfoDescription'>
                                <h4 className='text-white font-medium pb-2'>Description:</h4>
                                <div className='text-gray-400 text-lg font-medium'>{video?.Description && <BlocksRenderer content={video?.Description} />}</div>
                            </div>
                            <div className='videoInfoLogLine'>
                                <h4 className='text-white font-medium pb-2'>Logline:</h4>
                                <p className='text-gray-400 text-lg font-medium'>{video?.Logline && <BlocksRenderer content={video?.Logline} />}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )

}

export default VideoDetails