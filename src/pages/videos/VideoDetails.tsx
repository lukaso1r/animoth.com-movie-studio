import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { useFetchData } from '../../hooks/useFetchData';

import VideoSingleItem from '../../components/VideoSingleItem';

const VideoDetails: React.FC = () => {
    const [video, setVideo] = useState<any>(null);
    const documentId = useParams().documentId;

    const fetchSingleVideo = useFetchData<{ data: any }>();

    useEffect(() => {
        const fetchVideo = async () => {
            const response = await fetchSingleVideo(`video-grids/${documentId}?populate=*`);
            setVideo(response.data);
            console.log('Fetched video:', response);
        };
        fetchVideo();
    }, [documentId, fetchSingleVideo]);

    return (
        <>
            <div className="videoDetails  py-4 pt-20 pb-24 flex flex-col gap-16 items-center justify-start bg-black text-white min-h-screen ">
                <div className="videoBox w-full sm:w-[90%] md:w-[80%] lg:w-[70%] p-0 m-0 aspect-video">
                    {video ? (
                        <VideoSingleItem video={video} />
                    ) : (
                        <div className="skeleton-loader animate-pulse bg-gray-800 w-full h-full" />
                    )}
                </div>
                <div className="singleVideoTitleTex px-6 flex flex-col items-start justify-start md:gap-12 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] text-justify">
                    <div className="videoInfo flex flex-col lg:flex-row items-start justify-start w-full lg:gap-20">
                        <div className="videoInfoDetails min-w-max mb-6 lg:mb-0">
                            <ul>
                                <li className="text-gray-400">
                                    Time: <span className="text-white font-medium pl-2">{video?.time}</span>
                                </li>
                                <li className="text-gray-400">
                                    Director: <span className="text-white font-medium pl-2">{video?.director}</span>
                                </li>
                                <li className="text-gray-400">
                                    Year: <span className="text-white font-medium pl-2">{video?.year}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="videoInfoTitleWithDescription flex flex-col items-start justify-start w-full">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">{video?.title}</h1>
                            <div className="flex flex-col md:flex-row md:gap-20 mt-6 md:mt-10 w-full">
                                <div className="videoInfoDescription md:w-1/2">
                                    <h4 className="text-white font-medium pb-2">Description:</h4>
                                    <div className="text-gray-400 leading-8 md:text-lg font-medium">
                                        {video?.Description && <BlocksRenderer content={video?.Description} />}
                                    </div>
                                </div>
                                <div className="videoInfoLogLine md:w-1/2 mt-6 md:mt-0">
                                    <h4 className="text-white font-medium pb-2">Logline:</h4>
                                    <div className="text-gray-400 text-base md:text-lg font-medium leading-8">
                                        {video?.Logline && <BlocksRenderer content={video?.Logline} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideoDetails;