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

      // sort the videos by videoGridOrder after fetching
      setVideoGridFromCms(videos => {
        return videos.sort((a, b) => {
          // console.log(`Sorting videos: ${a.videoGridOrder} - ${b.videoGridOrder}`);
          return (a.videoGridOrder ?? 0) - (b.videoGridOrder ?? 0);
        });
      });
    };

    // Fetch videos when the component mounts
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
