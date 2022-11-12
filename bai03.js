let readline = require('readline-sync'); // Khai báo thư viện
let x = Number(readline.question('Nhap x:  '));
let y = Number(readline.question('Nhap y:  '));

/*Tổng bình phương*/
let c = x**2 + y**2;
console.log('x**2 + y**2 = ', c);