/*Given a number n, determine whether it is a prime number or not. A prime number is a
Examples :
Input: n = 7
Output: true
Explanation: 7 has exactly two divisors: 1 and 7, making it a prime number.

Input: n = 25
Output: false
Explanation: 25 has more than two divisors: 1, 5, and 25, so it is not a prime number.

Input: n = 1
Output: false
Explanation: 1 has only one divisor (1 itself), which is not sufficient for it to be considered
prime.*/

//Here, I declared a variable and I assigned the 2 cases 25 and 1 to this variable - number[] means it is an array of numbers
let numbers: number[] = [25, 1];

for (let number of numbers) {

//Declare a Boolean Variable
let isPrime: boolean = true;

if (number <= 1) {
    isPrime = false;
}

else {

    for (let i: number = 2; i < number; i++) {

        if (number % i === 0) {
            
            //Since I found another divisor, the number is not a prime number
            //Therefore, I change isPrime from true to false
            isPrime = false;

            //break immediately exits the loop
            //There is no need to continue checking other numbers because I have already found that the number is not prime
            break;
        }

    }
}

//Results
if (isPrime) {
    console.log(number + " is a Prime Number");
}
else {
    console.log(number + " is Not a Prime Number");
}

console.log("Number :", number);
console.log("Is Prime :", isPrime);
}


/*let number: number = 25;
//Declare a Boolean Variable
let isPrime: boolean = true;
//I declared another variable called isPrime 
//Initially, I assume the number is prime, so I assign it true
//If I find any divisor later, I will change it to false
//Check if the Number is Less Than or Equal to 1
//Numbers less than or equal to 1 are not prime numbers. So, I change isPrime to false
if (number <= 1) {
    isPrime = false;
}
// If the number is greater than 1, the program enters the else block
// Now it will check whether the number has any divisors other than 1 and itself
else {
    //I use a for loop to check every number from 2 up to number - 1
    //It starts from 2 because every number is divisible by 1 and The loop continues until i is less than number
    for (let i: number = 2; i < number; i++) {
        //% is the modulus operator and It returns the remainder after division
        //If the remainder is 0, it means the number is exactly divisible by i
        if (number % i === 0) {
            
            //Since I found another divisor, the number is not a prime number
            //Therefore, I change isPrime from true to false
            isPrime = false;
            //break immediately exits the loop
            //There is no need to continue checking other numbers because I have already found that the number is not prime
            break;
        }
    }
}
//Results
if (isPrime) {
    console.log(number + " is a Prime Number");
}
else {
    console.log(number + " is Not a Prime Number");
}
console.log("Number :", number);
console.log("Is Prime :", isPrime);
*/