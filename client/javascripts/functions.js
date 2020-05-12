//jshint esversion: 6


//fill an array with the numbers from start to stop, in steps of step



let fillArray = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);


//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);




//log the array for inspection
//console.log(arrOf1To100);




let bitBatBotOrNot = (n) => {
   //your code goes here
   let result = "";
   if (n % 3 ==0){
     result = `${result}Bit`;
   }
   if (n % 5 == 0){
     result = `${result}Bat`;
   }
   if (n % 7 ==0){
     result = `${result}Bot`;
   }
   if ((n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0)) {
     result = `${result}Not`;
   }
   return result;
};



//findAllbitBatBotOrNots1
let findAllbitBatBotOrNots1 = (arr) => {

let mapArray = arr.map(bitBatBotOrNot);
return mapArray;

}
findAllbitBatBotOrNots1(arrOf1To100);



//findAllbitBatBotOrNots2
let findAllbitBatBotOrNots2 = (arr) => {
   //your code goes here
   //use for statement
   let result2 = [];
   for (var i = 0; i < arr.length; i++) {
    result2 = result2 + (i+1)+ ": " + (bitBatBotOrNot(arr[i])) + ", ";
   }
   return result2;
}
findAllbitBatBotOrNots2(arrOf1To100);


/*

let findAllbitBatBotOrNots3 = (arr) => {
   //your code goes here
   //use for..of statement
}

let findAllbitBatBotOrNots4 = (arr) => {
   //your code goes here
   //use forEach method
}

//test the functions





findAllbitBatBotOrNots3(arrOf1To100)

findAllbitBatBotOrNots4(arrOf1To100)
*/
