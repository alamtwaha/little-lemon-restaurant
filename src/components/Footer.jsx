import Logo from "../logo.svg";
import "./Footer.css";

const Footer = () => {
    return (
      <>
        <div className="Footer">
          <div className="Footer-Container">
            <div className="Footer-Logo">
              <img src={Logo} alt="" className="logo" />
              <p>Little Lemon restaurant in fine dine-in Restaurant
                in NYC Also take online orders. Indulge in a delectable 
                meal with our diverse menu options, including the juicy, 
                Grilled Salmon, Beef Wellington, the spicy and creamy Chicken</p>
            </div>

            <div className="Footer-Link">
              <ul>
                <li>Mission</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Refund Policy</li>
              </ul>
            </div>

            <div className="Footer-Contact">
              <h2>Contact</h2>
              <p>info@littlelemonrestaurant.com</p>
              <p>(301) 862-4338</p>
              <p>23415 Three Notch Rd, California</p>

            </div>

            {/* <h1> Navigation</h1> */}
          </div>
          <div className="Copywrite">
            <p> @2023 Little Lemon Restaurant</p>
            <p>Design and Developed By Mahbub Alam</p>
          </div>
        </div>
      </>
    )
  }
  
  export default Footer