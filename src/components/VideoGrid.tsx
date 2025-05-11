// src/components/VideoGrid.tsx
// biome-ignore lint/style/useImportType: <explanation>
import React from 'react'
import VideoItem from './VideoItem'
import type {Video} from '../../types.ts'

interface VideoGridProps {
  videos: Video[]
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 grid-flow-row-dense auto-rows-auto gap-2">
      {videos.map(video => (
        <VideoItem key={video.id} video={video} />
      ))}
    </div>
  )
}

export default VideoGrid
