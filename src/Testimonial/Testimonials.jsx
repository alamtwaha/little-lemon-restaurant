
// import Card from "../card/Card"
import "./Testimonials.css"
import TestimonialCard from "./TestimonialCard"
import { TESTIMONIAL_DATA } from "./TestimonialData"

const Testimonials = () => {
    return (
      <>
      <div className="Testimonials-section">
          <div className="Testimonials-Heading">
              <h1> Testimonials</h1>
            <div className="Testimonials-wraper">
              {
                TESTIMONIAL_DATA.map((Testimonial) => (
                  <TestimonialCard key={Testimonial.id} Testimonial={Testimonial} />
                ))
              }
              {/* <TestimonialCard /> */}
              {/* <TestimonialCard /> */}
              {/* <TestimonialCard /> */}
              {/* <TestimonialCard /> */}
              {/* <Card /> */}
            </div>
          </div>
      </div>
      </>
    )
  }
  export default Testimonials