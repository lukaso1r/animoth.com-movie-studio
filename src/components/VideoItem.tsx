import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdClose } from "react-icons/md";
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
      document.removeEventListener('mousedown', handleClickOutside)
    } else {
      videoBox?.classList.add('videoFullScreen')
      setIsFullscreen(true)
      document.addEventListener('mousedown', handleClickOutside)
    }
  }

  // Handler to exit fullscreen when clicking outside videoBox
  const handleClickOutside = (event: MouseEvent) => {
    if (videoBox && !videoBox.contains(event.target as Node)) {
      videoBox.classList.remove('videoFullScreen')
      setIsFullscreen(false)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }

  // Clean up event listener on unmount
  useEffect(() => {
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMuted(prev => !prev)
    console.log(`Toggling mute for video ID: ${video.id}, now muted: ${!isMuted}`)
  }

  return (
    <>
    {isFullscreen==true && <div className='fixed top-0 w-full h-full bg-[#000000e7] z-50'></div>}
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
        controlsList="nodownload" 
        controls={isFullscreen ? true : false}
      />
      ) : (
        <>
          <img src={video.thumbnail.formats.medium.url} alt={video.title} className="w-full h-full object-cover" onClick={handlePlay} />
        </>
      )}
      {/* <pre className='text-white'>Tytuł: {video.title}, Kolejność: {video.videoGridOrder}</pre> */}
      {/* group-hover:bg-black opacity-50 group-hover:opacity-100 
        transition-opacity max-h-[90%]" */}
        {isFullscreen == true && (
          <MdClose
            onClick={toggleFullscreen}
            className='fixed top-5 right-5 text-5xl text-white cursor-pointer rounded-xl transition-transform  duration-300 hover:bg-zinc-900 hover:bg-opacity-60 hover:rotate-180 hover:scale-110'
          />
        )}
      <div
        className={`
          absolute p-4 bg-opacity-50 
          flex flex-col opacity-0 group-hover:opacity-100 
          transition-opacity left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          ${isFullscreen ? 'max-h-min max-w-fit textShadow' : 'flex items-center justify-center  bg-black max-h-full min-h-full max-w-full min-w-full'}
        `}
      >
        
        <div className='flex flex-col justify-center align-middle items-center w-fulltext-center'>
          <h3 className="text-white text-5xl font-semibold mb-2">{video?.title}</h3>
          <Link 
            to={`/videos/${encodeURIComponent(video.documentId)}`} 
            className='seeMore text-white text-center text-xl mb-4 px-3 pr-4 py-1 rounded-lg hover:bg-white hover:text-zinc-900 hover:bg-opacity-80 hover:font-semibold flex items-center justify-center group transition-all duration-300'
            >
            See more
            <span className=" inline-block transition-transform duration-300 group-hover:translate-x-2">
              <span className='text-2xl' style={{ display: 'inline-block', transform: 'translateY(0px)' }}>&rarr;</span>
            </span>
          </Link>
          {isPlaying == false && isFullscreen == true && <CiPlay1
            onClick={handlePlay}
            className="text-5xl text-white cursor-pointer hover:text-blue-400 text-center"
          /> } 
        </div> 
        
        {isFullscreen==false && 
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

          {isPlaying && (
            isMuted ? (
              <CiVolumeMute 
                onClick={toggleMute}
                className="text-2xl text-white cursor-pointer hover:text-blue-400"
              />
            ) : (
              <CiVolumeHigh
                onClick={toggleMute}
                className="text-2xl text-white cursor-pointer hover:text-blue-400"
              />
            )
          )}
          
          {isFullscreen ? (
          <CiMinimize1
            onClick={toggleFullscreen}
            className="text-2xl text-white cursor-pointer hover:text-blue-400"
          />
          ) : (isPlaying &&
          <CiMaximize1 
            onClick={toggleFullscreen}
            className="text-2xl text-white cursor-pointer hover:text-blue-400"
          />
          )}
        </div>}
      </div>
    </div>
    </>
  )
}

export default TestVideoItem
