const Rainbow = ({ scrollProgress }) => {

  const calculateBarPosition = (scrollProgress) => {
    return {
      transform: `translate(${-150 + scrollProgress * 150}vw)`
    }
  }

  return (
    <div className="rainbow-container">
      <div className="rainbow-bars">
        <div className="rainbow-bar-1" style={calculateBarPosition(scrollProgress * 1.2)}></div>
        <div className="rainbow-bar-2" style={calculateBarPosition(scrollProgress * 1.15)}></div>
        <div className="rainbow-bar-3" style={calculateBarPosition(scrollProgress * 1.1)}></div>
        <div className="rainbow-bar-4" style={calculateBarPosition(scrollProgress * 1.05)}></div>
        <div className="rainbow-bar-5" style={calculateBarPosition(scrollProgress )}></div>
        <div className="rainbow-bar-6" style={calculateBarPosition(scrollProgress * 0.95)}></div>
      </div>
    </div>
  )
}

export default Rainbow