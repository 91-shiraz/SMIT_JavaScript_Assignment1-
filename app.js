//Q1. Write a JavaScript program that accepts two numbers in two prompts and displays the larger one in the console.

// let num1 = Number(prompt("Enter 1st Value"))
// let num2 = Number(prompt("Enter 2nd Value"))

// if (num1 > num2){
//     console.log("The Larger Number is " + num1)
// }
// else if(num2 > num1){
//     console.log("The Larger Number is " + num2)
// }
// else if (num1 == num2){
//     console.log("The Values are Same!!")
// }
// else{
//     console.log("Not a Number!!")
// }

//Q2. Write a JavaScript conditional statement to find the sign of a number. Display an alert box with the specified sign.

// let num = Number(prompt("Enter Number"))

// if (num > 0){
//     console.log("The Sign is Positive (+)")
// }
// else if(num < 0){
//     console.log("The Sign is Negative (-)")
// }
// else if (num = 0){
//     console.log("The Number is Zero!!")
// }
// else{
//     console.log("Not a Number!!")
// }

//Q3. Write a JavaScript program that accepts five numbers in five prompts and displays the larger one in the console.

// let num1 = Number(prompt("Enter 1st Value"))
// let num2 = Number(prompt("Enter 2nd Value"))
// let num3 = Number(prompt("Enter 3rd Value"))
// let num4 = Number(prompt("Enter 4th Value"))
// let num5 = Number(prompt("Enter 5th Value"))

// largest = num1

// if(num2 > largest){
//     largest = num2
// }
// if(num3 > largest){
//     largest = num3
// }
// if(num4 > largest){
//     largest = num4
// }
// if(num5 > largest){
//     largest = num5
// }
// else{
//     console.log("Not a Number!!")
// }
// console.log("The Largest Number is " + largest)

//Q4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

// for(let i=0; i<=15; i++){
//    if(i%2==0){
//        console.log(i + " is Even")
//    }
//    else{
//        console.log(i + " is Odd")
//    }
// }

//Q5. Write a JavaScript program which computes the average marks of the following students Then, this average is used to determine the corresponding grade.

// let marks = [80, 95, 90, 77, 85];
// let sum = 0;

// for (let i = 0; i < marks.length; i++) {
//   sum += marks[i];
// }

// let average = sum/marks.length;

// console.log("The Average Marks are: " + average);

// if (average >= 90) {
//   console.log("Grade: A");
// } else if (average >= 80 && average < 90) {
//   console.log("Grade: B");
// } else if (average >= 70 && average < 80) {
//   console.log("Grade: C");
// } else if (average >= 60 && average < 70) {
//   console.log("Grade: D");
// } else {
//   console.log("Grade: F");
// }

//Q6. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

// for (let i=1; i<=100; i++){
//    if(i%3 === 0 && i%5 === 0){
//      console.log("FizzBuzz")
//    }else if(i % 3 === 0){
//      console.log("Fizz")
//    }else if(i % 5 === 0){
//      console.log("Buzz")
//    }else{
//      console.log(i)
//    }
// }

//Q7. Write a JavaScript program to construct the following pattern, using a nested for loop.

// for(let i=1; i<=5; i++){
//     for(let j=1; j<=i; j++){
//         document.write("* ")
//     }
//     document.write("<br>")
// }