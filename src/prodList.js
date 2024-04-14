import {ProductImage} from './image.js';
import { Ratings } from './rating.js';
import { Title } from './title.js';
import {CutSalePrice} from './cutAndoriginalprice.js'
import {AddtoCart} from './addToprice.js'
export function ProductListing() {
      

         
     let productItems = (
                           <div style="width:200px;margin:2px;overflow:hidden;border-style:solid;">
                              <div style="margin:5px;">
                             <ProductImage 
                                   offer=""
                                   imageUrl=""
                             />
                             <Title
                                 title=""
                             />
                             <Ratings
                                  star=""
                                  totalVoat=""
                             />

                             <CutSalePrice
                                   cutprice=""
                                   saleprice=""
                             
                             
                             />
                             <AddtoCart
                                   addCartbtn=""
                             
                             />

                              </div>
                          
                           </div>)

                            
   


    return (
        <>
        {/*productItem container box */}
            <div>
                {/*idivisualItem outer box*/}
                <div>
                    {/*inner box*/}
                    <div>
                       

                    </div>

                </div>

            </div>

        </>

    )

}