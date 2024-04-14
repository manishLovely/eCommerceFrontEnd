import logo from './logo.svg';
import './App.css';
import { ListItems, ListVertical } from './nav.js';
import { useState, useEffect } from 'react';
import { FiMenu } from "react-icons/fi";
import { VerticalMenu } from "./toggler.js";
import { ProductItems } from "./prodItems.js";

import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Checkout} from './pages/checkout.js';
import {CheckoutSummary} from './pages/chekoutsummary.js'
import { About } from './pages/about.js';
import { ContactUs } from './pages/contactUs.js';
function App() {


  const [matches, setMatches] = useState(
    window.matchMedia("(min-width:480px)").matches
  )
  const [responses, setResponses] = useState([])
  useEffect(() => {

    fetch("http://localhost:8080/dataServer/fetchAllCategory").then((response) => {

      console.log(response.status)

      let data = response.json()

      return data
    }).then((value) => { setResponses(value); console.log(value) }).catch((error) => { console.error(error) })

  }, []);

  useEffect(() => {
    window
      .matchMedia("(min-width: 480px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

{/*
  if (matches) {
    return (
      <>
      <div style={{borderStyle:"hidden",width:"100%",height:"50px",marginTop:"0px"}}> 
        <ul style={{ listStyleType: "none", margin: "0px", padding: "0px"}}>
          <ListItems
            type="About"
            isForm={false}
          />
          <ListItems
            type="Shop"
            isForm={false}
          />
          <ListItems type="Contact us"
            isForm={false}
          />
          <ListItems
            type={{ inType: "text", buttonType: "submit" }}

            isForm={true}
          />
        </ul>
        </div>
       <div style={{display:"flex",flexDirection:"row",marginTop:"20px"}}>
        <ProductItems value={responses} />
       </div>
        </>
 
 
      
 
 
 )
  }  */}

  if (matches) {
    return (
<>
  <VerticalMenu matchValue={!matches} value={responses}/>

  
  <Routes>

    <Route path="/checkout" element={<Checkout/>} /> 
 
 </Routes>

 <Routes>
  
  <Route path="/checkoutsummary" element={<CheckoutSummary/>}/>

  <Route path="/about" element={<About/>}/>

  <Route path="/contactUs" element={<ContactUs/>}/>

  </Routes> 
  
  
  
  
  </>

    )
  }

  if (!matches) {
    return (
      <>
      
      <VerticalMenu matchValue={matches} value={responses} />
     
      
  <Routes>

    <Route path="/checkout" element={<Checkout/>} /> 
 
 </Routes>
  
 <Routes>

<Route path='/checkoutsummary' element={<CheckoutSummary/>}  />
  
  <Route path="/about" element={<About/>}/>

  <Route path="/contactUs" element={<ContactUs/>}/>

</Routes> 
  
  
      
     </>
    )

  }


}





export default App;
