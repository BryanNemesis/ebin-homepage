import city from '../assets/city.jpeg'

import { useEffect, useState } from 'react'

const Background = ({ scrollProgress }) => {
  const [windowHeight, setWindowHeight] = useState(0)
    
  useEffect(() => {
    setWindowHeight(document.body.offsetHeight)
  }, [])

  const calculateBackgroundPosition = (scrollProgress) => {
    let offset;
    if (window.matchMedia("(max-width: 800px)").matches) {
      offset = windowHeight - 3 * document.body.offsetWidth;
    }
    else if (window.matchMedia("(min-width: 801px) and (max-width: 1200px)").matches)
    {
      offset = windowHeight - 2.25 * document.body.offsetWidth;
    }
    else {
      offset = windowHeight - 1.5 * document.body.offsetWidth;
    }
    return {
      transform: `translateY(${scrollProgress * offset}px)`,
    }
  }
  
  return <img src={city} alt="city" className="backdrop-img" style={calculateBackgroundPosition(scrollProgress)} />
}

export default Background