# JavaScript Subtraction Function Bug

This repository demonstrates a common JavaScript bug related to the handling of null values in mathematical operations.

The `myFunction` subtracts two numbers. However, if either input is `null`, the function returns `NaN` (Not a Number) instead of providing a more meaningful result or error handling.

## Bug

The `bug.js` file contains the erroneous code, which incorrectly handles `null` input.

## Solution

The `bugSolution.js` file provides a corrected version that gracefully handles the `null` values, providing a more robust and predictable output.  This solution checks for nulls and converts them to 0 before subtraction.