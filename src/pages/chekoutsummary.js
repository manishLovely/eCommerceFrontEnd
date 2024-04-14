
import { useLocation, useNavigate,Outlet, Link  } from "react-router-dom";

import { SlArrowRight } from "react-icons/sl";
import { useEffect, useReducer, useState } from "react";
import { MdCurrencyRupee } from "react-icons/md";
import {GrandTotal} from "../grandTotal1.js";
import useRazorpay from "react-razorpay";
import { useCallback } from "react";
function reducer(state, action) {

  switch (action.type) {

    case "shippingItems": {
      return {
        ...state,
        shippingItems: action.value
      }
    }
    case "couponCode": {
      return {
        ...state,
        couponCode: action.value
      }

    }

    case "totalCartValue": {
      return {
        ...state,
        totalCartValue: action.value
      }

    }
    case "isCoupon": {
      return {
        ...state,
        isCoupon: action.value
      }

    }
    case "couponValue": {

      return {
        ...state,
        couponValue: action.value
      }

    }
    default: throw new Error("unexpected case");


  }

}








export function CheckoutSummary() {

  const [state, dispatch] = useReducer(reducer, { shippingItems: [], couponCode: "", totalCartValue: "", isCoupon:"", couponValue: 0 })

  const [Razorpay, isLoaded] = useRazorpay();

  

  let location = useLocation();
  let stateCheckout = location.state;

{/* 
 async function deleteCart(){
 
  let response = await fetch("http://localhost:52784/payment/feignClientDelete",{
   method:"DELETE",
   mode:"cors",
   credentials:"include",
   headers:{
         "Accept":"application/json",
        }

  })
  
    let data = await response.json();
    alert(data)
    
}
*/}
  let trigger = async (response1)=>{  

    try{
      let response = await fetch("http://localhost:8085/payment/PaymentCreation",
       {
         method:"POST", 
         mode:"cors",
         headers:{
          "Accept":"application/json",
           "Content-Type":"application/x-www-form-urlencoded"
         },
         
         body: new URLSearchParams({"amount":`${state.totalCartValue}`,"currency":"INR","recceipt":"receipt_1","notes_key_1":"tea,coffie","email":`${stateCheckout.email}`,"first_name":`${stateCheckout.first_name}`,"last_name":`${stateCheckout.last_name}`,"address":`${stateCheckout.address}`,"city":`${stateCheckout.city}`,"phone_number":`${stateCheckout.phoneNumber}`,"news_offers":`${stateCheckout.checkBox}`,"paymentDetails":[JSON.stringify({"paymentId":`${response1.razorpay_payment_id}`}),JSON.stringify({"orderId":`${response1.razorpay_order_id}`}),JSON.stringify({"orderAmount":state.totalCartValue})]}),
          
            
        }
      );
    
      let data = await response.json()
       
    if(data.status==="payment sucess"){

      let response = await fetch("http://localhost:8085/payment/feignClientDelete",{
        method:"GET",
        mode:"cors",
        credentials:"include",
        headers:{
              "Accept":"application/json",
             }
     
       })
       
         let data = await response.json();
        
         


    }
 
    window.location.href = "http://localhost:3000/"  

 }catch(e){
 alert(e)
 }

    }




async function submit(){
try{
   let response = await fetch("http://localhost:8085/payment/orderCreation",
   {
    method:"POST",
    mode:"cors",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/x-www-form-urlencoded"
    },
    body:new URLSearchParams({"amount":`${state.totalCartValue}`,"currency":"INR","recceipt":"receipt_1","notes_key_1":"tea,coffie",})
   }
   )

 let data = await response.json()



 const options = {
  key: "rzp_test_3IaMK3Pi2SwEju", // Enter the Key ID generated from the Dashboard
  amount: `${data.order_Amount}`, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  currency: "INR",
  name: "Acme Corp",
  description: "Test Transaction",
  image: "https://example.com/your_logo",
  order_id: `${data.order_id}`, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
  handler:function (response) {
    
         trigger(response)
         
        

  },
  prefill: {
    name: `${stateCheckout.first_name}`+" "+`${stateCheckout.last_name}`,
    email: `${stateCheckout.email}`,
    contact: `${stateCheckout.phoneNumber}`,
  },
  notes: {
    address: `${stateCheckout.address}`,
  },
  theme: {
    color: "#3399cc",
  },
};

const rzp1 = new Razorpay(options);
 
rzp1.on("payment.failed", function (response) {
  alert(response.error.code);
  alert(response.error.description);
  alert(response.error.source);
  alert(response.error.step);
  alert(response.error.reason);
  alert(response.error.metadata.order_id);
  alert(response.error.metadata.payment_id);
});

rzp1.open();



  }catch(e){alert(e)}
}




  const[displayGrandT,setDisplayGrandT]=useState(false)

  let isCoupon = state.isCoupon

 
  
  const navigation = useNavigate();
  useEffect(() => {

    async function res() {
      let grandT = false
      try{
      let response = await fetch("http://localhost:8085/payment/feignClient", {
        credentials: "include",
        mode: "cors",
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      })

      let data = await response.json()
   
      console.debug(data.couponCode)
      dispatch({ type: "shippingItems", value: data.cartProduct })
      dispatch({ type: "couponCode", value: data.couponCode })
      dispatch({ type: "totalCartValue", value: data.totalCartValue })
      dispatch({ type: "isCoupon", value: data.coupon })
      dispatch({ type: "couponValue", value: data.couponValue })
      console.log(data.cartProduct)
      if(data.totalCartValue!=0){
          
        setDisplayGrandT(true)
      }
    }catch(e){
      alert(e)
    }
    }


    res()

  }, [dispatch])




  return (
    <>
      <div style={{ zIndex: "44", backgroundColor: "rgb(230, 230, 230)", position: "absolute", top: "0px", height: "100%", width: "100%" }}>
        <div style={{ height: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <span style={{ color: "olive", fontSize: "10px", transform: "translateY(1px)" }} >Cart</span><span><SlArrowRight style={{ fontSize: "10px" }} /></span>
          <span style={{ color: "olive", fontSize: "10px", cursor: "pointer" }} onClick={() => { navigation(-1) }}>Shipping</span><span><SlArrowRight style={{ fontSize: "10px" }} /></span>
          <span style={{ fontSize: "10px", color: "orange" }}>Payment</span>
        </div>
      </div>
      <div style={{ zIndex: "44", position: "absolute", top: "15px", width: "100%" }}>

        <span>{state.shippingItems.map((items) => {

          return (
            <>
              <div style={{ display: "flex", flexDirection: "row", marginTop: "2px" }}>
                <div style={{ alignSelf: "center" }}><img src={items.imageUrl} style={{ objectFit: "contain", width: "60px", height: "60px" }} /></div>
                <div style={{ width: "150px", alignSelf: "center", textAlign: "center", transform: "translate(0,-2px)" }}>{items.productName}</div>
                <div style={{ alignSelf: "center", textAlign: "center" }}><MdCurrencyRupee style={{ transform: "translate(0,3px)" }} />{items.productPrice}</div>
              </div>


            </>)
        })}</span>

       
        <span>{isCoupon ? (<><span>coupon code applide: {state.couponCode}</span></>) : (<span></span>)}</span>

        <span>{displayGrandT ? (<span><hr/></span>) : (<span></span>)}</span>

        <span>{isCoupon ? (<span>Discount:<MdCurrencyRupee style={{ transform: "translate(0,3px)" }} />{state.couponValue}</span>) :(<></>)}</span><br />
        
        <span>{displayGrandT ? (<span>Grand Total:<MdCurrencyRupee style={{ transform: "translate(0,3px)" }} />{state.totalCartValue}</span>) : (<span></span>)}</span>
        
      <div style={{marginTop:"50px" , marginLeft:"27%"}}>
       <span>{displayGrandT?(<button type="button" style={{backgroundColor:"yellow",padding:"10px"}} onClick={submit}>Buy</button>):(<span></span>)}</span>
        
      <span>{displayGrandT?(<button type="button" style={{backgroundColor:"yellow",padding:"10px"}}><Link to="/" style={{textDecoration:"none"}}>Continue Shopping</Link></button>):(<span></span>)}</span>
       </div> 
         <Outlet/>
      </div>
      
     

    </>

  )


}