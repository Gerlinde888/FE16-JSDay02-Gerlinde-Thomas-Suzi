const degreesToRadiansConverter = (degrees) => 
{
    let pi = Math.PI;
    let radians = degrees *  pi / 180;
    
return `${degrees} Degrees are ${radians} Radians`;}

console.log(degreesToRadiansConverter(90));