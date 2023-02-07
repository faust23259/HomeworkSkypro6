//Task 1

const array = [1, 5, 4, 10, 0, 2];

for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) break;
    console.log(array[i]);
};

//Task 2

const indexElement = [1, 5, 4, 10, 0, 3];
const index = indexElement.indexOf(4);
console.log(`Позиция числа равна ${index}`);

//Task 3

let joinArray = [1, 3, 5, 10, 20];

joinArray = joinArray.join('');
console.log(joinArray);

// Task 4

const numbers = [];
const numbersEven = [];
for (let n = 0; n < 10; n++) {
    numbers.push(Math.floor(Math.random() * 11));
}
console.log(numbers);

numbers.forEach(element => {
    if (element % 2 == 0) {
        numbersEven.push(element);
    }
});
console.log(numbersEven);

// Task 5

let arrayJoin = [];
for (let i = 0; i < 3; i++) {
    let subArray = [];
    for (let j = 0; j < 3; j++) {
        subArray.push(1);
    }
    arrayJoin.push(subArray);
}
console.log(arrayJoin);

// Task 6

const arrayShift = [1, 1, 1];

for (x = 3; x < 6; x++) {
    arrayShift.push(2)
}

console.log(arrayShift);

// Task 7

const arraySort = [9, 8, 7, 'a', 6, 5];

arraySort.sort();
console.log(arraySort);
arraySort.pop();
console.log(arraySort);

// Task 8

const arrayCheck = [9, 8, 7, 6, 5];
let checkNumber = Number(prompt('Введите число для проверки'));
let searchNumber = arrayCheck.includes(checkNumber);
console.log(searchNumber);

// Task 9

let textSort = 'abcdef';
let textSplit = textSort.split('');
textSplit.reverse()
let textJoin = textSplit.join('');
console.log(textJoin);

// Task 10

let arrayRandom = [];

for (let v = 0; v < 6; v++) {
    arrayRandom.push(Math.floor(Math.random() * 10 + 1));
}
console.log(arrayRandom);

let total = 0;

for (let v = 0; v < arrayRandom.length; v++) {
    total += arrayRandom[v];
}

let average = total / arrayRandom.length;

console.log(`Среднее арифметическое равно ${average}`);

// Task 11

const arrSplit = [[1, 2, 3,], [4, 5, 6]];
const arrFlat = arrSplit.flat()
console.log(arrFlat);

// Task 12

let arrSum = [];
for (let i = 1; i <= 10; i++) {
    arrSum.push(Math.floor(Math.random() * 10 + 1));
}
console.log(arrSum);

for (let i = 0; i < arrSum.length; i++) {

    if (i < arrSum.length - 1) {

        let sum = arrSum[i] + arrSum[i + 1];
        console.log(`Sum of elements at indices ${i} and ${i + 1}: ${sum}`);
    }
};