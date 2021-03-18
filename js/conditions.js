// Task 1 Если а – четное посчитать а*б, иначе а+б
// var a = 4;
// var b = 2;
// var result = a % 2 === 0 ? a * b : a + b;
// console.log(result)



// Task 2	Определить какой четверти принадлежит точка с координатами (х,у)

// var x = prompt('Введите координатy x:', );
// var y = prompt('Введите координатy y:', );

// if (x > 0 && y > 0) {
//     alert('Точка находится в 1 четверти!')
// } else if (x < 0 && y > 0) {
//     alert('Точка находится в 2 четверти!')
// } else if (x < 0 && y < 0) {
//     alert('Точка находится в 3 четверти!')
// } else if (x > 0 && y < 0) {
//     alert('Точка находится в 4 четверти!')
// } else if (x == 0 && y == 0) {
//     alert('Точка находится на пересечении координаты х с у!')
// } else {
//     alert('Точка вне координат')
// }




// // Task 3	Найти суммы только положительных из трех чисел

// var array = [2, -3, 5];
// var sum = 0;
// for (var i = 0; i <= array.length; i++) {
//     if (array[i] > 0) {
//         sum += array[i]
//     }
// }
// console.log(sum)



// // Task 4	Посчитать выражение (макс(а*б*с, а+б+с))+3

// var a = prompt('Введите значение a:', '');
// var b = prompt('Введите значение b:', '');
// var c = prompt('Введите значение c:', '');
// var multiplication = a * b * c;
// var sum = a + b + c;
// var result = 0;

// if (multiplication > sum) {
//     result = multiplication + 3;
// } else {
//     result = sum + 3;
// }

// console.log(result);

// Task 5	Написать программу определения оценки студента по его рейтингу, на основе следующих правил

// var studentGrade = '';
// var studentRaiting = prompt('Введите свой рейтинг для получения оценки:');

// if (studentRaiting < 19) {
//     studentGrade = 'F';
// } else if (studentRaiting > 20 && studentRaiting < 39) {
//     studentGrade = 'E';
// } else if (studentRaiting > 40 && studentRaiting < 59) {
//     studentGrade = 'D';
// } else if (studentRaiting > 60 && studentRaiting < 74) {
//     studentGrade = 'C';
// } else if (studentRaiting > 75 && studentRaiting < 89) {
//     studentGrade = 'B';
// }else if (studentRaiting > 90 && studentRaiting < 100) {
//     studentGrade = 'A';
// } else {
//     console.log('Нет такого рейтинга. Введите от 0 до 100')
// }

// console.log(studentGrade)