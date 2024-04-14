import { Button1 } from "./button1.js"
import { Button2 } from "./button2.js"
import { Button3 } from "./button3.js"
import { Button4 } from "./button4.js"
import { Button5 } from "./button5.js"
import { Button6 } from "./button6.js"
import { Button7 }  from "./button7.js"
import { useEffect, useState,useRef } from "react"
import {Cancel} from "./cancel.js"
import {Form} from './formInput.js'

export function Home() {

    const[formInfo,setformInfo] = 
    useState({prodCategoryId:"",prodCategory:"",prodId:"",prodTitle:"",prodQuantity:"",rateProd:"",totalRate:"",cutPrice:"",salePrice:"",offer:""})
    const[formFile,setformFile] = useState("")

    const[itemInfo,setItemInfo] = 
    useState({prodCategoryId:"",prodId:"",prodTitle:"",prodQuantity:"",rateProd:"",totalRate:"",cutPrice:"",salePrice:"",offer:""})
    const[itemFile,setItemFile] = useState("")
    
    const[updateCat,setUpdateCat] = useState({prodCategoryId:"",prodCategory:""})
    
    const[updateItem,setUpdateItem] = 
    useState({prodCategoryId:"",prodId:"",prodTitle:"",prodQuantity:"",rateProd:"",totalRate:"",cutPrice:"",salePrice:"",offer:""})
    const[updateitemFile,setUpdateItemFile] = useState("")
    
    const[deleteCat,setDeleteCat]= useState({prodCategoryId:""})

    const[deleteItem,setDeleteItem]=useState({prodId:""})

    const [formShow,setFormShow]= useState(false)
    const [inputValue,setInputValue]=useState('')

    const [responseShow,setResponseShow] = useState("")
     
    const [error,setError] = useState(false);
     
    const [useEffe,setUseEffe] = useState(false)

    const [couponCode,setCouponCode] = useState({coupon:"",discount:""})

   let style1 = {position:'relative'} 
   let style2 = {position:'absolute',top:'50%',left:'50%', transform:'translate(-50%,50%)',backgroundColor:'#ff6600',padding:'10px',width:'50vw'}
   
   const submitFile = useRef(formFile)
   const submitInfo = useRef(formInfo)

  useEffect(()=>{
    if(useEffe){
    const formData = new FormData();
    
    const json = JSON.stringify(formInfo)
    formData.append("prodCatFile",formFile)
    formData.append("prodCatInfo",json)
    fetch("http://localhost:8080/dataServer/categoryCreation", {
      method: "POST",
      mode:"cors",
      body: formData,
      
    }).then((response)=>{

      console.log(response.status)
      let text = response.text()
      return text
    }).then((text)=>alert(text)).catch((error)=>{console.error(error)}).finally(
      ()=>{

        setUseEffe(false)
      }
    )
   
    }

 },[useEffe])


  function hideForm(){
    
     setFormShow(false)
  }  
  function inputHandler(e){
    
    setformInfo({
     ...formInfo,
     [e.target.name]:e.target.value
    })

 }

 function itemHandler(e){
  setItemInfo({
   ...itemInfo,
   [e.target.name]:e.target.value

})

 }

 function upCatHandler(e){
setUpdateCat(
  {
    ...updateCat,
    [e.target.name]:e.target.value
  }
)
}

function updateItemHandler(e){
  setUpdateItem(
   {
      ...updateItem,
      [e.target.name]:e.target.value
    }
  )
}

function updateItemPic(e){
  setUpdateItemFile(
   e.target.files[0]
  )

}
 
 function prodPicture(e){
        setformFile(
         e.target.files[0]
         )

 }

 function itemPicture(e){
  setItemFile(
     e.target.files[0]
  )

 }
function DeleteItemHandler(e){

setDeleteItem(
{
...deleteItem,
[e.target.name]:e.target.value

}

)

}


 function DeletCatHandler(e){
  setDeleteCat({
     ...deleteCat,
     [e.target.name]:e.target.value 
  }
  )  

 }


 async function DeleteCatSubmit(e){
    e.preventDefault()
    const formData = new FormData();
   
    const json = JSON.stringify(deleteCat)
    
   
    formData.append("deleteCat",json)
    try {
       const response = await fetch("http://localhost:8080/deleteCatSubmit", {
         method: "POST",
         body: formData,
         
       });
      
       const result = await response.json();
       console.log("Success:", result);
     } catch (error) {
       console.error("Error:", error);
     }
   
}


async function DeleteItemSubmit(e){
  e.preventDefault()
  const formData = new FormData();
 
  const json = JSON.stringify(deleteItem)
  
 
  formData.append("deleteItem",json)
  try {
     const response = await fetch("http://localhost:8080/deleteItemSubmit", {
       method: "POST",
       body: formData,
       
     });
    
     const result = await response.json();
     console.log("Success:", result);
   } catch (error) {
     console.error("Error:", error);
   }


}

async function upItemSubmit(e){
 
 
  e.preventDefault();
  const formData = new FormData();
  
  const json = JSON.stringify(updateItem)
  
 
  formData.append("itemPicFile", updateitemFile)
  formData.append("itemInfo",json)
  try {
     const response = await fetch("http://localhost:8080/upItemSubmit", {
       method: "POST",
       body: formData,
       
     });
    
     const result = await response.json();
     console.log("Success:", result);
   } catch (error) {
     console.error("Error:", error);
   }
  
}

 async function upCatSubmit(e){
 
  e.preventDefault();
  const formData = new FormData();
  
  const json = JSON.stringify(updateCat)
  
  formData.append("itemInfo",json)
  try {
     const response = await fetch("http://localhost:8080/updateCategory", {
       method: "POST",
       body: formData,
       
     });
     const result = await response.json();
     console.log("Success:", result);
   } catch (error) {
     console.error("Error:", error);
   }

 }


 async function itemSubmit(e){

  e.preventDefault();
  const formData = new FormData();
  const json = JSON.stringify(itemInfo)
  
  formData.append("itemInfo",json)
  formData.append("itemPicFile",itemFile)
  try {
     const response = await fetch("http://localhost:8080/itemProdSubmit", {
       method: "POST",
       body: formData,
       
     });
    
     const result = await response.json();
     console.log("Success:", result);
   } catch (error) {
     console.error("Error:", error);
   }
   


 }

 


  async  function submit(e){
   
    e.preventDefault();
    setUseEffe(true)

    {/*
    const formData = new FormData();
    
    const json = JSON.stringify(formInfo)
    

   
   
     form data multipart 
    formData.append("prodCatFile",formFile)
    formData.append("prodCatInfo",json)
    try{
       const response = await fetch("http://localhost:8080/categoryCreation", {
         method: "POST",
         body: formData,
         
       });
      
       const result = await response.json();
       setUseEffe(true)
       return result
       
     {/*
        setResponseShow(result)
        setError(true)
        setFormShow(true)
      
       
       console.log("Success:", result);
    }catch(error){
      setUseEffe(true)
      return error
      console.log("Error",error)
    }
    */}
    
    }

async function couponSubmit(e){
  e.preventDefault()
  let formData = new FormData();
  formData.append("couponCode",couponCode.coupon);
  formData.append("couponDiscount",couponCode.discount)
  let response = await fetch("http://localhost:8080/dataServer/couponCode",{
   method:"POST",
   mode:"cors",
   headers:{
    "Accept":"application/json",
    "Content-Type": "application/json",
    
  },
   body:JSON.stringify({"couponCode":couponCode.coupon,"couponDiscount":couponCode.discount}),
  })
  
  let data = await response.text()
  alert(data)
   }
   
 function couponHandler(e){

  setCouponCode({
       ...couponCode,
       [e.target.name]:e.target.value  

  })
 }  

  function formSelector(e){
     
      setInputValue(e.target.value)
      setFormShow(true)
     
     }

    return (
       <>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
               
                    <Button1 type="createProdCategory" value="Create Category" onClick={formSelector} />
                
                    <Button2 type="createProdItem" value="Create Item" onClick={formSelector}/>
                
                    <Button3 type="updateProdCategory" value="Update Category" onClick={formSelector}/>
                
                    <Button4 type="updateProdItem" value="Update Item" onClick={formSelector}/>
               
                    <Button5 type="deleteProdCategory" value="Delete Category" onClick={formSelector}/>
               
                    <Button6 type="deleteProdItem"  value="Delete Item" onClick={formSelector}/>
                   
                    <Button7 type="CouponCreation" value="Coupon Creation" onClick={formSelector}/>
            </div>
            
<div style={style1}>

 {
formShow&&(
<div style={style2}>
<Cancel onClick={hideForm}/>  
<p>{responseShow}</p>
<Form value1 = {inputValue} value2 = {formInfo} onClick1={inputHandler} onClick2={prodPicture} onClick3={submit} onClick4={hideForm} 

value3 = {itemInfo}
onClick5={itemHandler}
onClick6={itemPicture}
onClick7={itemSubmit}
value4 = {updateCat}
onClick8={upCatHandler}
onClick9={upCatSubmit}
value5 = {updateItem}
onClick10 = {updateItemHandler}
onClick11 = {updateItemPic}
onClick12 = {upItemSubmit}
value6 = {deleteCat}
onClick13 = {DeletCatHandler}
onClick14 = {DeleteCatSubmit}
value7 = {deleteItem}
onClick15={DeleteItemHandler}
onClick16 ={ DeleteItemSubmit}
value8 = {couponCode}
onClick17 = {couponHandler}
onClick18 = {couponSubmit}
responseShow = {responseShow}
error = {error}
/>
</div>
)
}
</div>

        </>
    )

}