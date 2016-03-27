var numberOfStrats = prompt("Number of Strats");
var numberOfTeles = prompt("Number of Teles");
var numberOfLesPauls = prompt("Number of Les Pauls");
var totalGuitars = parseInt(numberOfStrats) + parseFloat(numberOfTeles) + parseInt(numberOfLesPauls);
document.write("<h2> Total number of guitars: " + totalGuitars)
