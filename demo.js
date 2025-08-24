var prompt = require("prompt-sync")()
function guess(guessednumber)
{
    var randomnumbber = Math.floor(Math.random()*10)+1
    if(randomnumbber === guessednumber)
    {
        console.log("YOu guessed right")
    }


    else{
        console.log("NO you are wrong, Generated random number is" + randomnumbber)
    }
}
var guessednumber = prompt()
guess (guessednumber)