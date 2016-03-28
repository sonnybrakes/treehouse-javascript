// function getRandomNumber( upper) {
//   var randomNumber = Math.floor( Math.random() * upper ) + 1;
//   document.write(randomNumber);
//   return randomNumber;
// }
// console.log( getRandomNumber(49) );
// console.log( getRandomNumber(49) );

// var dieRoll = getRandomNumber();
// console.log( getRandomNumber() );
// alert( getRandomNumber() );

function getArea(width, length, unit) {
  var area = width * length;
  return area + " " + unit;
}
console.log(getArea(15, 20, 'sq ft'));
