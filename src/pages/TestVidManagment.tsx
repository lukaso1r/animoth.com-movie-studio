import React, {useRef, useEffect, useState} from "react"
import { CiPlay1, CiPause1, CiVolumeMute, CiVolumeHigh } from "react-icons/ci";
import VideoGrid from '../components/VideoGrid'
import { getVideos } from "../api/getVideos";
import TestVideoItem from '../components/TestVideoItem'

const sampleVideos = [
  {
    id: 1,
    title: '',
    description: '',
    thumbnail: 'https://cdn.animoth.com/WFF_2024_22c7b63446_6aac67a150.jpg',
    videoUrl: 'https://cdn.animoth.com/WFF_2024_22c7b63446.mp4',
    wide: true,
    slug: 'soon',
    gridRows: 1,
    gridCols: 3
  },{
    id: 2,
    title: '',
    description: '',
    thumbnail: 'https://cdn.animoth.com/Gry_Planszowe_Show_Intro2024_563f2fec55_6ac902f9f5.jpg',
    videoUrl: 'https://cdn.animoth.com/Gry_Planszowe_Show_Intro2024_563f2fec55.mp4',
    wide: true,
    slug: 'soon',
    gridRows: 1,
    gridCols: 3
  },
  {
    id: 3,
    title: '',
    description: '',
    thumbnail: 'https://cdn.animoth.com/Showcaseofsimplechosenclientwork_99df33fb60.jpg',
    videoUrl: 'https://cdn.animoth.com/Showcaseofsimplechosenclientwork_e9315ed06f.mp4',
    wide: true,
    slug: 'soon',
    gridRows: 1,
    gridCols: 3
  },
  {
    id: 4,
    title: '',
    description: '',
    thumbnail: 'https://cdn.animoth.com/DODN_1_d942139b85.jpg',
    videoUrl: 'https://cdn.animoth.com/DODN_1_23b1fe2553.mp4',
    wide: true,
    slug: 'soon',
    gridRows: 1,
    gridCols: 3
  },
  {
    id: 5,
    title: '',
    description: '',
    thumbnail: 'https://cdn.animoth.com/nekrolog_69b2983509.jpg',
    videoUrl: 'https://cdn.animoth.com/Nekrolog_43a081d85d.mp4',
    wide: true,
    slug: 'soon',
    gridRows: 1,
    gridCols: 3
  },
  {
    id: 6,
    title: '',
    description: '',
    thumbnail: 'https://cdn.animoth.com/epitafium_677336d33c.jpg',
    videoUrl: 'https://cdn.animoth.com/Epitafium_16574203be.mp4',
    wide: true,
    slug: 'soon',
    gridRows: 1,
    gridCols: 3
  },
  {
    id: 7,
    title: '',
    description: '',
    thumbnail: 'https://cdn.animoth.com/berlin_deede2af69.jpg',
    videoUrl: 'https://cdn.animoth.com/Berlin_Kwasny_Pierd_1080p_bd2a885419.mp4',
    wide: true,
    slug: 'soon',
    gridRows: 1,
    gridCols: 3
  },
  {
    id: 8,
    title: '',
    description: '',
    thumbnail: 'https://cdn.animoth.com/karawana_9a0924a472.jpg',
    videoUrl: 'https://cdn.animoth.com/Karawana_1080p_7fed1052e6.mp4',
    wide: true,
    slug: 'soon',
    gridRows: 1,
    gridCols: 3
  },
  
]




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