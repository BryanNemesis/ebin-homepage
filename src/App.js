import './styles.css'
import city from './assets/city.jpeg'
import logo from './assets/logo.png'

import { useParallax } from 'react-scroll-parallax'
import { useEffect, useState } from 'react'

const App = () => {

  const [scrollProgress, setScrollProgress] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)
    
  useEffect(() => {
    setWindowHeight(document.body.offsetHeight)
  }, [])

  const { ref }  = useParallax({
    shouldAlwaysCompleteAnimation: true,
    onProgressChange: x => {
      setScrollProgress(x)
    }
  })

  const calculateBackgroundPosition = (scrollProgress) => {
    const offset = window.matchMedia("(max-width: 800px)").matches ?
      windowHeight - 3 * document.body.offsetWidth :
      windowHeight - 1.5 * document.body.offsetWidth
    return {
      transform: `translateY(${scrollProgress * offset}px)`,
    }
  }

  return (
    <div className="backdrop" ref={ref}>
      <img src={city} alt="city" className="backdrop-img" style={calculateBackgroundPosition(scrollProgress)} />
      {/* <div className="bryan-nemesis-logo">
        <img src={logo} alt="logo" />
      </div> */}
    </div>
  );
}

export default App
