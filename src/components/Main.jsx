
import Card from "../card/Card"
import "./Main.css";
import { MENU_DATA } from '../MenuItemData.jsx';

const Main = () => {
    return (
      <>
      <div className="card-section">
          <h1> Special Items</h1>
          <div className="Card-wraper">
            {
              MENU_DATA.map((Menu) => (
                <Card key={Menu.id}  Menu = {Menu} />
              ))
            }
              {/* <Card /> */}
              {/* <Card /> */}
              {/* <Card /> */}
          </div>
      </div>
      </>
    )
  }
  export default Main