let readline = require('readline-sync'); // Khai báo thư viện

/*Đổi nhiệt độ*/
let F =  Number(readline.question('Nhap nhiet do F:  '));
let C = (5/9)*(F-32);
console.log('Nhiet do C: ', C);
