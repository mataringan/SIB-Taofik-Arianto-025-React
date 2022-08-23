// Deklarasi Variable dengan Let
alert("Deklarasi Variable");
let playerName = "Taofik Arianto";
alert(playerName);
playerName = "Mataringan";
alert(playerName);
const result = 3.14;
// result = 5.12;  error karena const tidak bisa dirubah valuenya

// Tipe Data
alert("Tipe Data JavaScript");
// Tipe Data Number
alert("Tipe Data Number");
let weight = 75;
alert(weight + 15);

let originalNum = 23;
let newNum = originalNum + 7;
alert(newNum);

let number1 = 10;
let number2 = 10;
let result2 = number1 + number2;
alert(newNum);

alert("Tipe Data String");
alert("Hello Hacktiv8");

let message = "welcome!";
alert(message);
message = "bye, bye";
alert(message);
message = "He's a great person";
// message = 'He\'s a great person';
alert(message);

let htmlSnippet = '<h1 class="header">This is a header</h1>';
// htmlSnippet = "<h1 class=\"header\">This is a header h1</h1>"
alert("Menggabungkan String");
let visitor = prompt("What is your name: ");
// let messageVisitor = "Halo " + visitor;
// alert(messageVisitor);
// let messageVisitor =
//   "Halo " +
//   visitor +
//   ".Selamat datang di kelas Modern JavaScript!" +
//   "Kita senang sekali kamu mau datang berkunjung. " +
//   visitor +
//   ". Semoga kamu berkenan datang kembali untuk belajar bersama.";
let messageVisitor = "Halo " + visitor;
messageVisitor =
  messageVisitor + ". Selamat datang di kelas Modern Javascript!";
messageVisitor += " Kita senang sekali kamu mau datang berkunjung. ";

messageVisitor +=
  visitor + ". Semoga kamu berkenan datang kembali untuk belajar bersama.";

alert(messageVisitor);

alert("Tipe Data Boolean");
let isRaining = true;
let isFinished = false;
alert(isRaining);

alert("Array");

// Deklarasi Array
alert("Deklarasi Array");
var kode = ["React", "Php", "Ruby"];
// let kode = ["React", "Php", "Ruby"];
// const kode = ["React", "Php", "Ruby"];

// Operasi Array
alert("Operasi Array");
// Merge 2 Array
alert("Merge 2 Array");
var fruits = ["Anggur", "Melati", "Apel", "Jeruk"];
var buah_buahan = ["Strawberry", "Pir", "Durian"];
// let merge = fruits.push.apply(fruits, buah_buahan);
// console.log(merge);
// fruits.push(buah_buahan);
alert(fruits);

alert("Menghapus item pada Array");

var indexHapus = 1;
fruits.splice(indexHapus, 1);
alert(fruits);

alert("Mengkosongkan Array");
var fruits2 = ["Pepaya", "Rambutan", "Nangka"];
fruits2.splice(0, fruits2.length);
console.log(fruits2);
