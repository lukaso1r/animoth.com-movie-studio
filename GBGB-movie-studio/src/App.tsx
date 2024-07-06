import { lazy, Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderPc from './components/HeaderPc';

// Funkcja symulująca opóźnienie
const delay = (ms: number | undefined) => new Promise((resolve) => setTimeout(resolve, ms));
const LazyComponent = lazy(() => delay(2000).then(() => import('./components/LazyComponent')));

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderPc />
      
      {/* <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense> */}
    </>
  )
}

export default App
