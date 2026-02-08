function isleapyear (years){
if (years % 4 === 0){
   return true
}
else{
 return false
}
}
const islipi = isleapyear(2026)
console.log(islipi)
function isleapyear1 (years){
    if ( years % 100!== 0 &&  years% 4 === 0){
return true
    }
   else if (years % 100 === 0 && years % 400 === 0){
        return true
    }
    else{
        return false
    }
}
const lipi1 = isleapyear1(1990)
const lipi2 = isleapyear1(2100)
const lipi3 = isleapyear1(2400)
console.log(lipi1,lipi2,lipi3)