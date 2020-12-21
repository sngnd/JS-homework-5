//#region Привет, object
let user = new Object();
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
//#endregion

//#region Проверка на пустоту
const isEmpty = function(obj) {
    for (let key in obj) return false;
    return true;
};

let schedule = {};
console.log(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false
//#endregion

//#region Сумма свойств объекта
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

const getObjectSum = function(obj) {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    return sum;
};

console.log(getObjectSum(salaries));
//#endregion

//#region Умножаем все числовые свойства на 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

const multiplyNumeric = function(obj) {
    for (key in obj)
        if (typeof obj[key] === "number") obj[key] *= 2;
};

multiplyNumeric(menu);
console.log(menu);
//#endregion

//#region Сумма пользовательких чисел
const a = +prompt("First number");
const b = +prompt("Second number");
alert(a + b);
//#endregion

//#region Ввод числового значения
const readNumber = function() {
    do {
        num = prompt("Enter number");
    } while (!isFinite(num));
    if (num === null || num === "") return null;
    return +num;
};

console.log(readNumber());
//#endregion

//#region Cлучайное число от min до max
const random = function(min, max) {
    return Math.random() * (max - min) + min;
};

console.log(random(0, 10));
//#endregion

//#region Случайное целое число от min до max
const randomInteger = function(min, max) {
    return Math.trunc(Math.random() * (max + 1 - min) + min);
};

console.log(randomInteger(1, 3));
//#endregion

//#region Сделать первый символ заглавным
const ucFirst = function(str) {
    if (str != "") return str[0].toUpperCase() + str.slice(1);
};

console.log(ucFirst("string"));
//#endregion

//#region Проверка на спам
const checkSpam = function(str) {
    const upperCaseStr = str.toUpperCase();
    return upperCaseStr.includes("VIAGRA") || upperCaseStr.includes("XXX");
};

console.log(checkSpam("aaa viAgra xxx"));
console.log(checkSpam("aaa xxx f"));
console.log(checkSpam("aaaff"));
//#endregion

//#region Усечение строки
const truncate = function(str, maxlength) {
    return str.length > maxlength ? str.slice(0, maxlength) + "..." : str;
};

console.log(truncate("string", 4));
//#endregion

//#region Выделить число
const extractCurrencyValue = function(str) {
    return str.slice(1);
};

console.log(extractCurrencyValue("$320"));
//#endregion

//#region Операции с массивами
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-roll");
arrayMid = Math.floor(styles.length / 2);
styles[arrayMid] = "Classical";
console.log(styles.shift());
console.log(styles);
styles.unshift("Rap", "Reggae");
//#endregion

//#region Сумма введённых чисел
const getSum = function(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
};

const main = function() {
    let num;
    let nums = [];
    while (true) {
        num = +prompt("Enter value");
        if (num != "" && num && num != null) {
            nums.push(num);
        } else break;
    }
    return getSum(nums);
};

console.log(main());
//#endregion

//#region Подмассив наибольшей суммы
const getMaxSubSum = function(arr) {
    let maxSubSum = 0;
    let currentSubSum = 0;
    for (let i = 0; i < arr.length; i++) {
        currentSubSum = Math.max(0, currentSubSum + arr[i]);
        maxSubSum = Math.max(maxSubSum, currentSubSum);
    }
    return maxSubSum;
};

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([-1, -2, -3, -5]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
//#endregion

//#region Переведите текст вида border-left-width в borderLeftWidth
const camelize = function(str) {
    let strArr = str.split("-");
    let counter = 0;
    for (let i in strArr) {
        if (counter != 0) {
            let newWord = strArr[i][0].toUpperCase() + strArr[i].slice(1);
            strArr[i] = newWord;
        }
        counter++;
    }
    return strArr.join("");
};

console.log(camelize("background-image"));
//#endregion

//#region Фильтрация по диапазону
const filterRange = function(arr, a, b) {
    return arr.filter((item) => item >= a && item <= b);
};

const arr = [1, 4, 5, 6, 2, 8];
console.log(filterRange(arr, 4, 6));
//#endregion

//#region Фильтрация по диапазону "на месте"
const filterRangeInPlace = function(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
};

console.log(filterRangeInPlace(arr, 4, 6));
//#endregion

//#region Сортировать в порядке по убыванию
const arrNumForSort = [5, 2, 1, -10, 8];

console.log(arrNumForSort.sort((a, b) => b - a));
//#endregion

//#region Скопировать и отсортировать массив
let copySortArr = ["HTML", "JavaScript", "CSS"];
const sorted = (copySortArr) => copySortArr.slice(0).sort();
console.log(sorted(copySortArr));
//#endregion

//#region Подсчёт количества свойств объекта
let user2 = {
    name: "John",
    age: 30,
};

const count = function(obj) {
    return Object.keys(obj).length;
};

console.log(count(user2));
//#endregion