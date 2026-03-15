import { useState } from "react"
import { calculate } from "../engine/mathEngine"

export function useCalculator(){

 const [input,setInput] = useState("")
 const [history,setHistory] = useState([])

 function addValue(value){
  setInput(prev => prev + value)
 }

 function clear(){
  setInput("")
 }

 function evaluateExpression(){

  const result = calculate(input)

  setHistory(prev => [
   ...prev,
   `${input} = ${result}`
  ])

  setInput(String(result))
 }

 return{
  input,
  history,
  addValue,
  clear,
  evaluateExpression
 }
}