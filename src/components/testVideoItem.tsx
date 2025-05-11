// src/components/VideoItem.tsx
// biome-ignore lint/style/useImportType: <explanation>
import React, { useState, useRef, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { CiPlay1, CiPause1, CiVolumeMute, CiVolumeHigh } from "react-icons/ci"



const TestVideoItem: React.FC<any> = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [isMuted, setIsMuted] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)

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

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMuted(prev => !prev)
    console.log(`Toggling mute for video ID: ${video.id}, now muted: ${!isMuted}`)
  }

  return (
    <div
      className={`
        relative cursor-pointer group bg-black
        ${video.gridCols === 1 ? 'col-span-1' : video.gridCols === 2 ? 'col-span-2' : video.gridCols === 3 ? 'col-span-3' : video.gridCols === 4 ? 'col-span-4' : video.gridCols === 5 ? 'col-span-5' : 'col-span-6'}
      `
      }
      style={{ aspectRatio: '16 / 9' }}
    >
      {isPlaying ? (
        // biome-ignore lint/a11y/useKeyWithClickEvents: Click events are handled appropriately
        // biome-ignore lint/a11y/useMediaCaption: <explanation>
        <video
          ref={videoRef}
          src={video.videoUrl?.url}
          loop
          className="w-full h-full object-cover"
          onClick={handlePause}
          playsInline
          muted={false}
        />
      ) : (
        <img src={video.thumbnail?.url} alt={video.title} className="w-full h-full object-cover" />
      )}
      <div className="absolute p-4 inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <h3 className="text-white text-lg font-semibold mb-2">{video?.title}</h3>
        <p className="text-white text-center text-sm mb-4">{video?.description}</p>
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
          {!isMuted ? (
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


          
        </div>
        {/* <Link to={`/films/${video.slug}`}>
            <button type='button' className="bg-transparent text-white px-3 py-1 rounded hover:bg-slate-600 hover:border-slate-600 hover:bg-opacity-60">
              See more
            </button>
        </Link> */}
      </div>
    </div>
  )
}

export default TestVideoItem
