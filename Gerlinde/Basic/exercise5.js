const areaVolCalulator = (width,height,depth) => 
{
    let area = width * height;
    let volume = width * height * depth;

    
return `The area of the box is: ${area} \nThe volume of the box is: ${volume} `;}

console.log(areaVolCalulator (2,4,6));