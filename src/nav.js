import { useState } from "react";
import {FiSearch} from "react-icons/fi";
import { Outlet, Link } from "react-router-dom";
export function ListItems({type,isForm}){
    const [color,setColor]=useState("");
    const style ={
        display:"block",
        padding:"14px 16px",
        fontSize:"17px",
        color:color,
            

    }

if(isForm){
    
    let InType = type.inType;
    let ButtonType = type.buttonType;
    
    return(<>
<li id="liForm" style={{float:"right"}}><div>
<form style={{display:"block",paddingRight:"50px",paddingTop:"14px"}}>
    <input type={InType} style={{padding:"4px 10px",marginBottom:"2px"}}></input>
    <button type={ButtonType} style={{padding:"5px",backgroundColor:"#9966ff",border:"none"}}><FiSearch/></button>
</form>
</div>
</li>
</>
    )
}
    return(
   <li  id="liLi" style={{float:"left"}} >
  <a style={style} onMouseEnter={()=>setColor("#e600e6")} onMouseLeave={()=>setColor(" ")}>
  {type}
   </a>
    
   </li>

    )

}

export function ListVertical({type,styleA}){
   

return(
<a style={styleA}>{type}</a>
)

}