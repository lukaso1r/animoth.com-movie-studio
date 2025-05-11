import React, {useRef, useEffect, useState} from "react"
import { CiPlay1, CiPause1, CiVolumeMute, CiVolumeHigh } from "react-icons/ci";
import VideoGrid from '../components/VideoGrid'
import { getVideos } from "../api/getVideos";
import TestVideoItem from '../components/TestVideoItem'






const TestVidManagment: React.FC = () => {

    const [videoGridFromCms, setVideoGridFromCms] = useState<any[]>([{}])


    const testFunc = () => {
        console.log("Test function")
    }

    const getVideosList = async () => {
        console.log("Get videos function")
        // Fetch videos from CMS
        // setVideos(fetchedVideos)

        const videos = await getVideos();
        setVideoGridFromCms(videos);
        console.log(videos)
        console.log(videos?.videoUrl?.url)
    }




    return (
    <>
        <div className="video-container bg-gray-200 w-4/5 mx-auto p-3 flex flex-col gap-4">
            <p>Test Video Management</p>
            <div className="menu flex flex-row gap-5">
                <button onClick={testFunc}>Test</button>
                <button onClick={getVideosList}>Get Videos</button>
            </div>
            <p>{JSON.stringify(videoGridFromCms).split("", 100)}</p>
            <div className="video-grid grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 grid-flow-row-dense auto-rows-auto gap-2">
                {videoGridFromCms.map(video => (
                    <TestVideoItem key={video?.id} video={video} />
                ))}
            </div>
            {/* <VideoGrid videos={sampleVideos} /> */}
        </div>
    </>
    )
}

export default TestVidManagment