import { Link, Outlet } from "react-router-dom";

export function About(){

   

    return(
       <>
       
       <div style={{zIndex:"5",backgroundColor:"#ff99cc",width:"100%",height:"100%",position:"absolute",top:"25px"}}>
        
        <p>About page</p>
        <Outlet/>
       </div>
       </>

    )
}