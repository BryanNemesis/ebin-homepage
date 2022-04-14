import doge from './doge.gif'
import city from './city.jpeg'
import logo from './logo.png'
import sublogo from './sublogo.png'
import footer from './footer.png'

import { ParallaxBanner } from 'react-scroll-parallax'

function App() {
  return (
    <ParallaxBanner
      layers={[
        { image: city },
        { 
          children: <img src={logo} alt="Bryan Nemesis" />,
          style: {textAlign: 'center', inset: '10% 0'},
          shouldAlwaysCompleteAnimation: true,
          opacity: [1, 0],
          scale: [1, 0],
          startScroll: 0,
          endScroll: window.innerHeight,
        },
        { 
          children: <img src={sublogo} alt="Welcome To My World" />,
          style: {textAlign: 'center', inset: '18% 0'},
          opacity: [1, 0],
          rotateY: [0, 120],
          scale: [1, -0.1],
          shouldAlwaysCompleteAnimation: true,
          startScroll: 0,
          endScroll: window.innerHeight,
        },
        {
          children: <img src={doge} alt="Doge1" />,
          translateX: [30, -90],
          translateY: [10, -10],
          scale: [0.2, 2],
          shouldAlwaysCompleteAnimation: true,
          startScroll: window.innerHeight * 0.3,
          endScroll: window.innerHeight * 1.3,
        },
        {
          children: <img src={doge} alt="Doge2" />,
          translateX: [50, -70],
          translateY: [10, -10],
          scale: [0.2, 2],
          shouldAlwaysCompleteAnimation: true,
          startScroll: window.innerHeight *0.32 ,
          endScroll: window.innerHeight * 1.32,
        },
        {
          children: <img src={doge} alt="Doge3" />,
          translateX: [70, -50],
          translateY: [10, -10],
          scale: [0.2, 2],
          shouldAlwaysCompleteAnimation: true,
          startScroll: window.innerHeight *0.34 ,
          endScroll: window.innerHeight * 1.34,
        },

        {
          children: <img src={doge} alt="Doge4" />,
          translateX: [-50, 400],
          translateY: [20, -10],
          scale: [0.1, 4],
          shouldAlwaysCompleteAnimation: true,
          startScroll: window.innerHeight,
          endScroll: window.innerHeight * 3,
        },
        {
          children: <img src={doge} alt="Doge5" />,
          translateX: [-25, 425],
          translateY: [20, -10],
          scale: [0.1, 4],
          shouldAlwaysCompleteAnimation: true,
          startScroll: window.innerHeight * 1.02 ,
          endScroll: window.innerHeight * 3.02,
        },
        {
          children: <img src={doge} alt="Doge6" />,
          translateX: [0, 450],
          translateY: [20, -10],
          scale: [0.1, 4],
          shouldAlwaysCompleteAnimation: true,
          startScroll: window.innerHeight * 1.04,
          endScroll: window.innerHeight * 3.04,
        },

        {
          children: <img src={footer} alt="Thx for the visit !!!" />,
          style: {textAlign: 'center', inset: '80% 0'},
          scale: [0, 1],
          translateY: [60, 40],
          shouldAlwaysCompleteAnimation: true,
          startScroll: window.innerHeight,
          endScroll: window.innerHeight * 2,
        }
      ]}
      style={{height: window.innerHeight * 3}}
    />
  );
}

export default App
