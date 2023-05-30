let num = +prompt("Введите число что бы возвести в 2 степень:");
let average = (num**2);
alert("Число^2: " + average);

let num1 = +prompt("Введите первое число для вычисления среднего арефметического:");
let num2 = +prompt("Введите второе число для вычисления среднего арефметического:");
let average1 = (num1 + num2) / 2;
alert("Среднее арефметическое: " + average1);

let num3 = +prompt("Введите длинну стороны чтобы узнать площадь квадрата");
let average2 = (num3*num3);
alert("Площадь квадрата: " + average2);

let num4 = +prompt("Введите километры чтобы перевести в мили");
const mile = 0.621371
let average3 = (num4*mile);
alert("Мили: " + average3);

let num5 = +prompt("Введите первое число чтобы узнать сумму, разницу, произведение, частное:");
let num6 = +prompt("Введите второе число чтобы узнать сумму, разницу, произведение, частное:");
let sum = num5 + num6;
let difference = num5 - num6;
let product = num5 * num6;
let quotient = num5 / num6;
alert("Сумма: " + sum);
alert("Разница: " + difference);
alert("Произведение: " + product);
alert("Частное: " + quotient);

let a = +prompt("Введите значение (a) для вычисления (x):");
let b = +prompt("Введите значение (b) для вычисления (x):");
let x = -b / a;
alert("Значение (x): " + x);

let hours1 = +prompt("Введите текущие часы:");
let minutes1 = +prompt("Введите текущие минуты:");
let hours2 = 24 - hours1 -1;
let minutes2 = 60 - minutes1;
alert("До следующего дня осталось: " + hours2 + " часов " + minutes2 + " минут.");

let numb7 = +prompt("Введите трехзначное число:");
let numb8 = Math.floor((numb7 % 100) / 10);
alert("Вторая цыфра этого числа: " + numb8);

let numb9 = prompt("Введите пятизначное число:");
let numb10 = numb9.slice(-1,);
let numb11 = numb9.slice(0, -1);
let result1 = numb10;
alert("Результат: " + result1);

let numb12 = +prompt("Введите общую сумму продажи за месяц:");
let numb13 = 250
let numb14 = numb12 * 0.1;
let result2 = numb14 + numb13;
alert("Общая запрата: " + result2);
