// 1.
// function isPalindrome(str) {
//     var strLength = str.length;
//     var result = '';
//     for (var i = 0; i < strLength; i++) {
//         if (str[i] === str[strLength - 1 - i]) {
//               result = 'yes';
//       } else {
//         result = 'no';
//         return result;
//       }
//     }
//     return result;
// }
// console.log(isPalindrome('alla'));
// console.log(isPalindrome('abcded'))


// 2

// function isValid(string) {
//     if (typeof string !== 'string') {
//         return 'Incorect' 
//     } 
//      if (string.length < 2 && string.length > 20) {
//         return "invalid"
//     }
//     if (string[0] !== string[0].toUpperCase()) {
//         return "invalid"
//     }
 
//     var arr = [" ", "!", ":", "-", "?", ".", ","]
//     var result =""
//     for (var i = 0; i < string.length; i++) {
//         var ISlOWER = string[i] !== string[i].toUpperCase()
//         var condition = ISlOWER ? string[i].toUpperCase() !== string[i] : string[i].toLowerCase() !== string[i]
//             if (arr.indexOf(i) !== -1 || condition) {
//                 result = "VALID"
           
//             } else {
//                return "INVALID"
//         }
//         return result
//     }
// }
// console.log(isValid('Siuyhub()'))

// 3
// var result = 0;
// function sumNumber(strNumber, number) {
//     if (number % 3 === 0 && number % 5 === 0 && number % 15 === 0) {
//         var multiplai = number * -1;
//         result = multiplai + +strNumber
//     }
//     return result
// }
// console.log(sumNumber('10', 15));

// 4
// 4) Создайте функцию, которая проверяет число на соответствие трем различным требованиям:
// - число простое
// - число четное
// - число кратно 10
// Каждый должен возвращать истину или ложь, которые должны быть представлены в виде массива.
// Число всегда будет целым, положительным или отрицательным. Обратите внимание, что
// отрицательные числа не могут быть простыми числами, но могут быть кратными 10.
// checkNumber(7)  // ==> [true,  false, false] 
// checkNumber(-10) // ==> [false, true,  true]

// var array = [];
// function checkNumber(value) {
// if (value % 2 === 1) {
//         array.push(true)
//     } else if (value % 2 === 0) {
//         array[0] = true
// } else if (value % 10 === 0) {
//     array[1] = true
// } else {
//     array[0]= false
//     }
//     return array
// }

// console.log(checkNumber(7))