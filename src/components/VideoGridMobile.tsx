// src/components/VideoGrid.tsx
import React, { useEffect, useState } from 'react'
import VideoItemMobile from './VideoItemMobile'
import type { Video } from '../../types.ts'
import { useFetchData } from '../hooks/useFetchData'

const VideoGridMobile: React.FC = () => {
  const [videoGridFromCms, setVideoGridFromCms] = useState<Video[]>([])
  const fetchVideos = useFetchData<{ data: Video[] }>()

  useEffect(() => {
    const fetchAndSetVideos = async () => {
      try {
        const response = await fetchVideos('video-grids?fields[0]=title&fields[1]=videoGridOrder&populate[thumbnail][fields][0]=formats')
        const videos = response.data
        videos.sort((a, b) => (a.videoGridOrder ?? 0) - (b.videoGridOrder ?? 0))
        setVideoGridFromCms(videos)
      } catch (error) {
        console.error('Error fetching videos:', error)
        setVideoGridFromCms([])
      }
    }
    fetchAndSetVideos()
  }, [fetchVideos])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 grid-flow-row-dense auto-rows-auto gap-0">
      
      <button onClick={() => {console.log(videoGridFromCms)}}>test</button>
      
      {videoGridFromCms.map(video => (
        <VideoItemMobile key={video.id} video={video} />
      ))}
    </div>
  )
}

export default VideoGridMobile
