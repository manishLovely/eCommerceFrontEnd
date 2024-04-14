import { MdCurrencyRupee } from "react-icons/md";

export function GrandTotal(props){

     let totalCartValue = props.totalCartValue1

    return(
        <div style={{position:"absolute",zIndex:"44"}}>
    
    <span>Grand Total:<MdCurrencyRupee style={{ transform: "translate(0,3px)" }} />{totalCartValue}</span>

        </div>
        
    )
}