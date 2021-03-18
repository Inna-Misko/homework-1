// Task 1	Найти сумму четных чисел и их количество в диапазоне от 1 до 99
// var array = [];
// var sum = 0;
// for (var i = 1; i <= 99; i++) {
//     if (i % 2 === 0) {
//         array.push(i)
//         var lengthArray = array.length
//         for (var j = 2; j <= lengthArray; j ++) {
//             sum += j
//         }
//     }
// }
// console.log('количество четных чисел:', lengthArray)
// console.log('Сумма четных чисел', sum)



// Task 2	Проверить простое ли число? 
// (число называется простым, если оно делится только само на себя и на 1)

// let n = prompt('Введите число для проверки:', '');
//     if (n % 2 === 1) {
//         console.log('Чило простое!')
//     } else {
//         console.log('Чило не простое!')
//     }



// Task 3	Найти корень натурального числа с точностью до целого 
// (рассмотреть вариант последовательного подбора и метод бинарного поиска)

// var n = parseInt(prompt('Введите число чтобы узнать его корень:'))
// var low = 0;
// var mid = 0;
// var high = n;

// while ((high-low) > 1) {
//     mid = Math.floor((high+low)/2);
//     if ((mid*mid) <= n){
//         low = mid;
     
//     } else {
//         high = mid;
    
//     }
// }
// console.log(low);


// // 4.	Вычислить факториал числа n. n! = 1*2*…*n-1*n;
// var value = prompt('Введите факториал:')
// function getFactorial(num) {
//     var factorial = 1

//     for (let i = 1; i < num + 1; i++) {
//         factorial = factorial * i
//     }

//     return factorial
// }
//  console.log(getFactorial(10))


// // 5.	Посчитать сумму цифр заданного числа
// var number = prompt("Введите число:")
// var sum = 0;
// for (var i = 0; i <= number; i++) {
// sum += i
// }
// console.log(sum)


// 6.	Вывести число, которое является зеркальным отображением
// последовательности цифр заданного числа, например, задано число 123, вывести 321.

// var value = prompt("Введите значение");
// var b = 0;
// var sum = 0;

// while(value > 0) {
//     b = value % 10;
//     sum = sum * 10 + b;
//     console.log(sum)
//     value = parseInt(value / 10);
// }
// alert(sum);