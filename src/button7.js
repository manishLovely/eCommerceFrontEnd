export function Button7({type, value,onClick}){

  return(
<div>
<button name={type} value={value} onClick={onClick}>
                {value}
            </button>

</div>

  )  
}