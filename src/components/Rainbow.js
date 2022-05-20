const Rainbow = ({ scrollProgress }) => {

  const calculateBarPosition = (scrollProgress) => {
    return {
      transform: `translate(${-200 + scrollProgress * 140}vw)`
    }
  }

  return (
    <div className="rainbow-container">
      <div className="rainbow-bar-1" style={calculateBarPosition(scrollProgress * 1.4)}></div>
      <div className="rainbow-bar-2" style={calculateBarPosition(scrollProgress * 1.2)}></div>
      <div className="rainbow-bar-3" style={calculateBarPosition(scrollProgress)}></div>
    </div>
  )
}

export default Rainbow