import logo from '../../assets/meet.png'
import './Header.css'

const Header = ({ user }) => {
  const { name, color } = user
  return (
    <header style={{ background: '#333' }}>
      <img src={logo} className="app-logo" alt="Alchemy Logo" />
      <p aria-label={`Meet ${name}!`}>
        Meet <span style={{ color: `${color}` }}>{name}</span>!
      </p>
    </header>
  )
}

export default Header
