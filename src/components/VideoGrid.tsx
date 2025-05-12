// src/components/VideoGrid.tsx
// biome-ignore lint/style/useImportType: <explanation>
import React, { useEffect, useState } from 'react'
import VideoItem from './VideoItem'
import type {Video} from '../../types.ts'
import { getVideos } from "../api/getVideos";

interface VideoGridProps {
  videos: Video[]
}

const VideoGrid: React.FC<VideoGridProps> = () => {

  const [videoGridFromCms, setVideoGridFromCms] = useState<any[]>([{}])

  useEffect(() => {
    const fetchVideos = async () => {
      const videos = await getVideos();
      setVideoGridFromCms(videos);
    };
    fetchVideos();
  }, [])

  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 grid-flow-row-dense auto-rows-auto gap-0">
      {videoGridFromCms.map(video => (
        <VideoItem key={video.id} video={video} />
      ))}
    </div>
  )
}

export default VideoGrid
