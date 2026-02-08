const biryani= ['babul','dabul', 'cabul', 'kabul', 'babul', 'cabul']
const number = [32,44,23,44,45,45,32]
function noduplicet (arry){
    let unique= []
for (const items of arry){
    if (unique.includes(items) ===false){
        unique.push(items)
    }
}
return unique
}
const dulicet = noduplicet(number)
console.log(dulicet)
