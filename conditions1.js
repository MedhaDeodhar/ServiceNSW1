//Create a function that takes 3 parameters called floor, ceiling and num. All 3 parameters should be numbers. Return true if num is between floor and ceiling. Otherwise return false
+// 1 Create a function that takes 3 parameters called floor, ceiling and num. All 3 parameters should be numbers. Return true if num is between floor and ceiling. Otherwise return false
function isBetween(floor, ceiling, num) {
   if(num > floor && num < ceiling) {
       return true;
   } else {
       return false;
   }
}

// let ans1 = isBetween(12, 24, 15);
// console.log(ans1);

// let ans2 = isBetween(12, 24, 9);
// console.log(ans2);

// let ans3 = isBetween(12, 24, 30);
// console.log(ans3);

// let ans4 = isBetween(12, 24, 12);
// console.log(ans4);

// 2 Create a function that takes 1 parameter that is an object with 2 properties, name and age. Return true if the person's age is greater than 30 or their name contains the letter x (case insensitive). Otherwise return false

function checkNameAndAge(person) {
   let isOver30 = person.age > 30;
   let foundX = false;
   for (let i = 0; i < person.name.length; i++) {
       let letter = person.name[i].toLowerCase();
       if(letter == "x") {
           foundX = true;
           break;
       }
   }
   if(isOver30 || foundX) {
       return true;
   } else {
       return false;
   }
}

let person1 = {
   name: "Xavier",
   age: 29
}

// console.log(checkNameAndAge(person1));

let person2 = {
   name: "Dan",
   age: 24
}

// console.log(checkNameAndAge(person2));

let person3 = {
   name: "Dave",
   age: 37
}

// console.log(checkNameAndAge(person3));

let person4 = {
   name: "Xanathar",
   age: 45
}

// console.log(checkNameAndAge(person4));









