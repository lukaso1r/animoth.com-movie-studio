import React, { useState, useRef, useEffect } from 'react'
import { CiPlay1, CiPause1, CiVolumeMute, CiVolumeHigh } from "react-icons/ci"

const VideoSingleItem: React.FC<any> = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [isMuted, setIsMuted] = useState<boolean>(false)
  const [ambientColor, setAmbientColor] = useState<string>('black')

  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Obsługa play/pause
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

  // Obsługa mute
  useEffect(() => {
    const videoElement = videoRef.current
    if (videoElement) {
      videoElement.muted = isMuted
    }
  }, [isMuted])

  // 🔥 Dynamiczne przetwarzanie koloru z wideo
  useEffect(() => {
    const video = videoRef.current
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')

    if (!video || !canvas || !context) return

    const analyzeFrame = () => {
      try {
        context.drawImage(video, 0, 0, canvas.width, canvas.height)
        const frame = context.getImageData(0, 0, canvas.width, canvas.height)
        const data = frame.data

        let r = 0, g = 0, b = 0, count = 0

        for (let i = 0; i < data.length; i += 4) {
          r += data[i]
          g += data[i + 1]
          b += data[i + 2]
          count++
        }

        r = Math.floor(r / count)
        g = Math.floor(g / count)
        b = Math.floor(b / count)

        const color = `rgb(${r}, ${g}, ${b})`
        setAmbientColor(color)
      } catch (err) {
        console.error("Canvas draw failed", err)
      }
    }

    intervalRef.current = setInterval(() => {
      if (!video.paused && !video.ended) {
        analyzeFrame()
      }
    }, 300) // Co 300 ms

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPlaying])

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsPlaying(true)
  }

  const handlePause = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsPlaying(false)
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMuted(prev => !prev)
  }

  return (
    <div
      id={video.id}
      className="relative group cursor-pointer w-full h-auto p-0 m-0 aspect-video overflow-hidden"
    >
      {/* 🔮 Ambilight effect */}
      <div
        className="absolute inset-0 z-0 blur-3xl scale-110 transition-all duration-300"
        style={{
          backgroundColor: ambientColor,
          opacity: 0.7,
        }}
      />

      {/* 🎥 Video or thumbnail */}
      {isPlaying ? (
        <video
          ref={videoRef}
          src={video.videoUrl?.url}
          loop
          className="w-full p-0 m-0 aspect-video relative z-10"
          onClick={handlePause}
          playsInline
          muted={isMuted}
          autoPlay
          controls={true}
          preload="auto"
          
        />
      ) : (
        <img
          src={video.thumbnail?.url}
          alt={video.title}
          className="w-full max-w-full aspect-video relative z-10"
        />
      )}

      {/* 🎨 Ukryty canvas */}
      <canvas
        ref={canvasRef}
        width={10}
        height={10}
        style={{ display: 'none' }}
      />

      {/* UI Controls */}
      <div
        className="absolute p-4 inset-0 z-20 bg-black bg-opacity-50 
        flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 
        transition-opacity"
      >
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
        </div>
      </div>
    </div>
  )
}

export default VideoSingleItem
