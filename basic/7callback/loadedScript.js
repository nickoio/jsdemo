// Над "use strict" могут быть записаны только комментарии.
"use strict";

let message2 = "my message2";

console.log("Loaded Script");

let func1 = new Function('', 'console.log(message1)');
let func2 = new Function('', 'console.log(message2)');
func1();
func2();

console.log("End Of Loaded Script");