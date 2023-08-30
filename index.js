import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberone",
        message: "Kindly enter your first no:"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Kindly enter your Second no:"
    },
    {
        type: "list",
        name: "Operator",
        choices: ["*", "+", "-", "/"],
        message: "Select Operator:",
    },
]);
const { numberone, numberTwo, Operator } = answers;
if (numberone && numberTwo && Operator) {
    let result = 0;
    if (Operator === "+") {
        result = numberone + numberTwo;
    }
    else if (Operator === "-") {
        result = numberone - numberTwo;
    }
    if (Operator === "/") {
        result = numberone / numberTwo;
    }
    if (Operator === "*") {
        result = numberone * numberTwo;
    }
    console.log("Your Result Is :", result);
}
else {
    console.log("Kindly enter valid input");
}
