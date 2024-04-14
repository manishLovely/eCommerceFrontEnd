import { ListVertical } from './nav.js'
import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from 'react';
import { ToggleButton } from './toggleButton.js';
import { CartSearch } from './cart.js';
import { CancelButton } from './cancel.js';
import { ProductItems } from "./prodItems.js";
import { type } from '@testing-library/user-event/dist/type/index.js';
import { GoArrowLeft } from "react-icons/go";

import { Outlet, Link } from "react-router-dom";

import{CartItems1} from "./cartItems.js";

let i = 0;

export function VerticalMenu({ matchValue, value }) {

  const [width, setWidth] = useState(false)

  let responses = value;

 
  
  

  const [CartSpread,setCartSpread] = useState(false)

  const [cartItems,setCartItems] = useState([])
  
  const [cartItemQuantity,setCartItemQuantity] = useState(0)

  const [cartTotal,setCartTotal] = useState([])

  const [cartDisplay,setCartDisplay] = useState(false)

  const [useEffRunner,setUseEffRunner] = useState()

  const [cartAccessories,setCartAccessories]= useState()

let style1 = CartSpread?{position:"absolute",top:"0px",width:"100vw",height:"100vh",transition:"width 0s, height 0s",zIndex:"20",background: "#e6e6e6"}:{width:"0vw",height:"0vh",transition:"width 0s,height 0s",overflowX:"hidden"}

useEffect(()=>{

   fetch("http://localhost:8080/dataServer/cartItems",{
  method: "GET",
  mode:"cors",
  credentials:"include",
  
}).then((response)=>{ let data = response.json() ;  return data; }).then((data)=>{if(data[3].isCart===true){setCartItemQuantity(data[1].length)};if(data[3].isCart===false){setCartItemQuantity("0")}})

 

},)


async function cartSpreader(){

  setCartSpread(true)
  
  let response = await fetch("http://localhost:8080/dataServer/cartItems",{
  method: "GET",
  mode:"cors",
  credentials:"include",
  
});

  let data = await response.json();

  
  setCartItems(data[1])
  setCartItemQuantity(data[1].length)

  setCartTotal(data[2])
 {/* 
 let response1 = await fetch("http://localhost:8080/dataServer/totalCartValue",{
  
   method:"GET",
   mode:"cors",
   credentials:"include",


 })

 let data1 = await response1.json();
    setCartTotal(data1[0].TotalValue)
  
 let Bool =  data1[0].totalCartValue  

 setCartDisplay(Bool)

   */}
    
      
  



  }

 {/* cartIncrementor */}
 
  async function cartIncrementor(e){
 
   e.preventDefault();
    const formData = new FormData();
    formData.append("prodId",e.target.getAttribute("vaule1"))
    let response = await fetch("http://localhost:8080/dataServer/cartIncrement",
    {
     method:"POST",
     mode:"cors",
     credentials:"include",
     headers:{
            "Content-Type":"application/json",
     },
     body:JSON.stringify({"prodId":e.target.getAttribute("vaule1")}),
    },
   
    )
 
    cartSpreader()
 
  }


{/*cartIncrementor ends */}



{/* cartDecrementor */}

async function cartDecrementor(e){

  e.preventDefault();
   const formData = new FormData();
   formData.append("prodId",e.target.getAttribute("vaule1"))
   let response = await fetch("http://localhost:8080/dataServer/cartDecrementor",
   {
    method:"POST",
    mode:"cors",
    credentials:"include",
    headers:{
           "Content-Type":"application/json",
    },
    body:JSON.stringify({"prodId":e.target.getAttribute("vaule1")}),
   },
  
   )

   let data1 = await response.json()
  

    cartSpreader()    

 }


{/*cartDecrementor ends */}

function effRunner(){
 let i1 = i++;
  setUseEffRunner(i1)
}


 async function AddToCart(e) {
     
  e.preventDefault()

  effRunner()

  try{   
  const response = await fetch("http://localhost:8080/dataServer/cartManager",{
      
      method: "POST",
      mode:"cors",
      headers:{
        Accept:"application/json",
        "Content-Type": "application/json",
        
      },
      credentials: 'include',
      body:JSON.stringify({"prodId":e.target.getAttribute("value")}),  
      
    })

  const result = await response.text()
 
  alert(JSON.stringify(result))
  }catch(error){console.error(error)}

   
   setCartItems([{prodId:"eieo",quantity:2}])
   
    }
  
   async function couponApply(e){
    e.preventDefault()

    let response = await fetch(`http://localhost:8080/dataServer/couponApp/${e.target.getAttribute("couponValue")}`,{
     
      method:"GET",
      mode:"cors",
      credentials:"include",
   

    })
    
    let data = await response.json()
    if(data[0].message==="Invalid coupon Code"){
    alert(data[0].message)
    }

    cartSpreader()

    }
  


  const style = width ? {
    position: "fixed", left: "0",
    top: "0", background: "#e6e6e6",
    width: "70vw", zIndex: "10", transition: "0.5s", overflowX: "hidden"
  } : {
    position: "fixed", left: "0",
    top: "0", background: "#e6e6e6",
    width: "0", zIndex: "10", transition: "0.5s", overflowX: "hidden"
  }



  const styleA = {
    padding: "8px 8px 8px 32px",
    textDecoration: "none",
    fontSize: "17px",
    color: "#818181",
    display: "block",
    transition: "0.3s",


  }

 
  


  if (!matchValue) {

    return (
      <>
        <div style={{ width: "100%", height: "27px", backgroundColor: "#f2f2f2", position: "relative" }}>

          {/*this div is for mobile horizontal menu bar */}
          <div style={{ position: "absolute", top: "6px", left: "5px" }}>
            <ToggleButton
              onClick={() => { setWidth(true) }}
            />
          </div>

          <div style={{ position: "absolute", right: "3px", top: "0px" }}>
            <CartSearch cartItemQuan={cartItems.length} prodIdCookis={cartItems} cartSliderTrue={cartSpreader} cartQuantity={cartItemQuantity} />
          </div>
        </div>
        {/*vertical menu, position absolute*/}
        <div style={style} >

          <a style={{ position: "absolute", top: "0", right: "0" }}>

            <CancelButton
              onClick={() => { setWidth(false) }}
            />
          </a>

        <Link to="/about" style={{textDecoration:"none"}} onClick={() => { setWidth(false) }}>
          <ListVertical
            type="About"
            styleA={styleA}
          />
        </Link>

          <Link to="/" style={{textDecoration:"none"}} onClick={() => { setWidth(false) }}> 
          <ListVertical
            type="Home"
            styleA={styleA}
          />
           </Link>

         <Link to="/contactUs" style={{textDecoration:"none"}} onClick={() => { setWidth(false) }}>
          <ListVertical
            type="Contact Us"
            styleA={styleA}
          />
          </Link>
           <Outlet />
        </div>
        {/* vertical cartItems*/}
        <div style={style1}>
        <GoArrowLeft onClick={()=>{setCartSpread(false)}}/>
        <div style={{display:"flex",flexDirection:"column" }}>
        <CartItems1 valueCart = {cartItems} cartTotal1 = {cartTotal} coupoApp={couponApply} cartDisplayValue={cartDisplay} quantiy={cartItemQuantity} decrementor={cartDecrementor} incrementor={cartIncrementor}/>
       
        </div>

        </div>
        {/* end vertical cartItems*/}
        <div style={{ display: "flex", flexDirection: "row", marginTop: "0px" }}>
          <ProductItems value={responses} addToCart={AddToCart} />
        </div>

      </>

    )

  }

}