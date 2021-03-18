// 1.	Найти минимальный элемент массива
// 2.	Найти максимальный элемент массива
// 3.	Найти индекс минимального элемента массива
// 4.	Найти индекс максимального элемента массива 
// var myArray = [2, 34, 4, 6,32]
// var min = myArray[0];
// var max = min;
// var idxMax = 0;
// var idxMin = 0;
//   for (var i = 1; i < myArray.length; ++i) {
//       if (myArray[i] > max) {
//           max = myArray[i]
//           idxMax = myArray.indexOf(max)
//       };
//       if (myArray[i] < min) {
//              min = myArray[i]
//           idxMin = myArray.indexOf(min)
//       };
//   }
// console.log(min)
// console.log(max)
// console.log(idxMax)
// console.log(idxMin)

// 5.	Посчитать сумму элементов массива с нечетными индексами
// var arr = [12, 3, 15, 32, 4];
// var sum = 0;

// for (var i = 0; i < arr.length; i++) {
//     var idx = arr.indexOf(arr[i]);
//     if (idx % 2 === 1) {
// sum += arr[i]
//     }
// }
// console.log(sum)

// 6.	Сделать реверс массива (массив в обратном направлении)
// var arr = [1,2,3,4,5,6,7,8,9,10]
// var newArr = [] 
// var index = 0;
// for (var i = arr.length; i > 0; i--) {
//     index = arr.length - i;
//     console.log(arr[i])
//     newArr[i] = arr[index];
// }
// console.log(newArr);

// 7.	Посчитать количество нечетных элементов массива
// var newArray = [2, 34, 21, 13, 5];
// var sum = 0;
// for (var i = 0; i < newArray.length; i++) {
//     if (newArray[i] % 2 === 1) {
//         sum += newArray[i]
//     }
// }
// console.log(sum)

// 8.	Поменять местами первую и вторую половину массива, например, для массива 
// 1 2 3 4, результат 3 4 1 2

// var arr = [1, 2, 4, 5, 4 ,1]
// var midle = arr.length / 2
// var fistArr = arr.slice(0, midle)
// var secondArr = arr.slice(midle, arr.length)
// var newArr = secondArr.concat(fistArr)
// console.log(newArr)


// 9.	Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert)) 
// function bubble(arr){
//     var newArr = []

//   for (var j = 0; j < arr.length; i++) {
      
//     for (var i = 0; i < arr.length; i++) {
//           console.log(arr[i])
//             if (arr[i] > arr[i+1]) {
//                 var f = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i + 1] = f
//             }
//         }
//         newArr[arr.length-1] = arr[arr.length-1]
//         arr.pop()
//     }
//     return newArr
// }
// console.log(bubble([6, 34, 3, 5, 36, 2, 15]))


// const selectionSort = arr => {
//   var arrLength = arr.length;
//   var idxLast = arrLength - 1
//     for (let i = 0; i < idxLast; i++) {
//         let indexMin = i;
//       for (let j = i + 1; j < arrLength; j++) {
//           console.log(j)
//             if (arr[indexMin] > arr[j]) {
//                 indexMin = j;
//             }
//         }
//         if (indexMin !== i) {
//             [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
//         }
//     }
//     return arr;
// };

// console.log(selectionSort([33,5,32,13,6,3,8,22]))


// function insertSort(arr){
//     for (var i = 1; i < arr.length; i++) {
//         var t = arr[i];
//         var j = i;
//         while (j > 0 && arr[j - 1] > t) {
//             arr[j] = arr[j - 1];
//             j--;
//         }
//         arr[j] = t;
//     }
//     return arr
// }

// // console.log(insertSort([5, 48, 3, 10, 11, 2, 15]))

