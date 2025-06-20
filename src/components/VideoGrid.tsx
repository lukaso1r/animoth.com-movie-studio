// src/components/VideoGrid.tsx
import React, { useEffect, useState } from 'react'
import VideoItem from './VideoItem'
import type { Video } from '../../types.ts'
import { useFetchData } from '../hooks/useFetchData'

const VideoGrid: React.FC = () => {
  const [videoGridFromCms, setVideoGridFromCms] = useState<Video[]>([])
  const fetchVideos = useFetchData<{ data: Video[] }>()

  useEffect(() => {
    const fetchAndSetVideos = async () => {
      try {
        const response = await fetchVideos('video-grids?populate=*')
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
      {videoGridFromCms.map(video => (
        <VideoItem key={video.id} video={video} />
      ))}
    </div>
  )
}

export default VideoGrid
