
import { useState } from "react";
import  axios from "axios";

export function Form(){
      const[fromInfo,setformInfo] = 
           useState({prodCategoryId:"",prodCategory:"",categoryProdQuan:"",prodId:"",prodTitle:"",prodQuantity:"",rateProd:"",totalRate:"",cutPrice:"",salePrice:"",offer:""}) 
      const[formFile,setformFile] = useState("")
 
  
  async function Formsubmit(e){
         e.preventDefault();
         const formData = new FormData();
         const formFileData = new FormData();
         const json = JSON.stringify(fromInfo)
         
        
         formFileData.append("prodPicFile", formFile)
         formData.append("prodInfo",json)
         try {
            const response = await fetch("http://localhost:8080/formData", {
              method: "POST",
              body: formData,
              
            });
           
            const result = await response.json();
            console.log("Success:", result);
          } catch (error) {
            console.error("Error:", error);
          }
          try{
              const fileReaponse = await fetch("http://localhost:8080/fileData",{
                  method:"POST",
                  body:formFileData,
                 

                   }

              )

              const fileResult = await fileReaponse.json();
              console.log("Success:",fileResult);
          }catch(error){
             console.error("Error:",error)

          }
        } 
         

  function inputHandler(e){
    setformInfo({
      ...fromInfo,
      [e.target.name]:e.target.value


    });

  }

  function fileHandler(e){

      setformFile(e.target.files[0])

}


    return(
     <>
     <form>
        {/* prodCategoryId*/}
      <label>Enter Product Category Id:</label>
      <input 
         
        type="number"   
        name="prodCategoryId"
        value={fromInfo.prodCategoryId}
        onChange={inputHandler}
      /><br/>
      {/* product category name*/}
      <label>Enter Product category name:</label>
      <input  
            name="prodCategory"
            type="text"
            value={fromInfo.prodCategory}
            onChange={inputHandler}
      
      /><br/>
      {/* number of products in particular category */}
      <label>Enter no of products in this category:</label>
      <input 
           name="categoryProdQuan"
           type="number"
            value={fromInfo.categoryProdQuan}
            onChange={inputHandler}    
      /><br/>
      {/* set product id*/}
      <label>Enter product Id: </label>
      <input  
            name="prodId"
            type="number"
            value={fromInfo.prodId}
            onChange={inputHandler}
      /><br/>
      {/* set product title */}
      <label>Enter product name:</label>
      <input
            name="prodTitle"
            type="text"
            value={fromInfo.prodTitle}
            onChange={inputHandler}
      
      /><br/>
      {/* set product quatity */}
      <label>Enter product quantity:</label>
      <input
             name="prodQuantity"
             type="number"
             value={fromInfo.prodQuantity}
             onChange ={inputHandler} 
      /><br/>
      {/* set product picture */}
      <label>Enter product picture:</label>
      <input 
             name="prodPicture"
             type="file"
             
             onChange={fileHandler}
      /><br/>
      {/* set product rate*/}
      <label>rate your product:</label>
      <input
           name="rateProd"
            type="number"
            value={fromInfo.rateProd}
            onChange={inputHandler}
      
      /><br/>
      {/*total people rated */}
     <label>Enter number of people rated:</label>
     <input
          name="totalRate"
          type="number"
          value={fromInfo.totalRate}
           onChange={inputHandler}
     /> <br/>
     {/*cut price */}
     <label>Enter cut price:</label>
     <input
           name="cutPrice"
           type="number"
           value={fromInfo.cutPrice}
           onChange={inputHandler}
     
     /><br/>
     {/*set sale price */}
     <label>Enter sale price:</label>
     <input
           name="salePrice"
           type="number"
           value={fromInfo.salePrice}
           onChange={inputHandler}
     
     /><br/>
     {/* set offer on project */}
     <label>Set offer on product:</label>
     <input
           name="offer"
           type="number"
           value={fromInfo.offer}
           onChange={inputHandler}
     
     /><br/>
     <button type="submit" onClick={Formsubmit}>Submit</button>
     </form>
</>     

    )


}