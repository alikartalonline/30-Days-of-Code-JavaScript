

// *************  Day 0: Hello, World.  ************* 

function processData(inputString) {
    // This line of code prints the first line of output
    console.log("Hello, World.");
    
    // Write the second line of output that prints the contents of 'inputString' here.
}



// *************  Day 1: Data Types  ************* 

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    
    // Declare second integer, double, ad String variables.
        let secondInteger;
        let secondDouble;
        let secondString;
        
    // Read and save an integer, double, and String to your variables.
    // The parseFloat() method parses a value as a string and returns the first number.
    secondInteger = parseFloat( readLine() );
    secondDouble = parseFloat( readLine() );
    secondString = readLine();

    // Print the sum of both integer variables on a new line.
     console.log(Number(i + secondInteger))
     
    // Print the sum of the double variables on a new line.
    // console.log(Number(d + secondDouble)) --> Text case 1 is okey but 0 is not okey.
    // The toFixed() method formats a number using fixed-point notation.
    secondDouble = (Number(d + secondDouble)).toFixed(1)
    console.log(secondDouble)
     
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + secondString);
 
}








