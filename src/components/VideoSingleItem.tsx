import React, { useState, useRef, useEffect } from 'react'
// import { CiPlay1, CiPause1, CiVolumeMute, CiVolumeHigh } from "react-icons/ci"

const VideoSingleItem: React.FC<any> = ({ video }) => {

    const [isPlaying, setIsPlaying] = useState<boolean>(true)
    const [isMuted] = useState<boolean>(true)
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

    // const handlePlay = (e: React.MouseEvent) => {
    //     e.stopPropagation()
    //     console.log(`Playing video ID: ${video.id}`)
    //     setIsPlaying(true)
    // }

    // const handlePause = (e: React.MouseEvent) => {
    //     e.stopPropagation()
    //     console.log(`Pausing video ID: ${video.id}`)
    //     setIsPlaying(false)
    // }


    // const toggleMute = (e: React.MouseEvent) => {
    //     e.stopPropagation()
    //     setIsMuted(prev => !prev)
    //     console.log(`Toggling mute for video ID: ${video.id}, now muted: ${!isMuted}`)
    // }


	return (
        <div
            id={video.id}
            className={`
                 group
                cursor-pointer
                w-full h-auto p-0 m-0
                aspect-video
            `}
            >
            {isPlaying ? (
            <video
                ref={videoRef}
                src={video.videoUrl?.url}
                loop
                className="w-full p-0 m-0 aspect-video"
                // onClick={handlePause}
                playsInline
                muted={isMuted}
                autoPlay={false}
                controlsList="nodownload" 
                controls={true}
                preload="true"
            />
            ) : (
            <img src={video.thumbnail?.url} alt={video.title} className="w-full max-w-full" />
            )}
            {/* <div
                className="absolute p-4 inset-0 bg-black bg-opacity-50 
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
            </div> */}
        </div>
	);
}

export default VideoSingleItem