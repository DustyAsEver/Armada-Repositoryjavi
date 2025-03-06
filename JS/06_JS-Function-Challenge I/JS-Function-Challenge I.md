//Challenge 1//

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
}
let numbers = [1, 2, 3, 4];
console.log("Sum:", calculateSum(numbers));
```
//Step-by-Step Execution//
```
Step | Current Number | Sum Before | Sum After
-------------------------------------------
1    | 1             | 0          | 1
2    | 2             | 1          | 3
3    | 3             | 3          | 6
4    | 4             | 6          | 10
```
// Prediction Output: 
Sum: 10
//Console Output:
```
Sum: 10
```
//Challenge 2//

function isEven(num) {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
}
console.log(isEven(4));
console.log(isEven(7));
console.log(isEven(0));
```
//Step-by-Step Execution//
```
Input | Condition (num % 2 === 0) | Output
---------------------------------
4     | true                      | true
7     | false                     | false
0     | true                      | true
```
// Prediction Output: 
true false true
//Console Output:
```
true
false
true
```

//Challenge 3//

function greet(name) {
    return "Hello, " + name + "!";
}
function personalizedGreeting(names) {
    for (let i = 0; i < names.length; i++) {
      console.log(greet(names[i]));
    }
}
let friends = ["Alice", "Bob", "Charlie"];
personalizedGreeting(friends);
```
//Step-by-Step Execution//
```
Step | Current Name | Greeting Output
-------------------------------------
1    | Alice       | "Hello, Alice!"
2    | Bob        | "Hello, Bob!"
3    | Charlie    | "Hello, Charlie!"
```
// Prediction Output: 
Hello, Alice!, Hello, Bob!, Hello, Charlie!
//Console Output:
```
Hello, Alice!
Hello, Bob!
Hello, Charlie!
```

//Challenge 4//

function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
}
let originalArray = [10, 20, 30];
console.log(reverseArray(originalArray));
console.log(originalArray);
```
//Step-by-Step Execution//
```
Step | Current Element | Reversed Array
--------------------------------------
1    | 30             | [30]
2    | 20             | [30, 20]
3    | 10             | [30, 20, 10]
```
// Prediction Output: 
reversed: [30, 20, 10] 
orginalArray: [10, 20, 30]
//Console Output:
```
[30, 20, 10]
[10, 20, 30]
```

//Challenge 5//

function multiplyMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] *= 2;
      }
    }
    return matrix;
}
let matrix = [
    [1, 2],
    [3, 4],
];
console.log(multiplyMatrix(matrix));
```
//Step-by-Step Execution//
```
Step | i | j | Current Value | Multiplied Value
----------------------------------------------
1    | 0 | 0 | 1             | 2
2    | 0 | 1 | 2             | 4
3    | 1 | 0 | 3             | 6
4    | 1 | 1 | 4             | 8
```
// Prediction Output: 
[2,4] [6,8]
//Console Output:
```
[[2, 4],
 [6, 8]]
```

This document now contains a structured T-diagram analysis for each challenge with step-by-step variable tracking and console outputs.

