import Plot from "react-plotly.js";

export default function GraphPanel(){

 const x = [];
 const y = [];

 for(let i=-10;i<=10;i++){
   x.push(i)
   y.push(Math.sin(i))
 }

 return (
   <Plot
     data={[
       {
         x: x,
         y: y,
         type: "scatter"
       }
     ]}
    layout={{ width:500,height:400,title:"Gráfico" }}
   />
 )
}