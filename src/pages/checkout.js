
import { useNavigate } from "react-router-dom";

import { SlArrowRight } from "react-icons/sl";

import { useReducer } from "react";

function reducer(state,action){
 switch(action.type){
   case"email":{
      return{   
     ...state,
    email:action.nextValue
          }
     }
   case "first_name":{
     return{
      ...state,
      first_name:action.nextValue
     }
 }
  case "last_name":{
    return{
      ...state,
      last_name:action.nextValue  
    }
  }
  case"address":{
   return{
    ...state,
    address:action.nextValue
   }
  }

case"city":{
return{
    ...state,
   city:action.nextValue
}

}
case"phoneNumber":{
   return{
     ...state,
     phoneNumber:action.nextValue

   }


}
case"checkBox":{
   
    return{
        ...state,
        checkBox:action.nextValue,
  }
    }
   

    




default:throw new  Error("unexpected case");

 }

}




 


export function Checkout(){

    const [state,dispatch] = useReducer(reducer,{email:"",first_name:"",last_name:"",address:"",city:"",phoneNumber:"",checkBox:false})
 
    const navigation  = useNavigate();
   
    async function shippingData(e){

        e.preventDefault();
       
        navigation("/checkoutsummary",{state:{email:state.email,first_name:state.first_name,last_name:state.last_name,address:state.address,city:state.city,phoneNumber:state.phoneNumber,checkBox:state.checkBox}})
{/* 
        try{
        let response = await fetch("http://localhost:50033/payment/shippingData",
        {
        method:"POST",
        mode:"cors",
        credentials:"include",
        headers: {
            
            'Content-Type': 'application/json'
          },
        body:JSON.stringify({"email":`${state.email}`,"first_name":`${state.first_name}`,"last_name":`${state.last_name}`,"address":`${state.address}`,"city":`${state.city}`,"mobNumber":`${state.phoneNumber}`,"news_offers":`${state.checkBox}`}),
        
        }
        
        )
        let data = await response.text();
        if(response.status===400){
        alert(data)}
        else{
        navigation("/checkoutsummary",{state:{email:state.email,first_name:state.first_name,last_name:state.last_name,address:state.address,city:state.city,phoneNumber:state.phoneNumber,checkBox:state.checkBox}})
      }
        }
        catch(error){
            alert("error in shiping data")
        }
      
         */}

      }
 
  

    function formHandler(e){
        dispatch({
        type:`${e.target.name}`,
        nextValue:e.target.value,
        })
    }




return(

    <>
    
   <div style={{zIndex:"40",backgroundColor:"rgb(230, 230, 230)",position:"absolute",top:"0px",overflow:"hidden",height:"100%",width:"100%"}}>
   <div style={{height:"20px",display:"flex",justifyContent:"center",alignItems:"center"}}>
   <span style={{color:"olive",fontSize:"10px",transform:"translateY(1px)",cursor:"pointer"}} onClick={()=>{navigation(-1)}} >Cart</span><span><SlArrowRight style={{fontSize:"10px"}}/></span>
    <span style={{color:"orange",fontSize:"10px"}}>Shipping</span><span><SlArrowRight style={{fontSize:"10px"}}/></span>
    <span style={{fontSize:"10px"}}>Payment</span>
    </div>
    
    <h6 style={{margin:"0px"}}>Contact Information</h6>
    <form style={{marginTop:"5px"}} >
    <input type="email" placeholder="Email" name="email" value={state.email} onChange={formHandler} style={{width:"50vw",borderRadius:"5px",borderStyle:"none",marginLeft:"5px"  }}/>
    <h6 style={{marginTop:"10px",marginBottom:"10px"}}>Shipping adddress</h6>
    <input type="text"  placeholder="first name" name="first_name" value={state.first_name} onChange={formHandler} style={{width:"40vw",borderStyle:"none",borderRadius:"5px",marginLeft:"5px"}}/>
    <input type="text" placeholder="last name" name="last_name" value={state.last_name} onChange={formHandler} style={{width:"40vw",borderStyle:"none",marginLeft:"10px",borderRadius:"5px"}}/>
    <input type="text" placeholder="address" name="address" value={state.address} onChange={formHandler} style={{marginTop:"10px",width:"84vw",borderStyle:"none",borderRadius:"5px",marginLeft:"5px"}}/><br/>
    <input  type="text" placeholder="city" name="city" value={state.city} onChange={formHandler} style={{marginTop:"10px",width:"30vw",borderStyle:"none",borderRadius:"5px",marginLeft:"5px"}}/>
    <input type="text" placeholder="phone number" name="phoneNumber" value={state.phoneNumber} onChange={formHandler} style={{marginLeft:"10px",borderRadius:"5px",borderStyle:"none"}}/><br/>
    <div style={{display:"flex",justifyContent:"left",marginTop:"10px"}}>
    <input type="checkbox" name="checkBox" value = "true" onChange={formHandler} style={{width:"9px",height:"9px"}}/>
    <span style={{fontSize:".6em",marginTop:".5px"}}>text me with news and offers</span>
    </div>
   <div style={{display:"flex",justifyContent:"center"}}>

   <button type="button" style={{marginTop:"10px",backgroundColor:"orange",borderStyle:"none",cursor:"pointer",borderRadius:"5px",textAlign:"center"}} onClick={shippingData}>submit</button>

   </div>
    
    </form>
    
    </div>
    </>
)


}