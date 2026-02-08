function oddsNumbers ( numbers){
    let bacekt = [];
  for (const number of numbers){
    if (number % 2===1){
       bacekt.push(number)
       
       
    }
  }
  console.log(bacekt)
  let sum = 0;
  for (const number of numbers){
   sum = sum + number
    
  }
  const count = bacekt.length
   
  console.log(sum,count)
  const avg = count / sum
  return avg;
}
const odd = [22,23,1,5,86]
const avg = oddsNumbers(odd)
console.log('odds number god',avg)