export function mean(arr){
 return arr.reduce((a,b)=>a+b,0)/arr.length
}

export function median(arr){
 const sorted = [...arr].sort((a,b)=>a-b)
 const mid = Math.floor(sorted.length/2)

 if(sorted.length % 2 === 0){
   return (sorted[mid-1]+sorted[mid])/2
 }

 return sorted[mid]
}