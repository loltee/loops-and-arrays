
// index       0  1  2  3  4   5   6   7
let input = [2, 4, 6, 8, 11, 20, 15, 22] 
const result = []

// // loop over each element 
for (let i = 0; i < input.length; i++) {
  //console.log(`${input[i]} % 2 is  ${input[i]%2} `)
   // evaluate each element => is this odd?
   if (input[i] % 2 === 1) {
   // once you have the odd element, add it to your answer  
    result.push(input[i])
   } else {
     // if it's even, don't even worry about it. 
     
    continue;
   }
}
input = "ukelele";
let consonants = [];
let vowels = [];
// if you want to use a for...of loop
for (let letter of input) {
    if (["a", "e", "i", "o", "u"].includes(letter)) {
        vowels.push(letter);
    } else {
        consonants.push(letter);
    }
}
for (let i = 0; i < input.length; i++) {
    if (["a", "e", "i", "o", "u"].includes(input[i])) {
        vowels.push(input[i]);
    } else {
        consonants.push(input[i]);
    }
}
// console.log(${input} has ${consonants.length} consonants and ${vowels.length} vowels);

input = [1,-1,2,-3,5,-8,13]
let solution = []
for(let i = input.length -1; i >= 0; i--){
solution.push(input[i])
    console.log(solution)
}
// wanting to print out the reverse as a array; the index is always one less then the length of the array;


// Print fizz for multiples of 3
// Print buzz for multiples of 5
// Print fizzbuzz for both multiples of 3 and 5
//(`${input[i]} % 2 is  ${input[i]%2} `)
for (let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0)
    {
        console.log("FizzBuzz");
    }
    else if(i % 5 === 0)
   {
    console.log("Buzz");
    }
    else if (i % 3 === 0)
    {
        console.log("Fizz");
    }
    else
    {
        console.log(i);
    }


}