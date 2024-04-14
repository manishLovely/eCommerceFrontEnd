import { MdCurrencyRupee } from "react-icons/md";
import {CouponCode} from "./coupon.js";
import { useState } from "react";


export function CartItems1(props){
    
 let value1 = props.valueCart;

 let coupon = props.coupoApp;
 
 let cartTotal = props.cartTotal1;

 let cartDecrementor = props.decrementor;
 let cartIncrementor = props.incrementor;


 let cartItems = value1
 let isCart = cartTotal.isCouponTotalDisplay
 

 {/* 
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

   let data = response.json()

 }

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

   let data = response.json()

 }
*/}

   const  cartArticle  =  cartItems.map(items=>
        
        items.cart?
        <>
        <div style={{position:"relative"}}>
        <img src = {items.ImageUrl} width = "70px" height = "70px" />  
        <span style={{position:"absolute",left:"80px"}} >{items.Title}</span>
        <span style={{position:"absolute",top:"40px",left:"80px"}}><MdCurrencyRupee/>{items.Price}</span>
        <div style={{position:"absolute",top:"30px",left:"180px" ,border:"1px solid black",width:"10vw",height:"3vh",overflow:"hidden"}}><span style={{fontSize:"20px",overflow:"hidden",position:"absolute",left:"2px"} }><a vaule1= {items.prodId} onClick={cartIncrementor}>+</a></span><span style={{ fontSize:"30px",overflow:"hidden",position:"absolute",right:"2px",transform:"translate(1px,-8px)"}}><a vaule1= {items.prodId} onClick={cartDecrementor}>-</a></span></div>
        <span style={{position:"absolute",top:"40px",right:"40px"}}>Quantity : {items.Quantity}</span>
        </div>
         
         </> :<h1>Cart is empty</h1>
            )
    

 
    
  
      
return(
  <>
   {cartArticle}
  { isCart &&<CouponCode coupon1={coupon} totalValue ={cartTotal.TotalCartValue} />}
   
   </>
    
       
)


}