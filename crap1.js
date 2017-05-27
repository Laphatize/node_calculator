
// CHANGE THIS ONLY \\

var Number1 = 1   
var Number2 = 2 
var Operation = "/" // These operations include "+,/,-, and *"

// Addition \\
if (Operation == "+") {
   var Response =  (Number1 + Number2)
}

// Substraction \\ 
if (Operation == "-") {
   var Response =  (Number1 - Number2)
}

// Division \\
if (Operation == "/") {
    var Response = (Number1 / Number2)
}

// Multiply \\
if (Operation == "*") {
    var Response = (Number1 * Number2)
}

// Output \\ 
console.log("Number1 was" + " " + Number1 + ".")
console.log("Number2 was" + " " + Number2 + ".")
console.log("The operation was" + " " + Operation + ".")
console.log("The correct response would be" + " " + Response + ".")