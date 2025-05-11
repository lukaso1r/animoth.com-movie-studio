// biome-ignore lint/style/useImportType: <explanation>
import React, { useRef, useEffect, useState } from 'react'
import { CiPlay1, CiPause1, CiVolumeMute, CiVolumeHigh } from "react-icons/ci";

interface ShowreelProps {
  onLoaded: () => void
}

const Showreel: React.FC<ShowreelProps> = ({ onLoaded }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMute, setIsMute] = useState(true)

  useEffect(() => {
    const handleLoadedData = () => {
      onLoaded()
    }

    const video = videoRef.current
    if (video) {
      video.addEventListener('loadeddata', handleLoadedData)
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData)
      }
    }
  }, [onLoaded])

  const handlePlay = () => {
    const video = videoRef.current
    if (video) {
      video.play()
      setIsPlaying(true)
    }
  }

  const handlePause = () => {
    const video = videoRef.current
    if (video) {
      video.pause()
      setIsPlaying(false)
    }
  }

  const handleMute = () => {
    const video = videoRef.current
    if (video) {
      video.muted = true
      setIsMute(true)
    }
  }

  const handleUnmute = () => {
    const video = videoRef.current
    if (video) {
      video.muted = false
      setIsMute(false)
    }
  }

  return (
    <>
        <div className='relative m-0 p-0 flex flex-col w-full'>
            <video
                ref={videoRef}
                src="https://cdn.animoth.com/showreel.mp4"
                autoPlay
                muted
                loop
                className="w-full lg:max-h-screen object-cover"
            />
            <div className='absolute bottom-0 w-full flex flex-row justify-center text-xl transition-all text-slate-700 items-center py-3 gap-4 z-50'>
                {!isPlaying && <CiPlay1 onClick={handlePlay} className="cursor-pointer hover:text-4xl hover:text-slate-100 transition-all" />}
                {isPlaying && <CiPause1 onClick={handlePause} className="cursor-pointer hover:text-4xl hover:text-slate-100 transition-all" />}
                {!isMute && <CiVolumeMute onClick={handleMute} className="cursor-pointer hover:text-4xl hover:text-slate-100 transition-all" />}
                {isMute && <CiVolumeHigh onClick={handleUnmute} className="cursor-pointer hover:text-4xl hover:text-slate-100 transition-all" />}
            </div>
            {/* <div className='absolute top-1/2 w-full flex flex-col text-xl transition-all text-slate-700 items-end px-4 py-3 gap-4 z-50'>
                {!isPlaying && <CiPlay1 onClick={handlePlay} className="cursor-pointer hover:text-4xl hover:text-slate-100 transition-all" />}
                {isPlaying && <CiPause1 onClick={handlePause} className="cursor-pointer hover:text-4xl hover:text-slate-100 transition-all" />}
                {!isMute && <CiVolumeMute onClick={handleMute} className="cursor-pointer hover:text-4xl hover:text-slate-100 transition-all" />}
                {isMute && <CiVolumeHigh onClick={handleUnmute} className="cursor-pointer hover:text-4xl hover:text-slate-100 transition-all" />}
            </div> */}
        </div>
    </>
  )
}

export default Showreel
