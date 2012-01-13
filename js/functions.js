// JavaScript single line comment
/*
Javascript multi-line comment
*/
//'alert' pops up a small wndow with an OK button.
alert('This is an alert.');

//'prompt' is for user input
var name;
while (!name){
name = prompt("What's your name?");
}

//'console.log()' writes out the content of a variable, for debugging
console.log(name);

document.write('Hello, ' + name + '! ;)');

isNameCool();

for (var i = 0; i < 5; i++) {
	document.write('<br>' + i);
	document.write('<h1>' + i + '</h1>');
}

function isNameCool() {
	var name = prompt("What's your name?");
	if (name== 'Jen') {
		document.write('<br>' + "That name is EVERYWHERE!");
	}
	else {
		document.write('<br>' + "Your name is not so cool.");
	}
}

var writeNameMultipleTimes = function () {
	for (var i = 0; i < 5; i++) {
		document.write('<br><strong>Jen</strong>');
	}
};















