var string = "i am a web developer";

let message = x => x.charAt(0).toUpperCase() + x.slice(1);

console.log(message(string));

function grades(math, physics, english){
    return "Sum: "+(math+physics+english)+"\nAverage: "+((math+physics+english)/3)+""
}

console.log(grades(3, 4, 5));

