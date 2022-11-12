let readline = require('readline-sync'); // Khai báo thư viện
/*Diện tích hình chữ nhật*/
let w = Number(readline.question('Nhap chieu ngang:  '));
let h = Number(readline.question('Nhap chieu doc:  '));
let S = w*h;
console.log('Dien tich hcn = ', S);