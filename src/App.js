import { useParallax } from 'react-scroll-parallax'
import { useState } from 'react'

import './styles.css'
import Background from './components/Background'
import Logo from './components/Logo'
import ClosingText from './components/ClosingText'
import Doge from './components/Doge'


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
      <Doge scrollProgress={scrollProgress} start={0.2} end={0.5} />
      <Doge scrollProgress={scrollProgress} start={0.3} end={0.6} direction={'left'} />
      <Doge scrollProgress={scrollProgress} start={0.4} end={0.7} />
      <ClosingText scrollProgress={scrollProgress} />
    </>
  );
}

export default App
