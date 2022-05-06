import { ParallaxBanner } from 'react-scroll-parallax'

import './styles.css'
import logo from './logo.png'
import sublogo from './sublogo.png'
import footer from './footer.png'
import city from './city.jpeg'


const Banner = () => {
  return (
    <ParallaxBanner
    layers={[
      { 
        children: <img src={city} alt="City" className="backdrop" />,
        shouldAlwaysCompleteAnimation: true,
        shouldDisableScalingTranslations: true,
        style: {
          inset: 0,
        },
        speed: -100,
      },
      // { 
      //   children: <img src={logo} alt="Bryan Nemesis" />,
      //   style: {
      //     inset: '10% 0',
      //     width: '100%',
      //   },
      //   shouldAlwaysCompleteAnimation: true,
      //   opacity: [1, 0],
      //   scale: [1, 0],
      //   startScroll: 0,
      //   endScroll: window.innerHeight,
      // },
      // { 
      //   children: <img src={sublogo} alt="Welcome To My World" />,
      //   style: {textAlign: 'center', inset: '18% 0'},
      //   opacity: [1, 0],
      //   rotateY: [0, 120],
      //   scale: [1, -0.1],
      //   shouldAlwaysCompleteAnimation: true,
      //   startScroll: 0,
      //   endScroll: window.innerHeight,
      // },
      // {
      //   children: <>
      //     <img src={footer} alt="Thx for the visit !!!" />
      //     <p className='text'>I will maybe add more stuff later</p>
      //   </>,
      //   style: {textAlign: 'center', inset: '80% 0'},
      //   scale: [0, 1],
      //   translateY: [60, 40],
      //   shouldAlwaysCompleteAnimation: true,
      //   startScroll: window.innerHeight,
      //   endScroll: window.innerHeight * 2,
      // },
    ]}
    className='banner'
  />
  );
}

export default Banner