// Exercise 1: Counting to 10
// Use a while loop to print all numbers from 1 to 10
let num = 0 
while (num < 10){
  num++
  console.log(num)
}




// Exercise 2: Even numbers
// Use a while loop to print all the even numbers from 20 to 40
let num1 = 0
while (num1 < 42){
  
  console.log(num1)
  num1 += 2
}



// Exercise 3: Countdown
// Ask the user to enter a positive integer (remember to cast!) Use a while loop to print from that number down to 1
let countdown =  prompt("Enter a positive integer")
countdown = parseInt(countdown)

while (countdown < 1){
 console.log(countdown)
  countdown--
}




// Exercise 4: Sum of N Numbers
// Prompt the user to enter a positive integer. Calculate the sum of all numbers from 1 to that number using a while loop and display the result.
let positive = prompt("Enter a positive integer")
positive = parseInt(positive)
while (positive <= 1){
  sum = positive + sum
  positive++
}
console.log("sum of 1-5", sum)


// Exercise 5: Password Entry
// Create a simple password entry program. Ask the user to enter a password. Use a while loop to keep prompting the user until they enter the correct password (e.g., "secret").
let pass = prompt("Enter the password")







// Extra Credit: Password Strength Checker
// Create a password strength checker with a while loop. Continuously prompt the user to enter a password until it meets the following criteria:
// - At least 8 characters long
// - Contains both uppercase and lowercase letters
// - Includes at least one special character (e.g., @, #, $, etc.)
// Display a message when a valid password is entered.
// Hint: start by doing the conditions one by one and then combine them after




