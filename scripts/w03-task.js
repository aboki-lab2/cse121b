/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    // Return the sum of the parameters
    return number1 + number2;
  }
  
  function addNumbers() {
    let addnumber1 = Number(document.querySelector("#add1").value);
    let addnumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value =add(addnumber1, addnumber2);
  
    // Call the add function and assign the return value to an HTML form element with an ID of sum
    document.getElementById("sum").value = add(num1, num2);
  }
  
  // Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
  document.getElementById("addNumbers").addEventListener("click", addNumbers);
  
  // Function expression for subtract
  let subtract = function(number1, number2) {
    // Return the difference of the parameters
    return number1 - number2;
  };
  
  // Function expression for subtractNumbers
  let subtractNumbers = function() {
    // Get the values of the HTML form controls with IDs of subtract1 and subtract2
    // Convert the strings to numbers
    let num1 = Number(document.getElementById("subtract1").value);
    let num2 = Number(document.getElementById("subtract2").value);
  
    // Call the subtract function and assign the return value to an HTML form element with an ID of difference
    document.getElementById("difference").value = subtract(num1, num2);
  };
  
  // Add a "click" event listener to the HTML button with an ID of subtractNumbers that calls the subtractNumbers function
  document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);
  
  // Arrow function for multiply
  let multiply = (number1, number2) => {
    // Return the product of the parameters
    return number1 * number2;
  };
  
  // Arrow function for multiplyNumbers
  let multiplyNumbers = () => {
    // Get the values of the HTML form controls with IDs of factor1 and factor2
    // Convert the strings to numbers
    let num1 = Number(document.getElementById("factor1").value);
    let num2 = Number(document.getElementById("factor2").value);
  
    // Call the multiply function and assign the return value to an HTML form element with an ID of product
    document.getElementById("product").value = multiply(num1, num2);
  };
  
  // Add a "click" event listener to the HTML button with an ID of multiplyNumbers that calls the multiplyNumbers function
  document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);
  
  // Function declaration for divide
  function divide(number1, number2) {
    // Return the quotient of the parameters
    return number1 / number2;
  }
  
  // Function expression for divideNumbers
  let divideNumbers = function() {
    // Get the values of the HTML form controls with IDs of dividend and divisor
    // Convert the strings to numbers
    let num1 = Number(document.getElementById("dividend").value);
    let num2 = Number(document.getElementById("divisor").value);
  
    // Call the divide function and assign the return value to an HTML form element with an ID of quotient
    document.getElementById("quotient").value = divide(num1, num2);
  };
  
  //  event listener gets the input from user and decides based on membership for a discount 
  document.getElementById("divideNumbers").addEventListener("click", divideNumbers);
  function getTotal(){
    let subtotal = Number(document.querySelector('#subtotal').value);
    if (document.getElementById("member").checked) {    
        subtotal *= .80
    }
document.querySelector("#total").textContent = `$ ${subtotal.toFixed(2)}`;}
document.querySelector('#getTotal').addEventListener('click', getTotal);
// Declare and instantiate an array variable to hold the numbers 1 through 13
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Assign the value of the array variable to the HTML element with an ID of array
document.getElementById("array").innerText = numbersArray;

// using filter to get odd numbers in the array
let oddArray = numbersArray.filter(number => number % 2);
document.getElementById("odds").innerText = oddArray;


/* Output Evens Only Array */
let evenArray = numbersArray.filter(number => number % 2 === 0);
document.getElementById("evens").innerText = evenArray;

/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((sum, number) => sum + number) 
document.getElementById("sumOfArray").innerText = sumOfArray;

/* Output Multiplied by 2 Array */
let moreArray = numbersArray.map(number => number * 2)
document.getElementById("multiplied").innerText = moreArray;

/* the Output Sum of will be multiplied by 2 Array */
let calArray = numbersArray.map(number => number * 2);
let totalSum = calArray.reduce((sum, number) => sum + number, 0);
document.getElementById("sumOfMultiplied").innerText = totalSum;