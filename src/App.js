import { useParallax } from 'react-scroll-parallax'
import { useState } from 'react'

import './styles.css'
import Background from './components/Background'
import Logo from './components/Logo'
import ClosingText from './components/ClosingText'


const App = () => {

  const [scrollProgress, setScrollProgress] = useState(0)

  const { ref }  = useParallax({
    shouldAlwaysCompleteAnimation: true,
    onProgressChange: x => {
      setScrollProgress(x)
    }
  })

  return (
    <>
    <div className="backdrop" ref={ref}>
      <Background scrollProgress={scrollProgress} />
    </div>
    <Logo scrollProgress={scrollProgress} />
    <ClosingText scrollProgress={scrollProgress} />
    </>

  );
}

export default App
