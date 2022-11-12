let readline = require('readline-sync'); // Khai báo thư viện
/*Điểm trung bình*/
let a = Number(readline.question('Nhap diem Toan:  '));
let b = Number(readline.question('Nhap diem Ly:  '));
let c = Number(readline.question('Nhap diem Sinh:  '));
let d = Number(readline.question('Nhap diem Anh:  '));
let e = (a + b + c +d)/4;
console.log('Diem trung binh cua ban la: ', e);