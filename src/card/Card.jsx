
import "./Card.css";

const Card = () => {
    return (
        <>
            <div className="card">
                {/* <img src="Grilled-Salmon1.jpg" alt="" /> */}
                {/* <h1>Card</h1> */}
                <img src="../card-img/Grilled-Salmon.jpg" alt="" />
                <div className="card-content">
                    <h2 className="card-title">Grilled Salmon</h2>
                    <h2 className="card-price">$35.00</h2>
                    <p className="card-paragraph">Lemon pepper, soy sauce, brown sugar, salmon fillets.</p>
                    <button className="card-btn">Order Online</button>
                </div>

            </div>
        </>
    )
  }
  
  export default Card