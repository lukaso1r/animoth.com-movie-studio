import React from 'react'
import { Link } from 'react-router-dom'

const VideoItemMobile: React.FC<any> = ({ video }) => {

  return (
    <>

    <Link 
        to={`/videos/${encodeURIComponent(video.documentId)}`} 
        className=''
        >
        <div
            id={video.id}
            className='group relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden cursor-pointer'
        >
            <img src={video.thumbnail.formats.small.url} alt={video.title} className="w-full h-full object-cover opacity-95" />
            
            <div className='absolute bottom-4 left-6 w-full'>
                <h3 className="text-white text-2xl font-semibold mb-2 text-shadow-lg/90">{video?.title}</h3>
            </div> 
            
        </div>
    </Link>
    </>
  )
}

export default VideoItemMobile
