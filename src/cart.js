import { IoMdCart } from "react-icons/io"
import { Searchsymble } from './searchBar.js';
import { useEffect, useState } from "react";
export function CartSearch(props){

let cartItemQuan = props.cartItemQuan;
let prodIdCookis = props.prodIdCookis;
let cartSliderTrue = props.cartSliderTrue;
let cartQuan = props.cartQuantity 
const [prodIdLength,setProdIdLength] = useState(0)



useEffect(()=>{
  let prodCookis =null;
  const cookieValue = document.cookie
  .split(";")
  .find((row) => row.startsWith("prodIds="))
  ?.split("=")[1];
   //let index1 = prodIdsArr.lastIndexOf("]") 
  // let  index2 = prodIdsArr.lastIndexOf("}")
  
  
   
   
 //document.cookie =`prodIds=${JSON.stringify(prodCookis)}`
  
 
 //setProdIdLength(prodIdsArr.length)
 
  console.log("coococococo----"+cookieValue)
  //console.log(index1)

 
},[prodIdCookis])
return(
<>
   <div style={{position:"absolute",right:"0px",borderStyle:"hidden",width:"60px",height:"25px"}}>
    <div style={{position:"absolute",top:"4px",left:"6px"}}>
    <Searchsymble />
    </div>
    <div style={{position:"absolute",top:"4px",right:"3px",borderStyle:"hidden",width:"30px",height:"23px"}}>
    <IoMdCart onClick={cartSliderTrue}/>
    <div style={{position:"absolute",margin:"0px",transform:"translate(0px,-2px)", backgroundColor:"#000000",top:"0px",right:"2px",width:"13px",height:"13px",borderRadius:"50%",padding:"0px"}}><span style={{position:"absolute",color:"#ffffff",fontSize:".6em",borderRadius:"2px",top:"-1px",right:"3px",}}>{cartQuan}</span></div>
    </div>
   
    </div>
   
</>
)

}