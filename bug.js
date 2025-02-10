function myFunction(a, b) {
  return a - b; 
}

console.log(myFunction(10, 5)); // Output: 5
console.log(myFunction(5, 10)); // Output: -5
console.log(myFunction(null, 5)); //Output:NaN
console.log(myFunction(5, null)); //Output:NaN
console.log(myFunction(null, null)); //Output:NaN