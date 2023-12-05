let d = new Date();
document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"


var test = "my 01_today_date.html"

//////////////////////////////////////////////////////////////////////////


document.body.style.backgroundColor = "pink";
document.body.style.color = "white";
let p = document.createElement("P"); // Создайте новый элемент с помощью тега <p>
let t = document.createTextNode("Paragraph text.");
p.appendChild(t);
document.body.appendChild(p);

//////////////////////////////////////////////////////////////////////////

console.log(window.test)
console.log(test)

//////////////////////////////////////////////////////////////////////////
// strings

const myVar = "bla"

let s1 = document.createTextNode("my string1\n"); // \n doesn't work here
let s2 = document.createTextNode('my string2\n'); // \n doesn't work here
let s3 = document.createTextNode(`my string3 ${myVar}`);


document.body.appendChild(s1);
document.body.appendChild(s2);
document.body.appendChild(s3);

const threeLines = "This is a string\n" +
"that spans across\n" +
"three lines.";

// new line does work
console.log("my string1\n" + 'my string2\n' + `my string3 ${myVar}\n` + threeLines);

console.log("How are you?"[5]); // r
console.log("How are you?".charAt(5)); // r
console.log("How are you?".indexOf("o")); // 1
console.log("How are you?".lastIndexOf("o"));
console.log("How are you?".slice(8, 11)); // you
console.log("How are you?".slice(8));
console.log("How are you?".split(" ")[1]); // [ 'How', 'are', 'you?' ] -> are
console.log("How are you?".replace("How", "Where")); // Where are you?
console.log("Javascript is a programming language. I'm learning javascript.".replace(/javascript/gi, "JavaScript")); //JavaScript is a programming language. I'm learning JavaScript.
console.log();

//////////////////////////////////////////////////////////////////////////
// arithmetic operators
let y = 7;
// Use the prefix increment operation
let postfix = y++;
console.log(postfix);

//////////////////////////////////////////////////////////////////////////
// arrays

// Initialize array of shark species with array literal
let sharks = [
"Hammerhead",
"Great White",
"Tiger",
];

// Initialize array of shark species with array constructor
let sharks2 = new Array(
"Hammerhead",
"Great White",
"Tiger",
);

// Print out the entire sharks array
console.log(sharks);

console.log(sharks.length);

console.log(sharks.indexOf("Tiger"));
console.log(sharks.indexOf("bla")); // -1

// Loop through each shark
for (let shark of sharks) {
console.log(shark);
}


let fish = [ "piranha", "barracuda", "koi", "eel" ];
// Test if fish variable is an array
console.log(Array.isArray(fish)); // true