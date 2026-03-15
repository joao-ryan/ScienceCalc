import { useState } from "react"
import { celsiusToFahrenheit } from "../engine/unitConverter"

export default function UnitConverter(){

 const [value,setValue] = useState("")
 const [result,setResult] = useState("")

 function convert(){

  const r = celsiusToFahrenheit(Number(value))

  setResult(r)
 }

 return(

  <div className="converter">

   <h3>Temperature Converter</h3>

   <input
    type="number"
    placeholder="Celsius"
    value={value}
    onChange={e=>setValue(e.target.value)}
   />

   <button onClick={convert}>
    Convert
   </button>

   {result && (
    <p>{result} °F</p>
   )}

  </div>

 )
}