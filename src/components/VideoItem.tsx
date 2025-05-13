import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CiPlay1, CiPause1, CiVolumeMute, CiVolumeHigh, CiMaximize1 , CiMinimize1  } from "react-icons/ci"

const TestVideoItem: React.FC<any> = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [isMuted, setIsMuted] = useState<boolean>(false)
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoBox = document.getElementById(video.id ?? '')

  useEffect(() => {
    const videoElement = videoRef.current
    if (videoElement) {
      if (isPlaying) {
        const playPromise = videoElement.play()
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error('Error attempting to play', error)
            setIsPlaying(false)
          })
        }
      } else {
        videoElement.pause()
      }
    }
  }, [isPlaying])

  useEffect(() => {
    const videoElement = videoRef.current
    if (videoElement) {
      videoElement.muted = isMuted
    }
  }, [isMuted])

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation()
    console.log(`Playing video ID: ${video.id}`)
    setIsPlaying(true)
  }

  const handlePause = (e: React.MouseEvent) => {
    e.stopPropagation()
    console.log(`Pausing video ID: ${video.id}`)
    setIsPlaying(false)
  }

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation() 
      if (isFullscreen) {
        videoBox?.classList.remove('videoFullScreen')
        setIsFullscreen(false)
      } else {
        videoBox?.classList.add('videoFullScreen')
        setIsFullscreen(true)
      }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMuted(prev => !prev)
    console.log(`Toggling mute for video ID: ${video.id}, now muted: ${!isMuted}`)
  }

  return (
    <div
      id={video.id}
      className={`
      relative cursor-pointer group bg-black 
      ${video.gridCols === 1 ? 'col-span-1' 
        : video.gridCols === 2 ? 'col-span-2' 
        : video.gridCols === 3 ? 'col-span-3' 
        : video.gridCols === 4 ? 'col-span-4' 
        : video.gridCols === 5 ? 'col-span-5' 
        : 'col-span-6'}
      `}
      style={{ aspectRatio: '16 / 9' }}
    >
      {isPlaying ? (
      <video
        ref={videoRef}
        src={video.videoUrl?.url}
        loop
        className="w-full h-full object-cover"
        onClick={handlePause}
        playsInline
        muted={isMuted}
      />
      ) : (
      <img src={video.thumbnail?.url} alt={video.title} className="w-full h-full object-cover" />
      )}
      <div
      className="absolute p-4 inset-0 bg-black bg-opacity-50 
        flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 
        transition-opacity"
      >
      <h3 className="text-white text-lg font-semibold mb-2">{video?.title}</h3>
      <p className="text-white text-center text-sm mb-4">{video?.description}</p>
      <Link to={`/videos/${encodeURIComponent(video.documentId)}`} className='seeMore text-white text-center text-sm mb-4'>Go to video</Link>
      <div className="flex space-x-4 pb-4">
        {isPlaying ? (
        <CiPause1
          onClick={handlePause}
          className="text-2xl text-white cursor-pointer hover:text-blue-400"
        />
        ) : (
        <CiPlay1
          onClick={handlePlay}
          className="text-2xl text-white cursor-pointer hover:text-blue-400"
        />
        )}
        {isMuted ? (
        <CiVolumeMute 
          onClick={toggleMute}
          className="text-2xl text-white cursor-pointer hover:text-blue-400"
        />
        ) : (
        <CiVolumeHigh
          onClick={toggleMute}
          className="text-2xl text-white cursor-pointer hover:text-blue-400"
        />
        )}
        {isFullscreen ? (
        <CiMinimize1
          onClick={toggleFullscreen}
          className="text-2xl text-white cursor-pointer hover:text-blue-400"
        />
        ) : (
        <CiMaximize1 
          onClick={toggleFullscreen}
          className="text-2xl text-white cursor-pointer hover:text-blue-400"
        />
        )}
      </div>
      </div>
    </div>
  )
}

export default TestVideoItem
