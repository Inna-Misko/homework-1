// 1.	Получить строковое название дня недели по номеру дня.
// function getWeekName(day) {
//     switch (day) {
//         case 1:
//             return 'Monday';
//         case 2:
//             return 'Tuesday';
//         case 3:
//             return 'Wednesday';
//         case 4:
//             return 'Thuesday';
//         case 5:
//             return 'Friday'
//         case 6:
//             return 'Saturday'
//         case 7:
//             return 'Sunday'
//         default:
//             return 'No such day, enter from 1 to 7'
//     }
// }
// console.log(getWeekName(2))

// 2.	Найти расстояние между двумя точками в двухмерном декартовом пространстве.

// function getDistance(ax, ay, az, bx, by, bz){
//     var res = 0

//     res=((bx-ax)**2+(by-ay)**2+(bz-az)**2)**0.5
//     return res
// }

// console.log(getDistance(1, 4, 5 , -1, 4, 7))


// 3.	Вводим число(0-999), получаем строку с прописью числа.

// function getNameNumber(num){
//   if( num > 999 || num < 0){
//     return 'Ваше число вне диапазона'
//   } else if(num == 0) {
//     return 'ноль'
//   } else {
//     var strNum = String(num)
//     var result = ''
//     if(strNum.length < 3){
//         var i = 0
//         while(astrNum.length <3){
//             strNum ='0'+ strNum
//             i++
//         }
//     }

//     switch (strNum[0])
//     {
//       case '1': result='сто '; 
//       break;
//       case '2': result = 'двести '; 
//       break;
//       case '3': result = 'триста '; 
//       break;
//       case '4': result = 'четыреста '; 
//       break;
//       case '5': result = 'пятьсот '; 
//       break;
//       case '6': result = 'шестьсот '; 
//       break;
//       case '7': result = 'семьсот '; 
//       break;
//       case '8': result = 'восемьсот '; 
//       break;
//       case '9': result = 'девятьсот '; 
//       break;
//       default: 
//       break;
//     }
//     if(strNum[1]==1){
//       switch (strNum[2])
//       {
//         case '0': result+='десять'; 
//         break;
//         case '1': result +='одинадцать'; 
//         break;
//         case '2': result += 'двенадцать'; 
//         break;
//         case '3': result += 'тринадцать'; 
//         break;
//         case '4': result += 'четырнвдцать'; 
//         break;
//         case '5': result += 'пятнадцать'; 
//         break;
//         case '6': result += 'шестнадцать'; 
//         break;
//         case '7': result += 'семнадцать'; 
//         break;
//         case '8': result += 'восемнадцать'; 
//         break;
//         case '9': result += 'девятнадцать'; 
//         break;
//         default: 
//         break;
//       }
//     }
//     else{
//       switch (strNum[1])
//       {
//         case '2': result += 'двадцать '; 
//         break;
//         case '3': result += 'тридцать '; 
//         break;
//         case '4': result += 'сорок '; 
//         break;
//         case '5': result += 'пятьдесят '; 
//         break;
//         case '6': result += 'шестьдесят '; 
//         break;
//         case '7': result += 'семьдесят '; 
//         break;
//         case '8': result += 'восемьдесят '; 
//         break;
//         case '9': result += 'девяносто '; 
//         break;
//         default: 
//         break;
//       }
//       switch (strNum[2])
//       {
//         case '1': result +='один'; 
//         break;
//         case '2': result += 'два'; 
//         break;
//         case '3': result += 'три'; 
//         break;
//         case '4': result += 'четыре'; 
//         break;
//         case '5': result += 'пять'; 
//         break;
//         case '6': result += 'шесть'; 
//         break;
//         case '7': result += 'семь'; 
//         break;
//         case '8': result += 'восемь'; 
//         break;
//         case '9': result += 'девять'; 
//         break;
//         default: 
//         break;
//       }
//     }
//     return result
//   }
// }

// console.log(getNameNumber(456))

// 4.	Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число
function getNumber(str) {
    var tens = ["сто", "десять","двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто" ];
    var ones = ["", "один", "два", "три", "четыре", "пять", "семь", "шесть", "восемь", "девять", "десять", "одинадцать", "двенадцадь", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать",
  ];
    var hundrets = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];

}