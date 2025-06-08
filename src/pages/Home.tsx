// biome-ignore lint/style/useImportType: <explanation>
import React, { useState } from 'react'
import LoadingScreen from '../components/LoadingScreen'
import Showreel from '../components/Showreel'
import VideoGrid from '../components/VideoGrid'

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


const Home: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true)

  
    const handleShowreelLoaded = () => {
      setIsLoading(false)
    }
  
    return (
      <div className="relative flex flex-col bg-black">
        {isLoading && <LoadingScreen />}
        <div className="max-h-[100vh] lg:min-h-[100vh]">
          <Showreel onLoaded={handleShowreelLoaded} />
        </div>
        <VideoGrid videos={sampleVideos} />
      </div>
    )
  }
  
  export default Home