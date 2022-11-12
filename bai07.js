let readline = require('readline-sync'); // Khai báo thư viện
let n = Number(readline.question('Nhap so:  '));
//Xử lý
let donVi, chuc, tram; //Khai báo 3 biến cùng lúc
donVi = n % 10;
chuc = parseInt(n / 10) % 10;
tram = parseInt(n / 100);
//Xuất: Kết quả
console.log('Don vi: ', donVi);
console.log('Chuc: ', chuc);
console.log('Tram: ', tram);

