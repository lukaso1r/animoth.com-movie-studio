import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleVideo } from '../../api/getSingleVideo';

import VideoSingleItem from '../../components/VideoSingleItem';
import Header from '../../components/Header';
import Menu from '../../components/Menu'


const VideoDetails: React.FC = () => {

    const [video, setVideo] = useState<any>(null);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const documentId = useParams().documentId;

    useEffect(() => {
        const fetchVideo = async () => {
            const videoData = await getSingleVideo(documentId as string);
            setVideo(videoData);
        };
        fetchVideo();
    }, [documentId]);

    const [videoInfo] = useState({
        time: '02:30',
        director: 'Butter Pants',
        year: '2077',
        description: 'Intro XX edycji Węgiel Film Festival to krótka animacja otwierająca jubileuszową odsłonę festiwalu, którego tematem przewodnim była praca twórców filmowych ze scenariuszem.  Film został stworzony przez Gosię Gryko i Bruna Bednarskiego, studentów II roku produkcji w Szkole Filmowej im. Krzysztofa Kieślowskiego. Animacja wprowadza widza w atmosferę festiwalu, podkreślając znaczenie scenariusza jako fundamentu każdej produkcji filmowej. Poprzez dynamiczne obrazy i symboliczne przedstawienia, twórcy ukazują proces twórczy, jaki towarzyszy powstawaniu filmu  od pierwszych szkiców scenariusza po finalny obraz na ekranie.  Węgiel Film Festival to międzynarodowe wydarzenie organizowane przez studentów Szkoły Filmowej im. Krzysztofa Kieślowskiego w Katowicach, które od lat przyciąga młodych twórców z całego świata. Festiwal stanowi platformę do prezentacji krótkometrażowych filmów fabularnych i dokumentalnych oraz miejsce wymiany doświadczeń między początkującymi filmowcami a profesjonalistami z branży. ([Uniwersytet Śląski][3]) Intro XX edycji festiwalu nie tylko zapowiadało nadchodzące projekcje i wydarzenia, ale również oddawało hołd pracy scenarzystów, podkreślając ich kluczową rolę w procesie tworzenia filmu. Dzięki kreatywnej animacji i przemyślanej symbolice, filmik skutecznie wprowadzał widzów w tematykę festiwalu, zachęcając do refleksji nad znaczeniem scenariusza w kinematografii.([Facebook][2]) Całość stanowiła spójną i inspirującą zapowiedź wydarzenia, które celebruje pasję, kreatywność i zaangażowanie młodych twórców filmowych.',
    });
    
    return (
        <>
        <Header setIsMenuVisible={setIsMenuVisible} isMenuVisible={isMenuVisible}/>
        {isMenuVisible && <Menu />}
        <div className="videoDetails py-4 pt-20 pb-24 flex flex-col gap-16 items-center justify-start bg-black text-white min-h-screen">
            
           <div className='videoBox w-[70%] p-0 m-0 aspect-video border' >   
                {video ? (
                    <VideoSingleItem video={video} />
                ) : (
                    <div className="skeleton-loader animate-pulse bg-gray-800 w-full h-full" />
                )}
            </div> 
            <div className='singleVideoTitleTex flex flex-col items-start justify-start gap-12 w-[70%]'>
                <div className='videoInfo flex flex-row items-start justify-start w-full gap-20'>
                    <div className='videoInfoDetails min-w-max'>
                        <ul>
                            <li className='text-gray-400'>Time: <span className='text-white font-medium'>{videoInfo.time}</span></li>
                            <li className='text-gray-400'>Director: <span className='text-white font-medium'>{videoInfo.director}</span></li>
                            <li className='text-gray-400'>Year: <span className='text-white font-medium'>{videoInfo.year}</span></li>
                        </ul>
                    </div>
                    <div className='videoInfoTitleWithDescription flex flex-col items-start justify-start w-full'>
                        <h1 className='text-6xl font-bold'>{video?.title}</h1>
                        <div className='flex flex-row gap-20 mt-10'>
                            <div className='videoInfoDescription'>
                                <h4 className='text-white font-medium pb-2'>Description:</h4>
                                <p className='text-gray-400 text-lg font-medium'>
                                    {/* TODO: dać tutaj tekst w formacie MD */}
                                    Intro XX edycji Węgiel Film Festival to krótka animacja otwierająca jubileuszową odsłonę festiwalu, którego tematem przewodnim była praca twórców filmowych ze scenariuszem.  
                                    <br/><br/>
                                    Film został stworzony przez Gosię Gryko i Bruna Bednarskiego, studentów II roku produkcji w Szkole Filmowej im. Krzysztofa Kieślowskiego. 
                                    <br/><br/>
                                    Animacja wprowadza widza w atmosferę festiwalu, podkreślając znaczenie scenariusza jako fundamentu każdej produkcji filmowej. Poprzez dynamiczne obrazy i symboliczne przedstawienia, twórcy ukazują proces twórczy, jaki towarzyszy powstawaniu filmu  od pierwszych szkiców scenariusza po finalny obraz na ekranie.  
                                    <br/><br/>
                                    Węgiel Film Festival to międzynarodowe wydarzenie organizowane przez studentów Szkoły Filmowej im. Krzysztofa Kieślowskiego w Katowicach, które od lat przyciąga młodych twórców z całego świata. Festiwal stanowi platformę do prezentacji krótkometrażowych filmów fabularnych i dokumentalnych oraz miejsce wymiany doświadczeń między początkującymi filmowcami a profesjonalistami z branży. 
                                    <br/><br/>
                                    Intro XX edycji festiwalu nie tylko zapowiadało nadchodzące projekcje i wydarzenia, ale również oddawało hołd pracy scenarzystów, podkreślając ich kluczową rolę w procesie tworzenia filmu. Dzięki kreatywnej animacji i przemyślanej symbolice, filmik skutecznie wprowadzał widzów w tematykę festiwalu, zachęcając do refleksji nad znaczeniem scenariusza w kinematografii. Całość stanowiła spójną i inspirującą zapowiedź wydarzenia, które celebruje pasję, kreatywność i zaangażowanie młodych twórców filmowych.
                                </p>
                            </div>
                            <div className='videoInfoLogLine'>
                                <h4 className='text-white font-medium pb-2'>Logline:</h4>
                                <p className='text-gray-400 text-lg font-medium'>Intro XX edycji Węgiel Film Festival to krótka animacja otwierająca jubileuszową odsłonę festiwalu, którego tematem przewodnim była praca twórców filmowych ze scenariuszem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )

}

export default VideoDetails