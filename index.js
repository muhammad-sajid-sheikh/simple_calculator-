#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number",
        type: "Number",
        name: "firstNumber" },
    { message: "Enter Second Number",
        type: "Number",
        name: "secondNumber" },
    { message: "select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
console.log(answer);
//conditional statement
if (answer.operator === "Addition") {
    console.log(JSON.parse(answer.firstNumber) + JSON.parse(answer.secondNumber));
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select valid operator");
}
