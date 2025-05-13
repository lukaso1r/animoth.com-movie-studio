// biome-ignore lint/style/useImportType: <explanation>
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import VideoDetails from './pages/videos/VideoDetails'
import './App.css'
import { getFaviconUrl } from "./api/favicon";

const App: React.FC = () => {

  const [faviconUrl, setFaviconUrl] = useState<string | null>(null);

  useEffect(() => {
    getFaviconUrl().then(setFaviconUrl);
  }, []);

  useEffect(() => {
    if(faviconUrl){
      let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = faviconUrl;
    }
  }, [faviconUrl]);

  return (
    <Router>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:documentId" element={<VideoDetails />} />
      </Routes>
    </Router>
  )
}

export default App
