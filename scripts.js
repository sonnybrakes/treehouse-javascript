// var secondsPerMinute = 60;
// var minutesPerHour = 60;
// var hoursPerDay = 24;
// var daysPerWeek = 7;
// var weeksPerYear = 52;
//
// var secondsPerDay = secondsPerMinute * minutesPerHour * hoursPerDay;
// document.write("There are " + secondsPerDay + " seconds in a day");

var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it');
if (parseInt(guess) === randomNumber) {
  document.write('<p>You guessed the number!</p>');
} else {
  document.write('<p>Sorry. The number was ' + randomNumber + '</p>');
}
