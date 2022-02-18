

// *************  Day 0: Hello, World.  ************* 

function processData(inputString) {
    // This line of code prints the first line of output
    console.log("Hello, World.");
    
    // Write the second line of output that prints the contents of 'inputString' here.
    console.log(inputString);
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


// *************  Day 4: Class vs. Instance  ************* 

function Person(initialAge){

    // Add some more code to run some checks on initialAge
    if( initialAge < 0) {
        age = 0;
        console.log("Age is not valid, setting age to 0.");
    }
    else if ( initialAge > 0) {
        age = initialAge;
    }
    
  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console 
   if (age < 13) {
       console.log("You are young.")
   } 
   else if (age >= 13 && age < 18){
       console.log("You are a teenager.")
   } 
   else console.log("You are old.")
};
  
   this.yearPasses=function(){
          // Increment the age of the person in here
          age += 1;
   };
}




// *************  Day 5: Loops  ************* 

function main() {
    const n = parseInt(readLine().trim(), 10);

   for (let i = 1; i <= 10; i++){

        let result = n * i;
     // console.log(`${n} x ${i} =  ${result}`) --> Sorry, my bad :)
        console.log(`${n} x ${i} = ` + result)
    }
};



// *************  Day 6: Let's Review  ************* 

function processData(input) {
    //Enter your code here
    // input: "2\nHacker\nRank"

    let arr = input.split("\n") // arr  böyle gözükecek ["2", "Hacker", "Rank"]
    
    // Çift ve Tek dizilerimizin çıktısını almak için 'even' ve 'odd' oluşturdum
    let even = "";
    let odd = "";
    
// let i = 1'e ayarlanmıştır çünkü bu problem için “2” olan dizideki ilk girişe (0) erişmek istemiyoruz.
// Yalnızca "Hacker Rank" metni için çıktı istediler.
    for (let i = 1; i < arr.length; i++){
        for (let x = 0; x < arr[i].length; x++){
            // “Hacker” ve "Rank" karakterlerini sayarken, bunların çift mi yoksa tek mi olduğunu kontrol etmeliyiz ve ona göre de "even" ya da "odd"a ekleyeceğiz
            if ( x % 2 == 0){ 
            // Belirli dizi öğesinden bir seferde  bir harf ekliyoruz. 
               even += arr[i][x];
            // Örneğin, ilk çalıştırmada, "Hacker" -> arr[1][0] -> "H" ve  0 % 2 == 0 yani even.
            // 0-2-4 = H-c-r = even = Hcr
            } else odd += arr[i][x];
            // "Hacker" -> arr[1][1] -> "a" ve  1 % 2 == 1 yani odd.
            // 1-3-5 = a-k-r = odd = akr
        } 
        console.log(even + " " + odd);
        even = "";
        odd = "";
        
    }
    // yazım hataları ve sayılar arasında boğuştuktan
    // ve iki kahve içtikten sonra çözüldü!
    // biraz da sinirlendirdi bu problem beni, ayrıca sunuş da aynı şekilde...
} 





// *************  Day 7: Arrays  ************* 

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    
    // let translateThis = "iki tık tık, bir pık pık"
    let result =  arr.reverse().join(" ")
    console.log(result)
};















// *************  Day 9: Recursion 3  ************* 

/*
 * Complete the 'factorial' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function factorial(n) {
    // Write your code here
    if(n == 1) {
        return n;
    } else {
        return n * factorial(n - 1);
    }
};









