let numberOne = 10;
let numberTwo = 20;

// Ouput
console.log(numberOne + "" + numberTwo); // Normal Concatenate => 1020
console.log(typeof (numberOne + "" + numberTwo)); // Normal Concatenate => String

console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => String

console.log(numberTwo + "\n" + numberOne);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberTwo}
${numberOne}`);
/*
  Template Literals Way
  20
  10
*/
//تكليف2
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

//************************************************ ***//


//operators 
//تكليف 1
console.log(10 * 20 * 15 % 3 * 190 / 10 * 400); // 0

//تكليف2
let num = 3;

// Solution One
console.log(num + num);

// Solution Two
console.log(num * (true + true));

// Soultion Three
console.log(num + (true + true + true));

// Soultion Four
console.log(num * true + num * true);

// Solution Five
console.log("ab".repeat(num).length);

// Solution Six
console.log(
  Array(num).fill(true).concat(Array(num).fill(true)).length
);


//************************************************ ***//


//numbers 
//تكليف1
// Your Solutions
console.log(1e5);                 // 100000 (Scientific Notation)
console.log(10 ** 5);             // 100000 (Exponentiation Operator)
console.log(100000.0);            // 100000 (Float)
console.log(+"100000");           // 100000 (Unary Plus)
console.log(Number("100000"));    // 100000 (Number Constructor)
console.log(parseInt("100000"));  // 100000 (parseInt)
console.log(Math.pow(10, 5));      // 100000 (Math Method)
console.log(1e6 / 10);             // 100000 (Arithmetic once)
console.log(50000 << 1);           // 100000 (Bitwise Shift)
console.log((100000).valueOf());  // 100000 (valueOf)


//تكليف2
console.log(Math.abs(Number.MIN_SAFE_INTEGER)); // 9007199254740991

//تكليف3
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16
//تكليف4
let myVar = "100.56789 Views";
console.log(parseInt(myVar));           // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.
//تكليف5
let number = 10;

console.log(Number.isInteger(number) + Number.isInteger(number)); // 2


//************************************************ ***//

//Strings And Methods
//تكليف1
let userName = "Elzero";

// Solution One
console.log(userName[0].toLowerCase());

// Solution Two
console.log(userName.charAt(0).toLowerCase());

// Solution Three
console.log(userName.slice(0, 1).toLowerCase());

// Solution Four
console.log(userName.substring(0, 1).toLowerCase());

// Solution Five
console.log(userName.substr(0, 1).toLowerCase());

// Solution Six (repeat 3 times)
console.log(userName[0].toLowerCase().repeat(3));

//تكليف2
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";
console.log(word.toLowerCase().includes(letterZ.toLowerCase())); // True
console.log(word[0].toLowerCase() === letterE.toLowerCase()); // True
console.log(word[word.length - 1].toLowerCase() === letterO.toLowerCase()); // True


//************************************************ ***//

//Comparison & Logical Operators 
//تكليف1
console.log(100 == "100");      // true
console.log(100 < 1000);        // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 != "-10");      // true
console.log(-50 < 0 && "-40" > -100); // true
console.log(10 > 0 && -"-40" < 50); // true
console.log("10" == 10);        // true
console.log(Boolean(20) && !false);       // true



//تكليف2
let num1 = 10;
let num2 = 20;

// Solution 1: Greater than
console.log(num2 > num1); // true

// Solution 2: Less than
console.log(num1 < num2); // true

// Solution 3: Not equal
console.log(num1 != num2); // true

// Solution 4: Strict not equal
console.log(num1 !== num2); // true

// Solution 5: Logical OR (both truthy)
console.log(!!num1); // true

// Solution 6: Logical AND (both truthy)
console.log(num1 < num2 && num2 > num1); // true