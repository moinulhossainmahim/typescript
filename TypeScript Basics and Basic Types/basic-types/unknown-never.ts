// unknown
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Moinul";
if (typeof userInput === "string") {
  userName = userInput;
}

// never
function printError(message: string, code: number): never {
  throw { message, code };
}

printError("Something went wrong!", 5000);
