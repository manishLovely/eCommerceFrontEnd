import { useEffect } from "react";
import { useState } from "react";


export function ProductItems(props){


let value1 = props.value;



let addToCart = props.addToCart;



useEffect(()=>{
    console.log("oooooo--------"+value1)
  //  let value = props.value;
  //  console.log("prodItem--------"+value[0].catRes.prodOffer)
 //let res=value.map((data)=>{ return data.catRes.prodKey})

// console.log(res)

},[])

    
  
   const prodItem = value1.map(response=>
   
    <div key={response.prodCategoryKey} >
      {/**proditem box */}
        <div style={{width:"200px",margin:"2px",overflow:"hidden",borderStyle:"solid"}} key={response.catRes.prodKey}>
          
            <div style={{margin:"5px"}}>
              
                <div style={{position:"relative"}}>
                    <img src={response.catRes.prodPicUrl} 
                        width="190px" height="150px" alt="image"/>
                    <div style={{position:"absolute",backgroundColor:"black",top:"0",right:"0",zIndex:"1"}}><span style={{color:"white"}}>{response.catRes.prodOffer}
                            </span></div>
                </div>
              
                <p style={{backgroundColor: "rgb(255, 196, 0)",marginTop:"2px",display:"block"}}>{response.catRes.ProdTitle}
                       </p>
             
                <span style={{display:"block",marginTop:"1px"}}>
                    <span style={{marginLeft:"8px",color:"orange"}}>★ ★ ★ ★ ★ </span><span>({response.catRes.prodTotalrate})</span> </span><br/>
              
                <span style={{display:"block",marginTop:"1px",marginLeft:"8px"}}>
                    <span style={{marginTop:"1px"}}><del>{response.catRes.prodCutPrice}</del></span><span style={{marginLeft:"10px"}}>{response.catRes.prodSalePrice}</span>
                </span><br/>
              
                <a style={{display:"block",backgroundColor:"bisque",textAlign:"center",padding:"10px",marginTop:"1px"}} value={response.catRes.prodId}  onClick = {addToCart}>ADD TO
                    CART</a>
             
                    
            </div>

        </div>

    </div>
  
   )
  
   
return (
    
    prodItem
    
    )
    
   

}