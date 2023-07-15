
import "./TestimonialCard.css"

const TestimonialCard = ({Testimonial}) => {
    const { name, imageUrl, feedback, ratingImg } = Testimonial;
    return (
        <>
            <div className="Testimonial">
                <div className="Testimonial-Container">
                    <img className="img" src={imageUrl} alt={`{name}`} />
                    <div className="Testimonial-content">
                        <h2 className="Testimonial-title">{name}</h2>
                        <img  src={ratingImg} alt="Rating" />
                        <p className="Testimonial-paragraph">{feedback}</p>
                    </div>
                </div>

            </div>
        </>
    )
  }
  
  export default TestimonialCard