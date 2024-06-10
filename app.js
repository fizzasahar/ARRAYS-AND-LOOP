// ------------------- Chapter 17-20 ARRAYS AND LOOP -------------------------------

// 1. Declare and initialize an empty multidimensional array.(Array of arrays)
var arr = [];

// 2. Declare and initialize a multidimensional array representing the following matrix:
var arr = [
    [0,1,2,3]
   ,[1,0,1,2]
   ,[2,1,0,1]];

for(var i=0;i<3;i++){
   for(var j =0;j<4;j++){
       document.write(arr[i][j]+' ')
   }
   document.write('<br>')
}

document.write(arr)

// 3. Write a program to print numeric counting from 1 to 10.
for(i=1; i<=10; i++){
    document.write(i + "<br>");
}

// 4. Write a program to print multiplication table of any number using for loop.
// Table number & length should be taken as an input from user.

var tableNumber = +prompt("Enter a number to show its multiplication table");
var tableLength = +prompt("Enter length multiplication table");

document.write("Multiplication table of " + tableNumber + "<br>");
document.write("Length " + tableLength + "<br>");

for(i=1; i<=tableLength; i++){
    document.write(tableNumber + " X " + i + " = " + tableNumber*i + "<br>");
}

// 5. Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”];

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for(i=0; i<fruits.length; i++){
    document.write(fruits[i] + "<br>");
}
for(j=0; j<fruits.length; j++){
    document.write("Element at index " + j + " is " + fruits[j] + "<br>");
}

// 6. Generate the following series in your browser. See example output.

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write("<h4>" + "Counting" + "</h4>")
for(i=1; i<=15; i++){
    document.write(i + ", ");
}
// // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
document.write("<h4>" + "Reverse Counting" + "</h4>")
for(i=10; i>0; i--){
    document.write(i + ", ");
}
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
document.write("<h4>" + "Even" + "</h4>")
for(i=0; i<=20; i=i+2){
    document.write(i + ", ");
}
// // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
document.write("<h4>" + "Odd" + "</h4>")
for(i=1; i<=20; i=i+2)
    document.write(i + ", ");
// }
// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("<h4>" + "Series" + "</h4>")
for(i=2; i<=20; i=i+2){
    document.write(i + "k, ");
}

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not. 

var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var userInput = prompt('Enter the item name');
userInput = userInput.toLowerCase();
var check = false;
for (var i = 0; i < A.length; i++) {
    if (userInput === A[i]) {
        document.write(A[i] + ' is available at index ' + i + ' in our bakery')
        check = true;
    }
}

if (check === false) {
    document.write('We are sorry .' + userInput + ' is not available in our bakery')

}

// 8. Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].

var arr = [24, 53, 78, 91, 12];
var largestNumber = arr[0];

for(i = 0; i < arr.length; i++){
    if(arr[i] > largestNumber){
        largestNumber = arr[i];
    }
}
document.write("Array items: " + arr + "<br>");
document.write("The largest number is " + largestNumber);

// 9. Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]

var arr = [24, 53, 78, 91, 12];
var smallestNumber = arr[0];
for(i = 0; i < arr.length; i++){
    if(arr[i] < smallestNumber){
        smallestNumber = arr[i];
    }
}
document.write("Array items: " + arr + "<br>");
document.write("The smallest number is " + smallestNumber);

// 10. Write a program to print multiples of 5 ranging 1 to 100.
for(i=5; i<=100; i=i+5){
    document.write(i + ", ");
}