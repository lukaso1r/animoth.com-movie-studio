// eslint-disable-next-line @typescript-eslint/no-unused-vars
import '@vidstack/react/player/styles/base.css';
// import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/audio.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

import { MediaPlayer, MediaProvider, Poster, Track } from "@vidstack/react"
import { DefaultVideoLayout, defaultLayoutIcons } from '@vidstack/react/player/layouts/default';
import { textTracks } from "../tracks";


const HomeSingeMeshVideo: React.FC = () => {

    // const videoRef = useRef<HTMLVideoElement>(null);
    // const [isMuted, setIsMuted] = useState(true);
  
    // const handleClick = () => {
    //   if (videoRef.current) {
    //     videoRef.current.muted = !isMuted;
    //     setIsMuted(!isMuted);
    //   }
    // };

    return (
        <>
            <div className="homeMainVideo max-w-[100svw] max-h-[100svh] w-full h-full">
            <MediaPlayer
                src='https://files.vidstack.io/sprite-fight/720p.mp4'
                viewType='video'
                streamType='on-demand'
                logLevel='warn'
                crossOrigin
                playsInline
                title='Sprite Fight'
                poster='https://files.vidstack.io/sprite-fight/poster.webp'
                >
                <MediaProvider>
                    <Poster className="vds-poster" />
                    {textTracks.map(track => (
                    <Track {...track} key={track.src} />
                    ))}
                </MediaProvider>
                <DefaultVideoLayout
                    thumbnails='https://files.vidstack.io/sprite-fight/thumbnails.vtt'
                    icons={defaultLayoutIcons}
                />
            </MediaPlayer>
            </div>
        </>
    );


}

export default HomeSingeMeshVideo;