import BagGoods from "./BagGoods"
import {Link} from "react-router-dom"

function Header() {

    return (
   
      <header>
        <h1>HEADER</h1>
        <nav>
          <ul>
            <li><Link to="/goods">Goods</Link></li>
            <li><Link to="/bag">Bag</Link></li>
          </ul>
        </nav>
        <BagGoods/>
      </header>
    )
  }
  
  export default Header