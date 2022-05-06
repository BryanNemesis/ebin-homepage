import doge from './doge.gif'

import { Parallax } from 'react-scroll-parallax'

function FlyingDoges() {
  return (
    <div className='banner'>
      <Parallax
        className='doges'
        shouldAlwaysCompleteAnimation={true}
        translateX={[-110, 110]}
        translateY={[130, 180]}
        scale={[-1, 5]}
        rotate={[180, 540]}
      >
        <img src={doge} alt="Doge" />
      </Parallax>
      <Parallax
        className='doges'
        shouldAlwaysCompleteAnimation={true}
        translateX={[110, -110]}
        translateY={[150, 200]}
        scale={[-1, 5]}
        rotate={[540, 180]}
      >
        <img src={doge} alt="Doge" />
      </Parallax>
      <Parallax
        className='doges'
        shouldAlwaysCompleteAnimation={true}
        translateX={[-110, 110]}
        translateY={[170, 220]}
        scale={[-1, 5]}
        rotate={[180, 540]}
      >
        <img src={doge} alt="Doge" />
      </Parallax>
    </div>
  )
}

export default FlyingDoges