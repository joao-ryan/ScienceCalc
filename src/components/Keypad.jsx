export default function Keypad({
 onNumber,
 onEqual,
 onClear
}){

 const buttons = [
  "sin(","cos(","tan(","sqrt(",
  "7","8","9","/",
  "4","5","6","*",
  "1","2","3","-",
  "0",".","+","=",
  "(" , ")" , "^" , "C"
 ]

 function handleClick(btn){

  if(btn === "=") return onEqual()
  if(btn === "C") return onClear()

  onNumber(btn)
 }

 return(

  <div className="keypad">

   {buttons.map(btn => (

    <button
     key={btn}
     className="calc-btn"
     onClick={()=>handleClick(btn)}
    >
     {btn}
    </button>

   ))}

  </div>

 )
}