// Exercise 1//
function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

console.log(calculate(10, 2, subtract));      
console.log(calculate(24, 8, divide)); 

//Exercise 2//

function delayedMessage(message1, message2, delay, callback) {
    setTimeout(() => {
        callback(message1), callback(message2);
    }, delay);
  }
  
  delayedMessage("Hello There!", "General Kenobi", 2000, function(msg) {
    console.log(msg);
    });

  //Exercise 3//

  function repeatTask(times, callback) {
    for (let i = 0; i < times; i++) {
      if(callback(i) === false){
        break;
      }
  }
  }
  
  repeatTask(6, function(index) {
  console.log("Iteration:", index);
  if (index === 3) return false;
  });