var userInput;
var userName;
userInput = 5;
userInput = "Moinul";
if (typeof userInput === "string") {
    userName = userInput;
}
function printError(message, code) {
    throw { message: message, code: code };
}
printError("Something went wrong!", 5000);
