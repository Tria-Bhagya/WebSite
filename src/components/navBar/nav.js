import "./nav.css"
import Lineicon from './line.svg'
function nav() {
  return (
    <div className="navigation_bar">
        <img className="horizontal_line" src={Lineicon} alt="line"/>
        <a href="#T-shirt" target="_blank"> T-shirt </a>
        <a href="#T-shirt" target="_blank"> Shirt </a>
        <a href="#T-shirt" target="_blank"> Jackets </a>
        <a href="#T-shirt" target="_blank"> sweatShirts </a>
        <img className="horizontal_line" src={Lineicon} alt="line"/>

    </div>
  )
}
export default nav;
