import { BrowserRouter, Route, Routes } from "react-router-dom"

import ShopCategory from "./Pages/ShopCategory"
import LoginSignup from "./Pages/LoginSignup"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import Shop from "./Pages/Shop"

import LayOut from "./LayOut"
import Men from "./Pages/Men"
import Women from "./Pages/Women"


function App() {
  return (
    <div >
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<LayOut/>}>
        <Route path="/" element={<Shop/>}/>
        <Route path="/mens" element={<Men/>}/>
        <Route path="/womens" element={<Women/>}/>

        <Route path="/product" element={<Product/>}/>
        <Route path=":productId" element={<Product/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
        <Route path="/cart" element={<Cart/>}/>
        
        </Route>

      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

 export default App