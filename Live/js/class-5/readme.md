# Class 5

### 1. Transformation (Creating New Arrays)

These methods return a **new** array and do not modify the original.

* **map():** Transforms every element in the array.
* **filter():** Creates a subset based on a condition.
* **concat():** Merges two or more arrays.
* **slice():** Extracts a section of an array.
* **flat() / flatMap():** Flattens nested arrays.
* **toReversed() / toSorted() / toSpliced():** Modern "copying" versions of `reverse`, `sort`, and `splice`.

### 2. Mutator Methods (Modifying the Original)

These change the array they are called on. Use these with caution!

* **push() / pop():** Adds/removes from the **end**.
* **shift() / unshift():** Adds/removes from the **beginning**.
* **splice():** Adds or removes elements at a specific index.
* **sort() / reverse():** Reorders the elements in place.
* **fill():** Fills elements with a static value.
* **copyWithin():** Copies part of an array to another location in the same array.

### 3. Searching & Logical Checks

Methods used to find specific items or check conditions.

* **find() / findIndex():** Returns the first element (or index) that matches a condition.
* **findLast() / findLastIndex():** Same as above, but starts from the end.
* **includes():** Returns `true` if a value exists.
* **indexOf() / lastIndexOf():** Returns the index of a specific value.
* **every() / some():** Checks if all (or at least one) elements pass a test.

### 4. Iteration & Reduction

Methods for looping through data or condensing it.

* **forEach():** Runs a function for every element (returns `undefined`).
* **reduce() / reduceRight():** Reduces the array to a single value (like a sum or a combined object).
* **entries() / keys() / values():** Returns iterator objects for the array.

### 5. Utility & Formatting

* **join():** Combines all elements into a string.
* **toString() / toLocaleString():** Converts the array to a string representation.
* **at():** Takes an integer and returns the item at that index (supports negative indexing).
* **with():** The "copying" version of bracket notation (e.g., `arr.with(2, "new")`).


1. **at()**: Accesses an element at a specific index (supports negative integers).
2. **concat()**: Merges two or more arrays into a new array.
3. **constructor**: The function that creates the Array prototype.
4. **copyWithin()**: Copies array elements to another position in the same array.
5. **entries()**: Returns an iterator object with key/value pairs.
6. **every()**: Checks if every element passes a specific test.
7. **fill()**: Fills elements in an array with a static value.
8. **filter()**: Creates a new array with elements that pass a test.
9. **find()**: Returns the value of the first element that passes a test.
10. **findIndex()**: Returns the index of the first element that passes a test.
11. **findLast()**: Returns the value of the last element that passes a test.
12. **findLastIndex()**: Returns the index of the last element that passes a test.
13. **flat()**: Concatenates sub-array elements into a new, flatter array.
14. **flatMap()**: Maps each element, then flattens the result into a new array.
15. **forEach()**: Calls a function for each array element.
16. **includes()**: Checks if an array contains a specified element.
17. **indexOf()**: Search the array for an element and returns its position.
18. **join()**: Joins all elements of an array into a string.
19. **keys()**: Returns an iterator object containing the keys of the array.
20. **lastIndexOf()**: Search the array for an element, starting from the end.
21. **length**: A property that returns the number of elements (shown as 0 in your image).
22. **map()**: Creates a new array by performing a function on every element.
23. **pop()**: Removes the last element of an array and returns it.
24. **push()**: Adds new elements to the end of an array.
25. **reduce()**: Reduces the array to a single value (from left-to-right).
26. **reduceRight()**: Reduces the array to a single value (from right-to-left).
27. **reverse()**: Reverses the order of elements in an array in place.
28. **shift()**: Removes the first element of an array and returns it.
29. **slice()**: Selects a part of an array and returns a new array.
30. **some()**: Checks if at least one element passes a specific test.
31. **sort()**: Sorts the elements of an array in place.
32. **splice()**: Adds or removes elements from an array.
33. **toLocaleString()**: Converts an array to a localized string.
34. **toReversed()**: Returns a new array with elements in reversed order (non-mutating).
35. **toSorted()**: Returns a new array with elements sorted (non-mutating).
36. **toSpliced()**: Returns a new array with elements added/removed (non-mutating).
37. **toString()**: Converts an array to a string.
38. **unshift()**: Adds new elements to the beginning of an array.
39. **values()**: Returns an iterator object for the values in the array.
40. **with()**: Returns a new array with the element at a specific index replaced.

### 1. Transformation (Creating New Arrays)

These methods return a **new** array and do not modify the original.

* **map():** Transforms every element in the array.
* **filter():** Creates a subset based on a condition.
* **slice():** Extracts a section of an array.

### 2. Mutator Methods (Modifying the Original)

These change the array they are called on. Use these with caution!

* **splice():** Adds or removes elements at a specific index.

### 3. Searching & Logical Checks

Methods used to find specific items or check conditions.

* **includes():** Returns `true` if a value exists.
* **indexOf():** Returns the index of a specific value.

### 4. Iteration & Reduction

Methods for looping through data or condensing it.

* **forEach():** Runs a function for every element (returns `undefined`).
* **reduce():** Reduces the array to a single value (like a sum or a combined object).

### 5. Utility & Formatting

* **join():** Combines all elements into a string.

