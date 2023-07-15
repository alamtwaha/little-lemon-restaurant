import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import './Nav.css';

const Nav = () => {
    return (
      <>
       <div className="nav-container">
          <div className="nav-content">
            <Link to='/' ><img src={logo} alt="Little Lemon Restaurant Logo"/></Link>
            <nav>
              <Link to='/' className='nav-item'>Home</Link>
              <Link to='/about' className='nav-item'>About</Link>
              <Link to='/menu' className='nav-item'>Menu</Link>
              <Link to='/reservation' className='nav-item'>Reservation</Link>
              <Link to='/order-online' className='nav-item'>Order Online</Link>
              <Link to='/login' className='nav-item'>Login</Link>
            </nav>
          </div>
        </div>
      </>
    )
  }
  
  export default Nav