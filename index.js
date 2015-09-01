// npm init -> npm install --save prompt-sync

var start = new Date();
var css = 0
var html = 0
var jav = 0
var prompt = require('prompt-sync').prompt;

console.log('Welcome to the quiz. we will start with html');

console.log('1. Placing elements within each other is referred to as?');

var q1 = prompt().toLowerCase();

if (q1 === 'nesting') {
	console.log('correct!');
	html++;
} else {
	console.log('close, the correct answer is nesting');
}

console.log('2. What is the default display of a <div>?');

var q2 = prompt().toLowerCase();

if (q2 === 'block') {
	console.log('correct!')
	html++;
} else {
	console.log('close, the correct answer is block');
}

console.log('3. This element contains information for the page which is not visible');

var q3 = prompt().toLowerCase();

if (q3 === ('head' || '<head>')) {
	console.log('correct!');
	html++;
} else {
	console.log('close, the correct answer is head');
}

console.log('4. The element containing another element is known as a?')

var q4 = prompt().toLowerCase();

if (q4 === 'parent') {
	console.log('correct!');
	html++;
} else {
	console.log('close, the correct answer is parent');
}

console.log('5. The current version of html is?');

var q5 = prompt().toLowerCase();

if (q5 === ('5' || 'html5')) {
	console.log('correct!');
	html++
} else {
	console.log('close. The correct answer is html5')
}

console.log('Moving on to CSS');
console.log('6. A tag in CSS is known as a? ');

var q6 = prompt().toLowerCase();

if (q6 === 'selector') {
	console.log('correct!');
	css++;
} else {
	console.log('close. The correct answer is a selector');
}

console.log('7. Which is more specific? div > p or div > p.class');

var q7 = prompt().toLowerCase();

if (q7 === 'div > p.class') {
	console.log('correct!');
	css++;
} else {
	console.log('close. the correct answer is div > p.class because it is more specific');
}

console.log('8. #name is an example of an');

var q8 = prompt().toLowerCase();

if (q8 === 'id') {
	console.log('correct!');
	css++;
} else {
	console.log('close. The correct answer is id');
}

console.log('9. What other language is typically used to generate CSS?');

var q9 = prompt().toLowerCase();

if (q9 === 'sass') {
	console.log('correct!');
	css++;
} else {
	console.log('close. the correct answer is sass');
}

console.log('10. What element in html is used to apply a stylesheet?');

var q10 = prompt().toLowerCase();

if (q10 === ('link' || '<link>')) {
	console.log('correct!');
	css++;
} else {
	console.log('close. The correct answer is link');
}

console.log('Moving on to Javascript');

console.log('11. True is what kind of data type?');

var q11 = prompt().toLowerCase();

if (q11 === 'boolean') {
	console.log('correct!');
	jav++;
} else {
	console.log('close. The correct answer is boolean');
}

console.log('12. What code did I type to display this? Text not included.');

var q12 = prompt().toLowerCase();

if (q12 === ('console.log()' || 'console.log();')) {
	console.log('correct!');
	jav++;
} else {
	console.log("close. the answer is console.log() or console.log(); if you're a nerd");
}

console.log('13. what syntax is used for and');

var q13 = prompt().toLowerCase();

if (q13 === '&&') {
	console.log('correct!');
	jav++;
} else {
	console.log('close. The correct answer is &&');
}

console.log('14. Are strings case sensitive? y/n');

var q14 = prompt().toLowerCase();

if (q14 === ('y' || 'yes')) {
	console.log('correct! One more to go!');
	jav++;
} else {
	console.log('close. The answer is yes.');
}

console.log('15. Java is?');

var q15 = prompt().toLowerCase();

if (q15 === ('country' || 'a country' || 'an island' || 'island' || 'nation')) {
 console.log('correct! congratulations!');
 jav++;
} else {
	console.log('hahaha wow like go outside u nerd haha buy a map and get off your computer');
}

if ((html && css && jav) === 5){
	console.log('looks like you know your stuff');
} else {
	console.log('good bye');
}
if (html < 5) {
	console.log('you need work on html ' + html + '/5');
} else {
	console.log('good bye');
}
if (css < 5) {
	console.log('you need work on css ' + css + '/5');
} else {
	console.log('good bye');
}
if (jav < 5) {
	console.log('you need work on javascript ' + jav + '/5');
} else {
	console.log('good bye');
}
var a = ((html + css + jav) / (15) * 100);
console.log((html + css + jav) + '/15 correct');

console.log(parseInt(a) + '%');

var end = new Date();
console.log('Test took '+ parseInt((end-start) / 1000)+' ' + ' seconds');
