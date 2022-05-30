
var amount = 287;//window.prompt("How much money would you like? (we only accept integer values): ");

function ATM(input){
    //var.toPrecision(1-100)-fix
    input = Math.trunc(input);

    let N1 = Math.floor(input/100);
    let rest = (input/100) - N1;

    // return console.log(R1);
    rest = rest.toPrecision(5);

    let N2 = Math.trunc(rest/0.5);
    rest = (rest/0.5) - N2;
    
    rest = rest.toPrecision(5);
    // return console.log(R2);

    let N3 = Math.trunc(rest/0.4);
    rest = (rest/0.4) - N3;

    rest = rest.toPrecision(5);
    // return console.log(R3);

    let N4 = Math.trunc(rest/0.5);
    rest = (rest/0.5) - N4;

    rest = rest.toPrecision(5);
    // return console.log(R4);

    rest = (rest * 10);

    return console.log("You recieve "+N1+" * 100€, "+N2+" * 50€, "+N3+" * 20€ and "+N4+" * 10€ notes, unfortunately we can not give out "+ rest +" euros.");

}
function ATM(input) {
    // % = modulus operator-fix, it returns the remainder of a devision before the part that can not be devided into an integer value is being devided
    input = Math.trunc(input);
    let N1 = Math.trunc(input / 100);
    let rest = input % 100; //rest = 280/100 modulo => 80
    let N2 = Math.trunc(rest / 50);
    rest = rest % 50;
    let N3 = Math.trunc(rest / 20);
    rest = rest % 20;
    let N4 = Math.trunc(rest / 10);
    rest = rest % 10;
    console.log("You recieve " + N1 + " * 100€, " + N2 + " * 50€, " + N3 + " * 20€ and " + N4 + " * 10€ notes, unfortunately we can not give out " + rest + " euros.");
}

ATM(amount);