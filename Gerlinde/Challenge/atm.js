
const ATM = (amount) => 
{
    let s_100 = Math.floor(amount/100);
    let s_50 = Math.floor((amount%100)/50); 
    let s_20 = Math.floor(((amount%100)%50)/20);
    let s_10 = Math.floor((((amount%100)%50)%20)/10);
    let rest  = Math.floor((((amount%100)%50)%20)%10);
return `hundred:  ${s_100} fifty: ${s_50} twenty: ${s_20} ten: ${s_20} rest:  ${rest}` ;
}

console.log(ATM(8888));

