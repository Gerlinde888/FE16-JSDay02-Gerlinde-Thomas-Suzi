// Average Grade


(() => console.log("JS Connected"))();

const averageGrade = (math, physics, english) => 
{
        let sum = math + physics + english;
        let average = (sum) / 3;
        document.write (`Sum: ${sum} <BR>`);
        document.write (`Average: ${average}`);
        console.log(`Sum: ${sum} \n`);
        console.log(`Average: ${average} \n`);
    }
    averageGrade (3, 4, 5);