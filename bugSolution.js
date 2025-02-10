function myFunction(a, b) {
  const numA = a === null ? 0 : a;
  const numB = b === null ? 0 : b; 
  return numA - numB; 
}

console.log(myFunction(10, 5)); // Output: 5
console.log(myFunction(5, 10)); // Output: -5
console.log(myFunction(null, 5)); //Output: -5
console.log(myFunction(5, null)); //Output: 5
console.log(myFunction(null, null)); //Output:0