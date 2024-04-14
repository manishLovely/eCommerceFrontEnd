import { useState } from "react";

import { MdCurrencyRupee } from "react-icons/md";

import { useNavigate } from "react-router-dom";

export function CouponCode(props){
     
   

let coupon1= props.coupon1

const navigation = useNavigate();

let total = props.totalValue
    const [inputHold,setInputHold] = useState({input:""})

function inputHandler(e){

    setInputHold({
        ...inputHold,
        [e.target.name]:[e.target.value]
     } )

}

 


let couponDisplay = <>
<form>
<label>Enter couponcode:</label>
<input style={{width:"25vw",height:"2vh",marginLeft:"5px"}} value={inputHold.input} name="input" onChange={inputHandler} />
<button style={{marginLeft:"5px"}} onClick={coupon1} couponValue={inputHold.input}>Apply</button>
</form>
<div><span>Grand Total :</span><span><MdCurrencyRupee/>{total}</span></div>
<div style={{display:"flex", justifyContent:"center",marginTop:"20px"}}>
<button style={{width:"70px",height:"3vh",backgroundColor:"orange",borderRadius:"15px",borderStyle:"none",cursor:"pointer"}} onClick={()=>navigation("/checkout")}>Checkout</button>
</div>
</>

return(


   couponDisplay
  
       
)
}