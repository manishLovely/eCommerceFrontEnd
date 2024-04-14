import { useState } from 'react';
import { FiX } from "react-icons/fi";
export function Button6({type,value,onClick}){

   


    return(
        <div>
    
       <button name={type} value={value} onClick={onClick} >
            {value}
        </button>
        
       </div>    

     )
    
    
    
    } 