// Chapter 5

function addNumbers(num1, num2) {
    return num1 + num2;
  }
  var number1 = parseFloat(prompt("Enter the first number:"));
  var number2 = parseFloat(prompt("Enter the second number:"));
  var result = addNumbers(number1, number2);
  document.write("<h1>The sum of " + number1 + " and " + number2 + " is: " + result + "</h1>");

  function subtractNumbers(num1, num2) {
    return num1 - num2;
  }
  function multiplyNumbers(num1, num2) {
    return num1 * num2;
  }
  function divideNumbers(num1, num2) {
    if (num2 === 0) {
      return "Cannot divide by zero!";
    } else {
      return num1 / num2;
    }
  }
  function modulusNumbers(num1, num2) {
    return num1 % num2;
  }

  var number1 = parseFloat(prompt("Enter the first number:"));
  var number2 = parseFloat(prompt("Enter the second number:"));
  var subtractionResult = subtractNumbers(number1, number2);
  var multiplicationResult = multiplyNumbers(number1, number2);
  var divisionResult = divideNumbers(number1, number2);
  var modulusResult = modulusNumbers(number1, number2);
  document.write("<h1>Arithmetic Operations:</h1>");
  document.write("<p>Subtraction: " + number1 + " - " + number2 + " = " + subtractionResult + "</p>");
  document.write("<p>Multiplication: " + number1 + " * " + number2 + " = " + multiplicationResult + "</p>");
  document.write("<p>Division: " + number1 + " / " + number2 + " = " + divisionResult + "</p>");
  document.write("<p>Modulus: " + number1 + " % " + number2 + " = " + modulusResult + "</p>");

  var myVariable;
    document.write("<h1>JavaScript Variable Declaration</h1>");
    document.write("<p>Value after variable declaration is: " + myVariable + "");

    
  var myVariable = 10;
  document.write("<h1>JavaScript Variable Declaration</h1>");
  document.write("<p>Value after variable declaration is: " + myVariable + "");

  var myVariable = 5;
  document.write("<h1>JavaScript Variable Initial Value</h1>");
  document.write("<p>Initial value: " + myVariable + "</p>");

    myVariable++;
    document.write("<h1>JavaScript Variable Increment</h1>");
    document.write("<p>Initial value: 5</p>");
    document.write("<p>Value after increment: " + myVariable + "</p>");

    var myVariable = 5;
    var incrementedValue = ++myVariable;
    document.write("<h1>JavaScript Variable Increment</h1>");
    document.write("<p>Value after increment is: " + incrementedValue + "</p>");

    myVariable += 7;
    document.write("<h1>JavaScript Variable Addition</h1>");
    document.write("<p>Value after addition is: " + myVariable + "</p>");

    var decrementedValue = --myVariable;
    document.write("<h1>JavaScript Variable Decrement</h1>");
    document.write("<p>Value after decrement is: " + decrementedValue + "</p>");
    var remainder = myVariable % 3;
    document.write("<h1>JavaScript Remainder Division</h1>");
    document.write("<p>The remainder is: " + remainder + "</p>");

    var ticketPrice = 600;
    var numberOfTickets = 5;
    var totalCost = ticketPrice * numberOfTickets;
    document.write("<h1>Movie Ticket Cost Calculation</h1>");
    document.write("<p>Number of tickets: " + numberOfTickets + "</p>");
    document.write("<p>Cost of one ticket: " + ticketPrice + " PKR</p>");
    document.write("<p>Total cost of buying " + numberOfTickets + " tickets: " + totalCost + " PKR</p>");

    function displayMultiplicationTable(number) {
        document.write("<h2>Multiplication Table of " + number + ":</h2>");
        document.write("<table border='1'>");
        for (var i = 1; i <= 10; i++) {
          document.write("<tr>");
          document.write("<td>" + number + " x " + i + "</td>");
          document.write("<td>" + (number * i) + "</td>");
          document.write("</tr>");
        }
        document.write("</table>");
      }

    var userNumber = parseInt(prompt("Enter a number to display its multiplication table:"));
    displayMultiplicationTable(userNumber);
    var celsiusTemperature = 25;
    var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
    var fahrenheitTemperature2 = 77;
    var celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5/9;
    document.write("<h2>Temperature Converter</h2>");
    document.write("<p>" + celsiusTemperature + "°C is " + fahrenheitTemperature + "°F</p>");
    document.write("<p>" + fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C</p>");

    var item1Price = 500;
    var item2Price = 800;
    var item1Quantity = 2;
    var item2Quantity = 3;
    var shippingCharges = 100;
    var totalCostItem1 = item1Price * item1Quantity;
    var totalCostItem2 = item2Price * item2Quantity;
    var subtotal = totalCostItem1 + totalCostItem2;
    var totalCost = subtotal + shippingCharges;
    document.write("<h2>Checkout Process</h2>");
    document.write("<p>Price of item 1: " + item1Price + " PKR</p>");
    document.write("<p>Price of item 2: " + item2Price + " PKR</p>");
    document.write("<p>Ordered quantity of item 1: " + item1Quantity + "</p>");
    document.write("<p>Ordered quantity of item 2: " + item2Quantity + "</p>");
    document.write("<p>Shipping charges: " + shippingCharges + " PKR</p>");
    document.write("<p>Subtotal: " + subtotal + " PKR</p>");
    document.write("<p>Total cost including shipping charges: " + totalCost + " PKR</p>");

    var totalMarks = 600;
    var marksObtained = 320;
    var percentage = (marksObtained / totalMarks) * 100;
    document.write("<h2>Percentage Calculator</h2>");
    document.write("<p>Total marks: " + totalMarks + "</p>");
    document.write("<p>Marks obtained: " + marksObtained + "</p>");
    document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");

    const totalUSD = 30;
    const totalSAR = 85;
    const usdToPKR = 804.80;
    const sarToPKR = 88;
   const totalPKR = (totalUSD * usdToPKR) + (totalSAR * sarToPKR);
   document.write("<h2>Total amount in Pakistani Rupees:</h2>",totalPKR);

   let number = 60;
   const Result = (((number + 5) * 10) / 2);
   document.write("Result:", Result);

  const currentYear = new Date().getFullYear();
  const birthYear = 1990;
  const age1 = currentYear - birthYear;
  const age2 = age1 - 1;
  document.write(`They are either ${age1} or ${age2} years old.`);

const radius = 5;
const circumference = 2 * Math.PI * radius;
const area = Math.PI * Math.pow(radius, 2);
document.write("The circumference is " + circumference.toFixed(2));
document.write("The area is " + area.toFixed(2));

const favoriteSnack = "chocolate bars";
const currentAge = 25;
const maxAge = 80;
const amountPerDay = 1;
const yearsRemaining = maxAge - currentAge;
const daysRemaining = yearsRemaining * 365;
const totalSnacksNeeded = daysRemaining * amountPerDay;
document.write("You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge)

// Chapter 6

var numbers = parseFloat(prompt("Enter a number:"));
var result1 = numbers * 2;
var result2 = result1 + 5;
var result3 = result2 / 3;
document.write("Result 1: " + result1 + "<br>");
document.write("Result 2: " + result2 + "<br>");
document.write("Result 3: " + result3);

var a = 2, b = 1;
document.write("Initially, a = " + a + " and b = " + b + "<br>");
var result = --a - --b + ++b + b--;
document.write("After operation 1 (--a): a = " + a + "<br>");
document.write("After operation 2 (--a - --b): b = " + b + "<br>");
document.write("After operation 3 (--a - --b + ++b): result = " + result + "<br>");
document.write("After operation 4 (--a - --b + ++b + b--): a = " + a + ", b = " + b + ", result = " + result);

var name = prompt("Please enter your name:");
if (name !== null && name !== "") {
    alert("Hello, " + name + "! Welcome.");
} else {
    alert("Hello! Welcome.");
}

var numbers = prompt("Enter a number:");
if (numbers === null || isNaN(numbers) || numbers === "") {
    numbers = 5;
}
numbers = parseInt(numbers);
document.write("<h2>Multiplication Table of " + numbers + "</h2>");
for (var i = 1; i <= 10; i++) {
    document.write(numbers + " x " + i + " = " + (numbers * i) + "<br>");
}

  function calculateMarks() {
  var subject1 = prompt("Enter the name of the first subject:");
  var subject2 = prompt("Enter the name of the second subject:");
  var subject3 = prompt("Enter the name of the third subject:");
  var totalMarks = 100;
  var obtainedMarks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));
  var obtainedMarks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
  var obtainedMarks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));
  var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
  var totalPercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;
  document.write("<h2>Result:</h2>");
  document.write("<table border='1'>");
  document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
  document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
  document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
  document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
  document.write("</table>");
  document.write("<br><h3>Total Obtained Marks: " + totalObtainedMarks + "</h3>");
  document.write("<h3>Percentage: " + totalPercentage.toFixed(2) + "%</h3>");
}
calculateMarks();