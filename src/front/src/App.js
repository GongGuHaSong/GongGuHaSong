import Home from "./routes/Home.js";
import Order from "./routes/Order.js"
import Wish from "./routes/Wish.js"
import Messagepage from "./routes/Message.js";
import Quantityinfo from "./routes/Quantityinfo.js";
import Privacycheck from "./routes/Privacycheck";
import Quantitypage from "./routes/Quantity.js";
import Sale from "./routes/Sale.js"
import Clothes from "./routes/Clothes.js";
import Badge from "./routes/Badge.js";
import Pouch from "./routes/Pouch.js";
import Mungu from "./routes/Mungu.js";
import Etc from "./routes/Etc.js";
import Productpage from "./routes/Product.js";
import Gongguapplypage from "./routes/Gongguapply.js";
import Newgonggupage from "./routes/Newgonggu.js";
import Checkpage from "./routes/Checkpage.js";
import Loginpage from "./routes/Login.js";
import Joinpage from "./routes/Join.js";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";



function App() {
  const [product, getProduct] = useState([]);
  const getProducts = async() => {
    const products = await axios.get("/api/sell/all");
    console.log(products);
   }

  // const getProducts = async() => {
  //   const products = await axios.get('./test.json');
    
  //   getProduct(products.data);
    
  // }
  
  useEffect(() => {
    getProducts();
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home product={product}/>} />
        <Route path="/order" element={<Order />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/wish" element={<Wish />} />
        <Route path="/message" element={<Messagepage />} />
        <Route path="/quantityinfo" element={<Quantityinfo />}/>
        <Route path="/privacy" element={<Privacycheck />} />
        <Route path="/quantity" element={<Quantitypage />} />

        <Route path="/clothes" element={<Clothes product={product}/>} />
        <Route path="/badge" element={<Badge product={product}/>} />
        <Route path="/pouch" element={<Pouch product={product}/>} />
        <Route path="/mungu" element={<Mungu product={product}/>} />
        <Route path="/etc" element={<Etc product={product}/>} />

        <Route path="/product/:id" element={<Productpage product={product}/>} />
        <Route path="/gongguapply" element={<Gongguapplypage />} />
        <Route path="/newgonggu" element={<Newgonggupage />} />
        <Route path="/check/:id" element={<Checkpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/join" element={<Joinpage />} />

      </Routes>
    </Router>

  );
}

export default App;
