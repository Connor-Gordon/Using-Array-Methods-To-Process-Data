
/* Question 1 - calculate avg price of all items */


let avgPrice = items.reduce(function(numberOne, numberTwo){
	return numberOne + numberTwo.price
},0)/items.length


document.querySelector("#answer1").innerHTML = `The average price is $${avgPrice.toFixed(2)}.`


/* Question 2 - show array of items that cost between $14-18 */


let priceRange = items.filter(function(item){
	if (item.price >= 14.00 && item.price <= 18.00) {
		return true
	} else {
		return false
	}
	})

let newArray = priceRange.map(function(item){
	return item.title
}).join(`\n`)


document.querySelector("#answer2").innerHTML = newArray


/* Question 3 - Which item has a "GBP" currency code? Display it's name and price*/


let cprice = 0
let cname = ""

items.forEach(function(item) {
	if (item.currency_code === "GBP") {
		cprice = item.price
		cname = item.title
	}
})

document.querySelector("#answer3").innerHTML = cname + " costs " + "\u00A3" + cprice


/* Question 4 - Display list of items made of wood. */


let wooden = items.filter(function(item) {
	if (item.materials.indexOf ("wood") !== -1){
		return true
	} else {
		return false
	}
	})


let woodnames = wooden.map(function(item) {
	return item.title
}).join (`\n`)


document.querySelector("#answer4").innerHTML = woodnames


/* Question 5 - Which items have 8 or more materials, display NAME, # of items, and what theyre made of */
// filter to get 8 or more
// hold data with string
// forEach to display

let allItems = items.filter(function(item) {
	if(item.materials.length >= 8) {
		return true
	} else {
		return true
	}
})

let answer = ""

allItems.forEach(function(item){
	if(item.materials.length >= 8) {
		answer += `${item.title} has ${item.materials.length} materials\n${item.materials}\n`
	}
})

document.querySelector("#answer5").innerHTML = answer


/* Question 6 - How many items were made by their sellers?  */


let sellers = items.filter(function(item){
	if (item.who_made === "i_did"){
		return true
	} else {
		return false
	}
})

document.querySelector("#answer6").innerHTML = `${sellers.length} were made by their sellers`






















































// let str = ""


// let eightOrMore = items.filter(function(a) {
// 	if (a.materials.length >= 8) {
// 		return true
// 	} else {
// 		return false
// 	}
// 	}).forEach(function(a){
// 		str += a.title + (`\n`)
// 		str += a.materials.length + (`\n`)

// 		item.materials.forEach (function(material) {
// 			str += material + (`\n`)
// 			})
// })

// document.querySelector("#answer5").innerHTML = str