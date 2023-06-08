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
              <li><a href="/about">About Us</a></li>
              <li><a href="/blogs">Blogs</a></li>
            </ul>
        </nav>
       </div>
      </>
    )
  }
  
  export default Nav