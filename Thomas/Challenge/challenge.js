function ATM(input){

    let N1 = Math.trunc(input/100);
    let R1 = (input/100) - N1;

    let N2 = Math.trunc(R1/0.5);
    let R2 = (R1/0.5) - N2;

    let N3 = Math.trunc(R2/0.4);
    let R3 = (R2/0.4) - N3;

    let N4 = Math.trunc(R3/0.5);
    let R4 = (R3/0.5) - N4;

    let rest = Math.round(R4 * 10);

    return console.log("You recieve "+N1+" * 100€, "+N2+" * 50€, "+N3+" * 20€ and "+N4+" * 10€ notes, unfortunately we can not give out "+ rest +" euros.");

}

ATM(287);