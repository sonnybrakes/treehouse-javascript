// quiz begins, no answer correct
var correct = 0;

// ask questions
var answer1 = prompt("Name a programming languages that's also a gem");
if (answer1.toUpperCase() === 'Ruby') {
  correct += 1;
}
var answer2 = prompt("Name a programming language that's also a snake");
if (answer2.toUpperCase() === 'Python') {
  correct += 1;
}
var answer3 = prompt("What language do you use to style web pages?");
if (answer3.toUpperCase() === 'css') {
  correct += 1;
}
var answer4 = prompt("What language do you use to build the structure of a web page?");
if (answer4.toUpperCase() === 'html') {
  correct += 1;
}
var answer5 = prompt("What language do you use to add interactivity to a web page?");
if (answer5.toUpperCase() === 'javascript') {
  correct += 1;
}

// output results
document.write("<p>You got " + correct + " out of 5 questions correct.</p>");

// output rank
if (correct === 5) {
  document.write("<p><strong>You earned a gold crown!</strong></p>");
} else if (correct >= 3) {
  document.write("<p><strong>You earned a silver crown!</strong></p>");
} else if (correct >= 1) {
  document.write("<p><strong>You earned a bronze crown!</strong></p>");
} else {
  document.write("<p><strong>No crown for you. You need to study!</strong></p>");
}
