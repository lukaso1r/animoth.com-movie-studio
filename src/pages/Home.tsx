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
        <div className="max-h-screen lg:min-h-screen">
          <Showreel onLoaded={handleShowreelLoaded} />
        </div>
        <div className='md:hidden' ><VideoGridMobile /></div>
        <div className='hidden md:block'><VideoGrid /></div>
        
        


      </div>
    )
  }
  
  export default Home