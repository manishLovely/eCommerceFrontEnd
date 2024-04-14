
import { FiX } from "react-icons/fi"
export function Cancel({onClick}){
    let hide = onClick
    
    return(
       <span style={{position:'absolute',right:'10px'}} onClick={hide}><FiX/></span>

    )
} 