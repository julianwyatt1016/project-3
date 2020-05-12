// jshint esversion: 6

let phrase = "Hello!";

let sayHello = () => {

  if (true) {
    alert("1: ")
    alert(phrase);
  }
  else{
    alert("2: ")
    alert(phrase);
  }
}

let faveFn = () => {
  //my fav phrase
  phrase = "I want to go outside!";
  alert("4:");
  alert(phrase)
}

faveFn();
sayHello();


alert("3: ")
alert(phrase); //Error, no such variable!
