 let num = 9; // "009"
 if(num<10){
    console.log("00"+ num)
 }

 
// // Test Case 2
 let number = 20; // "020"
 if(number>10 && number<100){
        console.log("0" + number)
  }

// // Test Case 3
 let number2 = 110; // "110"
  if(number2>=100){
     console.log(number2) 
   }

   //تكليف2
    let num1 = 9;
 let str = "9";
 let str2 = "20";
 if(num1==str){
   console.log(
 "{num1} Is The Same Value As {str}");

 }
 if (num1==str && typeof num1!== typeof str ){
 console.log(
`${num1} Is The Same Value As ${str} But Not The Same Type`);
}
// // Output
// "{num1} Is The Same Value As {str}"
// "{num1} Is The Same Value As {str} But Not The Same Type"
// "{num1} Is Not The Same Value Or The Same Type As {str2}"
// "{str} Is The Same Type As {str2} But Not The Same Value"

//************************************************ ***//

// [ Arrays And Methods ]
//تكليف1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num3 = 3;

console.log(myFriends.slice(0, num3)); // ["Ahmed", "Elham", "Osama"]

console.log(myFriends.filter((_, index) => index < num3)); // ["Ahmed", "Elham", "Osama"]

//تكليف2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends.shift(); 
friends.pop(); 
console.log(friends); // ["Eman", "Osama"]

//تكليف3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
console.log(finalArr = arrTwo.reverse().concat(arrOne.reverse()));

//************************************************ ***//
//for loop
//تكليف1
 let start = 10;
 let end = 100;
 let exclude = 40;
   for(i=start ; i<=end ; i+=10){
    if(i==40){
            continue;
    }
      console.log(i);
 }

 //تكليف2
  let start2 = 10;
let end2 = 0;
 let stop = 3;
   for(i=start2 ; i>=stop ; i--){
   console.log("0" + i)
 }

 //تكليف4
 let index = 10;
let jump = 2;

for (i=index;i>jump;i-=2) {
 console.log(i)
}


//************************************************ ***//
//************************************************ ***//
//function
//تكليف1
function sayHello(theName, theGender) {
  if (theGender === "Male") {
    console.log( `Hello Mr ${theName}`);
  } else if (theGender === "Female") {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log( `Hello ${theName}`);
  }
}
//تكليف2

function checkStatus(a, b, c) {
  let name;
  let age;
  let status;

  if (typeof a === "string") name = a;
  else if (typeof a === "number") age = a;
  else if (typeof a === "boolean") status = a;

  if (typeof b === "string") name = b;
  else if (typeof b === "number") age = b;
  else if (typeof b === "boolean") status = b;

  if (typeof c === "string") name = c;
  else if (typeof c === "number") age = c;
  else if (typeof c === "boolean") status = c;

  if (status === true) {
    console.log(`Hello ${name}, Your Age Is ${age}, You Are Available For Hire`);
  } else {
    console.log(`Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`);
  }
}

//تكليف5

function createSelectBox(startYear, endYear) {
    const select = document.createElement("select");
  for(let i= startYear;i<=endYear;i++){
    const option = document.createElement("option");
    option.value=i;
    option.textContent=i;
    select.appendChild(option);
  }
  document.body.appendChild(select);
}
createSelectBox(2000, 2021);

//Arrow function 
//تكليف 2
const itsMe = () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

const urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org"));