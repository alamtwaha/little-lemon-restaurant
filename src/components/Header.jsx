import header from  '../header.jpg';
import "./Header.css"

const Header = () => {
    return (
      <>
        <div className="header">
          <div className='header-text'>
              <h1> Savor the tangy taste of life at Little Lemon Restaurant</h1>
              <p>Indulge in a delectable meal with our diverse menu options, including the juicy, Grilled Salmon, Beef Wellington, the spicy and creamy Chicken</p>
              <button>Reserve a Table</button>
          </div>
          
          <div className='header-img'>
             <img src={header} alt="Header" />
          </div>
        </div>
      </>
    )
  }
  
  export default Header