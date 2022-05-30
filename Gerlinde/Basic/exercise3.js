const ageCalculator3 = (birth_year) => 
{
    let now = new Date();
    let current_year = (now.getFullYear());
    result1 = current_year - birth_year;
    result2 = result1 - 1;
return `You are either ${result1} or ${result2}`;}

console.log(ageCalculator3(1964));