var inquirer = require("inquirer"); 
var word = require("./word");

function start() {
    inquirer.prompt([
    {
        type: "input",
        message: "Guess a letter!",
        name: "guess"
    }  
])
.then(function(inquirerResponse) {
    
    if (inquirerResponse.guess === "a") {
        console.log("True");
    } else {
        console.log("False");
    }
})
}

start();

