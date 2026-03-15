import Display from "./Display"
import Keypad from "./Keypad"
import History from "./History"

import { useCalculator } from "../hooks/useCalculator"

export default function Calculator(){

 const {
  input,
  history,
  addValue,
  clear,
  evaluateExpression
 } = useCalculator()

 return(

  <div className="calculator">

   <Display value={input}/>

   <Keypad
    onNumber={addValue}
    onEqual={evaluateExpression}
    onClear={clear}
   />

   <History history={history}/>

  </div>

 )
}