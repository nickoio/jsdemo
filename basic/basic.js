// Над "use strict" могут быть записаны только комментарии.
"use strict";



console.log("adfsfsfddf");


// В прошлом, поскольку существовал только var, а он не имел блочной области видимости, программисты придумали способ её эмулировать. 
// Этот способ получил названиея IIFE - Immediately-invoked function expressions
// Во всех перечисленных случаях мы объявляем Function Expression и немедленно запускаем его. Ещё раз отметим: в настоящее время необходимости писать подобный код нет.

(function() {
    var message = "Hello";
    console.log("Круглые скобки вокруг функции");
  })();
  
  (function() {
    var message = "Hello";
    console.log("Круглые скобки вокруг всего выражения");
  }());
  
  !function() {
    var message = "Hello";
    console.log("Выражение начинается с логического оператора НЕ");
  }();
  
  +function() {
    var message = "Hello";
    console.log("Выражение начинается с унарного плюса");
  }();