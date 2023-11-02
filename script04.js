// Create function that takes in one argument 
// that is passed through a conditional statement.
// Return the result as an alert or console.log. 
// Test all of your conditions to make sure you 
// can receive all of your results back. 


console.log(menu((Math.floor(Math.random() * 5))));

function menu(num){
  if (num == 0){
    return "Enjoy a cheeseburger 🍔";
  }
  else if (num == 1){
    return "Have some ice cream sundae 🍨";
  }
  else if (num == 2){
    return "Sip on some root beer 🥤";
  }
  else if (num == 3){
    return "I hope you like tofu 😋";
  }  
  else {
      return "You get nothing to eat 😳 sorry!";
  }
}

