// Push al frente
let arr = [1, 2, 3, 4, 5];
let value = 0;

function pushFront(arr, value) {
  let newArr = [];
  newArr[0] = value;
  for (let i = 0; i < arr.length; i++) {
    newArr[i + 1] = arr[i];
  }
  return newArr;
}

console.log(pushFront(arr, value));

// Pop al frente

let myArr = [6, 7, 8, 9, 10];

function popFront(myArr) {
  let newArr = [];
  newArr[0] = myArr[myArr.length - 1];
  for (let i = 0; i < myArr.length - 1; i++) {
    newArr[i + 1] = myArr[i];
  }
  return newArr;
}

console.log(popFront(myArr));

// Insertar en

let anotherArr = [10, 20, 30, 40, 50];
let aditional = 100;

function insertAt(arr, index, val) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === index) {
      newArr[i] = val;
    } else {
      newArr[i] = arr[i];
    }
  }
  return newArr;
}

console.log(insertAt(anotherArr, 0, aditional));
console.log(insertAt(anotherArr, 2, aditional));

// Eliminar en

let otherArr = [12, 13, 14, 15, 16];

function removeAt(arr, index) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === index) {
      newArr[i] = arr[i + 1];
    } else {
      newArr[i] = arr[i];
    }
  }
  return newArr;
}

console.log(removeAt(otherArr, 0));
console.log(removeAt(otherArr, 2));

// Pares de intercambio

let arraySwap = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function swapPairs(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.length % 2 !== 0 && i === arr.length - 1) {
      newArr[i] = arr[i];
    } else {
      newArr[i] = arr[i + 1];
      newArr[i + 1] = arr[i];
      i++;
    }
  }
  return newArr;
}

console.log(swapPairs(arraySwap));

// Eliminar duplicados

let arrayDuplicates = [
  1, 1, 1, 1, 4, 4, 5, 5, 5, 5, 5, 5, 7, 8, 9, 9, 9, 12, 16, 19, 19, 19, 19, 19,
];

function removeDuplicates(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr;
}

console.log(removeDuplicates(arrayDuplicates));
