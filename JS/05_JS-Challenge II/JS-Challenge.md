//Inventory Tracker//
```
Variable       |  Value
----------------------
inventory      |  ["apple", "banana", "cherry", "date", "elderberry"]
inventoryCount |  [10, 15, 5, 20, 7]
i              |  0 → 1 → 2 → 3 → 4
item          |  "apple" → "banana" → "cherry" → "date" → "elderberry"
count         |  10 → 15 → 5 → 20 → 7
----------------------
```
//Console Output://
```
apple: 10
banana: 15
cherry: 5
date: 20
elderberry: 7
```

//Alphabetical Sorting//
//Before Sorting//
```
Variable    |  Value
----------------------
words       |  ["zebra", "apple", "mango", "cherry", "banana"]
i           |  0 → 1 → 2 → 3 → 4
j           |  1 → 2 → 3 → 4 (nested loop)
temp        |  Holds intermediate swap value
----------------------
```
//After Sorting//
```
Variable    |  Value
----------------------
words       |  ["apple", "banana", "cherry", "mango", "zebra"]
----------------------
```
//Console Output://
```
[ 'apple', 'banana', 'cherry', 'mango', 'zebra' ]
```

//Unique Array Builder//
```
Variable    |  Value
----------------------
uniqueNums  |  [] → [X] → [X, Y] → [X, Y, Z] → ... (random unique numbers)
i           |  0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9
randomNum   |  Random values between 1 and 20
exists      |  false (if number is new) / true (if duplicate found)
----------------------
```
//Console Output://
```
[ 1, 5, 12, 8, 19, 3, 7, 14, 20, 11 ]
```

//Triangle Checker//
```
Variable    |  Value
----------------------
sideA       |  7
sideB       |  10
sideC       |  5
sumAB       |  17 (sideA + sideB)
sumBC       |  15 (sideB + sideC)
sumAC       |  12 (sideA + sideC)
triangle?   |  true (if sumAB > sideC and sumBC > sideA and sumAC > sideB)
----------------------
```
//Console Output://
```
The sides 7, 10, and 5 form a valid triangle.
```

