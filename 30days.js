

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


// *************  Day 2: Operators  ************* 

/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here

    let tip = ((tip_percent / 100) * meal_cost)
    let tax = ((tax_percent / 100) * meal_cost)
    let total_cost = (meal_cost + tip + tax)
    console.log(Math.round(total_cost))

}

function main() {
    const meal_cost = parseFloat(readLine().trim());
    const tip_percent = parseInt(readLine().trim(), 10);
    const tax_percent = parseInt(readLine().trim(), 10);
    solve(meal_cost, tip_percent, tax_percent);
}



// *************  Day 3: Intro to Conditional Statements  ************* 


function main() {
    const N = parseInt(readLine().trim(), 10);
 /*
  function oddoreven(str) {
 
  if (str % 2 == 0){
    console.log("it is even")
  } else if (str % 2 != 0)
    console.log("it is odd")
  }  
  oddoreven(2); // it is even
  oddoreven(3); // it is odd
*/
  
    if (N % 2 != 0) {
        console.log("Weird")
    } 
    else if (N % 2 == 0 && (N >= 2 && N <= 5)) {
        console.log("Not Weird") 
    }
    else if (N % 2 == 0 && (N >= 6 && N <= 20)) {
        console.log("Weird") 
    }
    else if (N % 2 == 0 && (N > 20)) {
        console.log("Not Weird") 
    }
      
    
}









