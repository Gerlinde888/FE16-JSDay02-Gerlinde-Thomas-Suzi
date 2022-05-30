function time(minutes){
    let hours= Math.trunc(minutes/60);
    let min= Math.round(((minutes/60) - hours)*60);
    return ""+minutes+" minutes = "+hours+" hour(s) and "+min+" minute(s).";
}
console.log(time(200));