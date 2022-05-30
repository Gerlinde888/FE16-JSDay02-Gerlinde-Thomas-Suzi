var year=new Date().getFullYear();

// var noC = window.prompt("Number of children: ");

// var pn =window.prompt("Your partner's name: ");

// var gl =window.prompt("Your geographic location: ");

// var jt =window.prompt("Your job title: ");

function crystalGazer(children, partner, location, job){
    return prediction="You will be a "+job+" in "+location+" and married to "+partner+" with "+children+"."
}

//const crystalGazer(children, partner, location, job) => return prediction="You will be a "+job+" in "+location+" and married to "+partner+" with "+children+".";


// alert(crystalGazer(noC, pn, gl, jt)); 

function ageCalculator(birth_year, current_year){
    let early=current_year - birth_year;
    let late=(current_year - birth_year) -1;
    return console.log("You are either "+early+" or "+late+"");
    
}
ageCalculator(1860, 2022);

function newageCalculator(birth_year){
    let early=year - birth_year;
    let late=(year - birth_year) -1;
    return console.log("You are either "+early+" or "+late+"");
    
}
newageCalculator(1870);

function converter(degrees){
    return radians=degrees * (3.141592654/180)
}

console.log(converter(90));

//console.log outside function
// function boxCalc(width, height, depth){
//     let area=width * height;
//     let volume=width * height * depth;
    
//     let result = "The are of the box is: " + area + "\n";
//     let result2 = "The volume of the box is: "+volume+"";
//     return result + result2;
// }

// console.log(boxCalc(5, 5, 5));

//console.log inside function
function boxCalc(width, height, depth){
    let area=width * height;
    let volume=width * height * depth;
    
    return console.log("The are of the box is: " + area + "\nThe volume of the box is: "+volume+"");
}

boxCalc(5, 5, 5);




