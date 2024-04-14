import { useState } from "react"

export function Form(props){
   
    

  let value1 = props.value1
  let formInfo = props.value2
  let inputHandler = props.onClick1
  let prodPicture = props.onClick2
  let submit = props.onClick3
  let itemInfo = props.value3
  let itemHandler = props.onClick5
  let itemPicture = props.onClick6
  let itemSubmit = props.onClick7
  let upCatHandler = props.onClick8
  let updateCat    = props.value4
  let upCatSubmit = props.onClick9
  let updateItem = props.value5
  let updateItemHandler = props.onClick10
  let updateItemPic = props.onClick11
  let upItemSubmit = props.onClick12
  let deleteCat = props.value6
  let DeletCatHandler = props.onClick13
  let DeleteCatSubmit = props.onClick14
  let DeleteItemHandler = props.onClick15
  let deleteItem  = props.value7
  let DeleteItemSubmit = props.onClick16
  let responseShow = props.responseShow
  let error = props.error
  let updateCoupon = props.value8
  let couponHandler = props.onClick17
  let couponSubmit = props.onClick18
if(value1 === "Create Category"){
return( 
<form>
<>{{error}&&(<p>{responseShow}</p>)}</>    
<label>Enter product CategoryID:</label>    
<input value={formInfo.prodCategoryId} type="text"  name='prodCategoryId' onChange={inputHandler}/><br/>
<label>Enter Product Category Name:</label>
<input value={formInfo.prodCategory} type="text" name='prodCategory' onChange={inputHandler}/><br/>
<label>Enter Product ID:</label>
<input value={formInfo.prodId} type="text" name='prodId' onChange={inputHandler}/><br/>
<label>Enter Product Title:</label>
<input value={formInfo.prodTitle} type="text" name='prodTitle' onChange={inputHandler}/><br/>
<label>Enter Product Quantity:</label>
<input value={formInfo.prodQuantity} type="number" name='prodQuantity' onChange={inputHandler}/> <br/>
<label>Rate Product:</label>
<input value={formInfo.rateProd} type="text" name='rateProd' onChange={inputHandler}/><br/>
<label>Total Number Of Rate:</label>
<input value={formInfo.totalRate} type="text" name='totalRate' onChange={inputHandler}/><br/>
<label>Enter Cut Price:</label>
<input value={formInfo.cutPrice} type="number" name='cutPrice' onChange={inputHandler}/><br/>
<label>Enter Sale Price:</label>
<input value={formInfo.salePrice} type="number" name='salePrice' onChange={inputHandler}/><br/>
<label>Enter offer:</label>
<input value={formInfo.offer} type="number" name='offer' onChange={inputHandler}/> <br/>
<label>Enter Product Picture:</label>
<input  type="file" name="prodPicture" onChange={prodPicture}/><br/>
<input type="submit" onClick={submit}/>
</form>
)

}
if(value1==="Create Item"){
return(
<form>
<label>Enter product CategoryID:</label>    
<input value={itemInfo.prodCategoryId} type="text"  name='prodCategoryId' onChange={itemHandler}/><br/>
<label>Enter Product ID:</label>
<input value={itemInfo.prodId} type="text" name='prodId' onChange={itemHandler}/><br/>
<label>Enter Product Title:</label>
<input value={itemInfo.prodTitle} type="text" name='prodTitle' onChange={itemHandler}/><br/>
<label>Enter Product Quantity:</label>
<input value={itemInfo.prodQuantity} type="text" name='prodQuantity' onChange={itemHandler}/> <br/>
<label>Rate Product:</label>
<input value={itemInfo.rateProd} type="text" name='rateProd' onChange={itemHandler}/><br/>
<label>Total Number Of Rate:</label>
<input value={itemInfo.totalRate} type="text" name='totalRate' onChange={itemHandler}/><br/>
<label>Enter Cut Price:</label>
<input value={itemInfo.cutPrice} type="number" name='cutPrice' onChange={itemHandler}/><br/>
<label>Enter Sale Price:</label>
<input value={itemInfo.salePrice} type="number" name='salePrice' onChange={itemHandler}/><br/>
<label>Enter offer:</label>
<input value={itemInfo.offer} type="number" name='offer' onChange={itemHandler}/> <br/>
<label>Enter Product Picture:</label>
<input  type="file" name="prodPicture" onChange={itemPicture}/><br/>
<input type="submit" onClick={itemSubmit}/>
</form>

)
}
if(value1==="Update Category"){
return(
    <form>
<label>Enter product CategoryID:</label>    
<input value={updateCat.prodCategoryId} type="text"  name='prodCategoryId' onChange={upCatHandler}/><br/>
<label>Enter Product Category Name:</label>
<input value={updateCat.prodCategory} type="text" name='prodCategory' onChange={upCatHandler}/><br/>
<input type="submit" onClick={upCatSubmit}/>
   </form>
)

}
if(value1==="Update Item"){
return(
<form>
<label>Enter product CategoryID:</label>    
<input value={updateItem.prodCategoryId} type="text"  name='prodCategoryId' onChange={updateItemHandler}/><br/>
<label>Enter Product Category Name:</label>
<input value={updateItem.prodCategory} type="text" name='prodCategory' onChange={updateItemHandler}/><br/>
<label>Enter Product ID:</label>
<input value={updateItem.prodId} type="text" name='prodId' onChange={updateItemHandler}/><br/>
<label>Enter Product Title:</label>
<input value={updateItem.prodTitle} type="text" name='prodTitle' onChange={updateItemHandler}/><br/>
<label>Enter Product Quantity:</label>
<input value={updateItem.prodQuantity} type="text" name='prodQuantity' onChange={updateItemHandler}/> <br/>
<label>Rate Product:</label>
<input value={updateItem.rateProd} type="text" name='rateProd' onChange={updateItemHandler}/><br/>
<label>Total Number Of Rate:</label>
<input value={updateItem.totalRate} type="text" name='totalRate' onChange={updateItemHandler}/><br/>
<label>Enter Cut Price:</label>
<input value={updateItem.cutPrice} type="number" name='cutPrice' onChange={updateItemHandler}/><br/>
<label>Enter Sale Price:</label>
<input value={updateItem.salePrice} type="number" name='salePrice' onChange={updateItemHandler}/><br/>
<label>Enter offer:</label>
<input value={updateItem.offer} type="number" name='offer' onChange={updateItemHandler}/> <br/>
<label>Enter Product Picture:</label>
<input  type="file" name="prodPicture" onChange={updateItemPic}/>
<input type="submit" onClick={upItemSubmit}/>

</form>
)

}
if(value1==="Delete Category"){

return(
<form>
<label>Enter  CategoryID:</label>    
<input value={deleteCat.prodCategoryId} type="text"  name='prodCategoryId' onChange={DeletCatHandler}/><br/>
<input type="submit" onClick={DeleteCatSubmit}/>
</form>
)
}
if(value1==="Delete Item"){
    return(
        <form>
        <label>Enter product ItemID:</label>    
        <input value={deleteItem.prodId} type="text"  name='prodId' onChange={DeleteItemHandler}/><br/>
        <input type="submit" onClick={DeleteItemSubmit}/>
        </form>  
    )
}

if(value1==="Coupon Creation"){
   return(
       <form>
    <label>Enter coupon:</label> <br/>   
    <input value={updateCoupon.coupon} type="text" name="coupon" onChange={couponHandler} /><br/>
    <label>Enter discount:</label><br/>
    <input value={updateCoupon.discount} type="text" name="discount" onChange={couponHandler}/><br/>
    <input type="submit" onClick={couponSubmit}/>
       </form>
       )
 }

}