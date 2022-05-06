import footer from '../assets/footer.png'

const ClosingText = ({ scrollProgress }) => {

  const calculateLook = scrollProgress => {
    const beginTransformAtScrollProgress = 0.8
    if (beginTransformAtScrollProgress < scrollProgress && scrollProgress <= 1) {
      return {
        transform: `scale(${1 - ((1 - scrollProgress) / (1 - beginTransformAtScrollProgress))})`,
        opacity: `${1 - ((1 - scrollProgress) / (1 - beginTransformAtScrollProgress))}`
      }
    } else {
      return {
        display: 'none'
      }
    }
  }

  const calculateTextLook = scrollProgress => {
    const beginTransformAtScrollProgress = 0.95
    if (0.8 < scrollProgress && scrollProgress <= 1) {
      return {
        transform: `scale(${1 - ((1 - scrollProgress) / (1 - beginTransformAtScrollProgress))})`,
        opacity: `${1 - ((1 - scrollProgress) / (1 - beginTransformAtScrollProgress))}`
      }
    } else {
      return {
        display: 'none'
      }
    }
  }

  return (
    <div className="closing-text-container">
      <img src={footer} alt="thanks for your visit" className="closing-text-img" style={calculateLook(scrollProgress)} />
      <div className="closing-text-text" style={calculateTextLook(scrollProgress)}>I will maybe add more stuff later</div>
    </div>
  )
}

export default ClosingText
