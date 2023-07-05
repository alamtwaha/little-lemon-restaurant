
import Card from "../card/Card"
import "./Main.css"

const Main = () => {
    return (
      <>
      <div className="card-section">
          <h1> Special Items</h1>
          <div className="Card-wraper">
              <Card />
              <Card />
              <Card />
          </div>
      </div>
      </>
    )
  }
  export default Main