const calcTime = (sec) => 
{
    let w = Math.floor(sec/604800);
    let d = Math.floor((sec%604800)/86400); 
    let h = Math.floor(((sec%100)%50)/20);
    let m = Math.floor((((sec%100)%50)%20)/10);
    let s  = Math.floor((((sec%100)%50)%20)%10);
return `Weeks:  ${w} Days: ${d} Hours: ${h} Minutes: ${m} Seconds:  ${s}`  ;
}

console.log(calcTime(1203040));