import { useContext } from "react"
import { MyContext } from "../App"
import BagList from "./BagList"

function BagGoods() {
 let {state} = useContext(MyContext)
    return (
      <div>
        <p>{state.count}</p>
        <BagList></BagList>
      </div>
    )
  }
  
  export default BagGoods