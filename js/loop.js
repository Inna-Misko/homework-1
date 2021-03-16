// Task 1	Найти сумму четных чисел и их количество в диапазоне от 1 до 99
var array = [];
var sum = 0;
for (var i = 1; i <= 99; i++) {
    if (i % 2 === 0) {
        array.push(i)
        var lengthArray = array.length
        for (var j = 2; j >= lengthArray; j ++) {
            sum += j
        }
    }
}
console.log('количество четных чисел:', lengthArray)
console.log('Сумма четных чисел', sum)