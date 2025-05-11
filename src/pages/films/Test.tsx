// biome-ignore lint/style/useImportType: <explanation>
import React from 'react';

const Test: React.FC = () => {
    const videoUrl = 'https://cdn.animoth.com/showreel.mp4';
    

    return (
        <>
            <p>Siema!</p>
            <div className="w-full max-w-4xl mx-auto">
            {/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
            <video 
                className="w-full rounded-lg shadow-lg" 
                controls
                playsInline
            >
                <source src={videoUrl} type="video/mp4" />
                Twoja przeglądarka nie wspiera odtwarzania wideo.
            </video>
            </div>
        </>
    );
};

export default Test;
