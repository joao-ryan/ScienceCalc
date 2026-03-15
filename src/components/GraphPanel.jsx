import Plot from "react-plotly.js"

export default function GraphPanel(){

 const x=[]
 const y=[]

 for(let i=-10;i<=10;i++){
  x.push(i)
  y.push(Math.sin(i))
 }

 return(

  <div className="graph">

   <h2>Function Graph</h2>

   <Plot
    data={[
     {
      x,
      y,
      type:"scatter",
      mode:"lines"
     }
    ]}
    layout={{
     width:500,
     height:400,
     title:"sin(x)"
    }}
   />

  </div>

 )
}