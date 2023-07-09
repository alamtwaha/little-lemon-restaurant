
// import Card from "../card/Card"
import "./Testimonials.css"
import TestimonialCard from "./TestimonialCard"

const Testimonials = () => {
    return (
      <>
      <div className="Testimonials-section">
          <div className="Testimonials-Heading">
              <h1> Testimonials</h1>
            <div className="Testimonials-wraper">
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
              {/* <Card /> */}
            </div>
          </div>
      </div>
      </>
    )
  }
  export default Testimonials