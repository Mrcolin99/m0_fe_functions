// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
function printGreeting() {
  console.log("Hello, User")
}

printGreeting()
printGreeting()
printGreeting()

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
function printGreeting(name) {
  console.log(`Hello, ${name}`);
}

printGreeting("Colin")

// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).
function salaryRange(place, min, max, range) {
  console.log(`Here at ${place} you can make between ${min} and ${max}. Because we hate you. Thats a total range of ${range}!`);
}

salaryRange("Best Buy", "$10", "$11", "1");

// 4: Write a function that satifies the following interaction pattern:

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"

function checkStock(amount, name) {
  console.log(`Item: ${name}     Amount: ${amount}`)
if (`${amount}` <= 3)
  console.log(`${name} - running LOW`)
  else {
    console.log(`${name} is stocked`)
  }
if (`${amount}` == 0) {
  console.log(`${name} - OUT of stock`)
 }
}

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW
