"use strict";

var myArray = [];
var i = 10;

myArray.push(i++);
myArray.push(i++);


alert(myArray);


var ourArray = [];
var i = 5;
do {
  ourArray.push(i);
  i++;
} while (i < 5);