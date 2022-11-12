let readline = require('readline-sync'); // Khai báo thư viện

/*Nhập giá trị vào 2 biến a,b. Ép qua kiểu Number trước khi lưu vào a*/
let a = Number(readline.question('Nhap a:  '));
let b = Number(readline.question('Nhap b:  '));
/* Xử lý phép chia*/
let c = a/b;
let d = a + b;
//Xuất: Kết quả
console.log('a/b = ', c);