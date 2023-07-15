
import "./Card.css";

const Card = ({Menu}) => {
    const { name, imageUrl, details, price} = Menu;
    return (
        <>
            <div className="card">
                <img src={imageUrl} alt={`${name}`} />
                <div className="card-content">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-price">{price}</h2>
                    <p className="card-paragraph">{details}</p>
                    <button className="card-btn">Order Online</button>
                </div>

            </div>
        </>
    )
  }
  
  export default Card