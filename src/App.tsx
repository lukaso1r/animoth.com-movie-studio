// biome-ignore lint/style/useImportType: <explanation>
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Offer from './pages/Offer'
import Header from './components/Header'

import VideoDetails from './pages/videos/VideoDetails'
import ScrollToTop from "./components/SrollToTop";
import './App.css'
import { useFetchData } from './hooks/useFetchData'

const App: React.FC = () => {

  const [faviconUrl, setFaviconUrl] = useState<string | null>(null);
  const fetchFavicon = useFetchData<{ data: { favicon: { url: string } } }>();

  useEffect(() => {
    const getFaviconUrl = async () => {
      try {
        const response = await fetchFavicon('favicon?populate=favicon');
        setFaviconUrl(response.data.favicon.url);
        console.log('Fetched favicon URL:', response.data.favicon.url);
      } catch (error) {
        console.error("Error fetching favicon:", error);
      }
    };
    getFaviconUrl();


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
       <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:documentId" element={<VideoDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/offer" element={<Offer />} />
      </Routes>
    </Router>
  )
}

export default App
