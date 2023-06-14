import logo from '../logo.svg';
import './Nav.css';

const Nav = () => {
    return (
      <>
       <div className="nav-container">
        <img src={logo} alt="Little Lemon Restaurant Logo"/>
        <nav>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/reservation">Reservation</a></li>
              <li><a href="/orderOnline">Order Online</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
        </nav>
       </div>
      </>
    )
  }
  
  export default Nav