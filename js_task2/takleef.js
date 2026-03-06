let userName = "Elzero";
console.log(userName[0].toLowerCase());
console.log(userName.charAt(0).toLowerCase());
console.log(userName.slice(0, 1).toLowerCase());
console.log(userName.substring(0, 1).toLowerCase());
console.log(userName.substr(0, 1).toLowerCase());
console.log(userName[0].toLowerCase().repeat(3));


let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";
console.log(word.toLowerCase().includes(letterZ.toLowerCase())); 
console.log(word.startsWith(letterE.toUpperCase())); 
console.log(word.endsWith(letterO.toLowerCase())); // تم تصحيح الخطأ هنا


let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
console.log(myFriends.slice(myFriends.indexOf("Ahmed"), num)); 
myFriends.length = num;
console.log(myFriends); 


let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends.shift(); 
friends.pop();   
console.log(friends);


let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
finalArr = finalArr.concat(arrOne, arrTwo).sort().reverse();
console.log(finalArr);


let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
console.log(words[website.length][0].slice(website.length).toUpperCase());


let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
if (haystack.includes(needle)) { console.log("Found"); }
if (haystack.indexOf(needle) !== -1) { console.log("Found"); }
if (haystack.lastIndexOf(needle) !== -1) { console.log("Found"); }



let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];
allArrs = (arr2.slice(arr2.indexOf("F")).join("") + arr1.slice(arr1.indexOf("X")).join("")).toLowerCase();
console.log(allArrs);




let birthDate = new Date("1990-10-25"); 
let dateNow = new Date(); 
let diff = dateNow - birthDate;
let seconds = Math.floor(diff / 1000);
let minutes = Math.floor(seconds / 60);
let hours = Math.floor(minutes / 60);
let days = Math.floor(hours / 24);
let months = Math.floor(days / 30); 
let years = Math.floor(days / 365); 
console.log(`"${seconds} Seconds"`);
console.log(`"${minutes} Minutes"`);
console.log(`"${hours} Hours"`);
console.log(`"${days} Days"`);
console.log(`"${months} Months"`);
console.log(`"${years} Years"`);