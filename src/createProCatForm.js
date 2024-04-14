export function CreateProdForm(){
    const[formInfo,setformInfo] = 
    useState({prodCategoryId:"",prodCategory:"",prodId:"",prodTitle:"",prodQuantity:"",rateProd:"",totalRate:"",cutPrice:"",salePrice:"",offer:""})
    const[formFile,setformFile] = useState("")

    function inputHandler(e){
       setformInfo({
        ...formInfo,
        [e.target.name]:e.target.value
    })

    }
    function prodPicture(e){
           setformFile(
            e.target.files[0]
            )

    }
     async  function submit(){


       }
 if(rendProCate==true){
    return(
   <form>
<label>Enter product CategoryID:</label>    
<input value={formInfo.prodCategoryId} type="text"  name='prodCategoryId' onChange={inputHandler}/><br/>
<label>Enter Product Category Name:</label>
<input value={formInfo.prodCategory} type="text" name='prodCategory' onChange={inputHandler}/><br/>
<label>Enter Product ID:</label>
<input value={formInfo.prodId} type="text" name='prodId' onChange={inputHandler}/><br/>
<label>Enter Product Title:</label>
<input value={formInfo.prodTitle} type="text" name='prodTitle' onChange={inputHandler}/><br/>
<label>Enter Product Quantity:</label>
<input value={formInfo.prodQuantity} type="text" name='prodQuantity' onChange={inputHandler}/> <br/>
<label>Rate Product:</label>
<input value={formInfo.rateProd} type="text" name='rateProd' onChange={inputHandler}/><br/>
<label>Total Number Of Rate:</label>
<input value={formInfo.totalRate} type="text" name='totalRate' onChange={inputHandler}/><br/>
<label>Enter Cut Price:</label>
<input value={formInfo.cutPrice} type="text" name='cutPrice' onChange={inputHandler}/><br/>
<label>Enter Sale Price:</label>
<input value={formInfo.salePrice} type="text" name='salePrice' onChange={inputHandler}/><br/>
<label>Enter offer:</label>
<input value={formInfo.offer} type="text" name='offer' onChange={inputHandler}/> <br/>
<label>Enter Product Picture:</label>
<input  type="file" name="prodPicture" onChange={prodPicture}/>
<input type="submit" onClick={submit}/>
</form>


    )


    }
}