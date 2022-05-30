// Capitalize


(() => console.log("JS Connected"))();

const capFirstletter = (string) => 
{
       let firstletter = string[0].toUpperCase();
       console.log(firstletter + string.slice(1));
    }
    capFirstletter("i am a web developer");