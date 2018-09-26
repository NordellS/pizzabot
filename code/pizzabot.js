const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:

const pizzas = ["vegetarian", "hawaiian", "pepperoni"]

//1.2 Greeting the customer

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`)

//2.3 Ask the user which pizza they want, and how many

let orderName = prompt("Enter the name of the pizza you want to order today:");

const checkOrderName = (pizzaOrder) => {
  return (pizzaOrder === vegetarian || pizzaOrder === hawaiian || pizzaOrder === pepperoni)
  }

while (!checkOrderName(orderName))  {
  orderName = prompt(`Please enter ${vegetarian}, ${hawaiian} or ${pepperoni}.`)
}

let orderQuantity = prompt(`How many of ${orderName} do you want?`)

const orderTotal = pizzaPrice * orderQuantity

let cookingTime = 0
if (orderQuantity > 6) {
  cookingTime = "The pizzas will take 20 minutes.";
} else if (orderQuantity > 3) {
  cookingTime = "The pizzas will take 15 minutes.";
} else {
  cookingTime = "The pizzas will take 10 minutes.";
}

alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr, ${cookingTime}`)
