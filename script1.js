let num = +prompt("Введите число:");
let average = (num**2);
alert("Вторая степень: " + average);

let num1 = +prompt("Введите первое число:");
let num2 = +prompt("Введите второе число:");
let average1 = (num1 + num2) / 2;
alert("Середнє арифметичне: " + average1);

let num3 = +prompt("Введите длинну стороны");
let average2 = (num3*num3);
alert("Площадь квадрата: " + average2);

let num4 = +prompt("Введите километры");
const mile = 0.621371
let average3 = (num4*mile);
alert("Мили: " + average3);

let num5 = +prompt("Введите первое число:");
let num6 = +prompt("Введите второе число:");
let sum = num5 + num6;
let difference = num5 - num6;
let product = num5 * num6;
let quotient = num5 / num6;
alert("Сумма: " + sum);
alert("Разница: " + difference);
alert("Умножение: " + product);
alert("Деление: " + quotient);

let a = +prompt("Введите значение a:");
let b = +prompt("Введите значение b:");
let x = -b / a;
alert("Значение x: " + x);

let hours1 = +prompt("Введите текущие часы:");
let minutes1 = +prompt("Введите текущие минуты:");
let hours2 = 24 - hours1 -1;
let minutes2 = 60 - minutes1;
alert("До следующего дня осталось: " + hours2 + " часов " + minutes2 + " минут.");

let numb7 = +prompt("Введите трехзначное число:");
let numb8 = Math.floor((number % 100) / 10);
alert("Вторая цыфра этого числа: " + numb8);

let numb9 = +prompt("Введите пятизначное число:");
let numb10 = numb9.slice(-1);
let numb11 = numb9.slice(0, -1);
let result1 = numb10 + numb11;
alert("Результат: " + result1);

let numb12 = +prompt("Введите общую сумму продажи за месяц:");
let numb13 = 250
let numb14 = numb12 * 0.1;
let result2 = numb14 + numb13;
alert("Общая запрата: " + result2);
