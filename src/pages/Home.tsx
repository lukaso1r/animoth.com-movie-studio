// biome-ignore lint/style/useImportType: <explanation>
import React, { useState } from 'react'
import LoadingScreen from '../components/LoadingScreen'
import Showreel from '../components/Showreel'
import VideoGrid from '../components/VideoGrid'
import VideoGridMobile from '../components/VideoGridMobile'




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
        {/* <VideoGrid  /> */}
        <VideoGridMobile />
      </div>
    )
  }
  
  export default Home