import { Route, Routes } from "react-router-dom"
import GoodsList from "./GoodsList"
import { BrowserRouter } from 'react-router-dom'
import BagGoods from "./BagGoods"

function MainComp() {

    return (
      
      <main>
        <Routes>
          <Route element={<GoodsList />} path="/goods"></Route>
          <Route element={<BagGoods />} path="/bag"></Route>

        </Routes>
        <GoodsList/>
      </main>
    )
  }
  
  export default MainComp