import logo from '../assets/logo.png'
import sublogo from '../assets/sublogo.png'

const Logo = ({ scrollProgress }) => {

  const calculateLogoLook = scrollProgress => {
    const endTransformAtScrollProgress = 0.2
    if (0 <= scrollProgress && scrollProgress < endTransformAtScrollProgress) {
      return {
        transform: `scale(${1 - (1 / endTransformAtScrollProgress) * scrollProgress})`,
        opacity: `${1 - (1 / endTransformAtScrollProgress) * scrollProgress}`
      }
    } else {
      return {
        display: 'none'
      }
    }
  }

  const calculateSublogoLook = scrollProgress => {
    const endTransformAtScrollProgress = 0.2
    if (0 <= scrollProgress && scrollProgress < endTransformAtScrollProgress) {
      return {
        transform: `scale(${1 - (1 / endTransformAtScrollProgress) * 2 * scrollProgress}, ${1 - (1 / endTransformAtScrollProgress) * scrollProgress})`,
        opacity: `${1 - (1 / endTransformAtScrollProgress) * scrollProgress}`
      }
    } else {
      return {
        display: 'none'
      }
    }
  }

  return (
    <div className="logo-container">
      <img src={logo} alt="logo" className="logo-img" style={calculateLogoLook(scrollProgress)} />
      <img src={sublogo} alt="sublogo" className="sublogo-img" style={calculateSublogoLook(scrollProgress)} />
    </div>
  )
}

export default Logo