import doge from '../assets/doge.gif'

const Doge = ({ scrollProgress, start, end, direction }) => {

  const calculateLook = scrollProgress => {
    if (start < scrollProgress && scrollProgress <= end) {
      const translateX = direction === 'left' ? 
        -((scrollProgress - start) / (end - start) * 130 - 50) :
        (scrollProgress - start) / (end - start) * 130 - 50

      const translateY = (scrollProgress - start) / (end - start) * 60 - 40
      const scale = (scrollProgress - start) / (end - start) * 3

      const rotate = direction === 'left' ? 
        -((scrollProgress - start) / (end - start) * 270 - 135) :
        (scrollProgress - start) / (end - start) * 270 - 135
      return {
        transform: `translate(${translateX}vw, ${translateY}vh) scale(${scale}) rotate(${rotate}deg)`,
      }
    } else {
      return {
        display: 'none'
      }
    }
  }

  return (
    <div className="doge-container">
      <img src={doge} alt="Flying and rotating doge" className="doge" style={calculateLook(scrollProgress)} />
    </div>
  )
}

export default Doge
