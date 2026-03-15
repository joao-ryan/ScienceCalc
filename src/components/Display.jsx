export default function Display({value}){

 return(
  <div className="display">

   <span className="display-value">
    {value || "0"}
   </span>

  </div>
 )
}