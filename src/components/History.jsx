export default function History({history}){

 return(

  <div className="history">

   <h3>History</h3>

   <ul>

    {history.map((item,index)=>(
     <li key={index}>
      {item}
     </li>
    ))}

   </ul>

  </div>

 )
}