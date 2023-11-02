// Create a conditional statement that compares 
// two numbers. You can choose if those numbers 
// will be equal, less than, greater than, less 
// than or equal to, or greater than or equal to
// each other. Include an if, else if, and else 
// statement. Create an alert that gives your 
// user feedback based on the number. Test your 
// statement with different numbers to make sure 
// all alerts work.

var num1 = Math.floor(Math.random() * 10);
var num2 = Math.floor(Math.random() * 10);

if (num1 == num2){
   console.log(num1 + " = " + num2 + " The numbers are equal!");
} else if (num1 > num2){
   console.log(num1 + " > " + num2 + " Number one is too big :(");
} else{
   console.log(num1 + " < " + num2 + " Number two is too big :(");
}
