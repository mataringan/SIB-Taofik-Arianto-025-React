// variable es6
{
  var a = 10;
  let b = 200;
  const c = 300;

  console.log(`Variable a diluar scope ${a}`);
  console.log(`Variable b diluar scope ${b}`);
  console.log(`Variable c diluar scope ${c}`);

  function variable() {
    var a = 100;
    let b = 2000;
    const c = 3000;

    console.log(`Variable a didalam scope ${a}`);
    console.log(`Variable b didalam scope ${b}`);
    console.log(`Variable c didalam scope ${c}`);
  }

  variable();
}

// Arrow Function

// cara lama
const hitung = function (a, b) {
  return a + b;
};

hitung(1, 2);

// arrow function

const hitung2 = (a, b) => {
  return a + b;
};

// dipersingkat / implisit arrow
const hitung3 = (a, b) => a + b;

// arrow bisa disimpan di utility javascript
var a = [1, 2, 3, 4, 5];
a = a.map((v) => console.log(v));

var artist = "Fikar";
function playGig() {
  let instrument = ["Drum", "Gitar"];

  console.log(`Kita bermain musik dari ${artist}`);
}

playGig();

// default parameter
// cara lama
function greet(name, greeting) {
  name = typeof name !== "undefined" ? name : "Student";
  greeting = typeof greeting !== "undefined" ? greeting : "Welcome Back";

  return `${greeting} ${name}`;
}

function greet2(name = "student", greeting = "Welcome Kode") {
  return `${greeting} ${name}`;
}

// default parameter - arrow function
let greet3 =
  ((name = "student"),
  (greeting = "welcome") => {
    return `${greeting} ${name}`;
  });

console.log(greet3());

// Template Literals
function upper(s) {
  return s.toUpperCase();
}

var who = "Kode";

var text = `Selamat datang ${upper("Student")} ${who}`;

console.log(text);

// spread & rest
var [c, ...m] = [1, 2, 3, 4]; // m -> [2,3,4,5]

function foo(x, y, ...z) {
  console.log(x, y, ...z);
}

foo(1, 2, 3, 4, 5);

var params = ["Hello", true, 10];
var other = [1, 2, ...params, 3];

console.log(other);

// Destructuring
// array

// array help
// filter
var values = [1, 70, 30, 6, 50];

function lessThan20(val) {
  return val < 20;
}

var val20 = values.filter(lessThan20);

console.log(val20);

// find
var people = [
  {
    name: "Taofik",
    age: 20,
  },
  {
    name: "Aqilla",
    age: 9,
  },
  {
    name: "Dns",
    age: 32,
  },
];

function resAge(person) {
  return person.age > 10 && person.age < 30;
}

var result = people.find(resAge);
console.log("Belia yang ditemukan adalah: ", result);

// every
var people = [
  {
    name: "Taofik",
    age: 20,
  },
  {
    name: "Aqilla",
    age: 9,
  },
  {
    name: "Dns",
    age: 32,
  },
];

function resAge(person) {
  return person.age > 10 && person.age < 30;
}

var result = people.every(resAge);
console.log("Semua yang ada di array adalah belia: ", result);

// some
var people = [
  {
    name: "Taofik",
    age: 20,
  },
  {
    name: "Aqilla",
    age: 9,
  },
  {
    name: "Dns",
    age: 32,
  },
];

function resAge(person) {
  return person.age > 10 && person.age < 30;
}

var result = people.some(resAge);
console.log("Beberapa yang ada di array adalah belia: ", result);

// foreach
var colors = ["red", "green", "blue"];

function print(val) {
  console.log(val);
}

colors.forEach(print);

// Map
var colors2 = ["blue", "green", "red"];
function kap(val) {
  return val.toUpperCase();
}

var warnaKap = colors2.map(kap);

console.log(warnaKap);

// Reduce
let foods = [100, 200, 300, 400];

let total = foods.reduce((sum, item) => {
  return sum + item;
});

console.log(total);

// Module

// export
// export function foo() {
//   // ...
// }

// export var kode = 42;

// var coba = [1, 2, 3];
// export { coba };

// // cara lain
// function ex() {
//   // ...
// }
// function ex2() {}
// export { ex, ex2 };

// // rename export
// function exp() {}
// export { exp as kode };

// class
class Person {
  constructor() {
    this.name = "Taofik";
    this.age = 20;
  }
}

const person = new Person();
console.log(person.name);

let varClass = class Try {
  constructor() {
    this.try = "Mencoba";
  }
};

const vClass = new varClass();
console.log(vClass.try);

// API Array
var c = Array.of(1, 2, 3);
console.log(c);
console.log(c.length);

var array1 = {
  length: 4,
  2: "foo",
};

console.log(Array.from(array1));

// copywithin
var array2 = [3, 4, 5, 6].copyWithin(3, 0);
// 3 -> index ke berapa yang ingin dirubah, 0 -> mulai index ke berapa
console.log(array2);

// fill -> untuk mengisi array
var array3 = [null, null, null].fill(4, 1, 1);
console.log(array3);

// find
var fArray = [1, 2, 3, 4];
fArray.find(function matcher(v) {
  return v === 2;
});

//
// key & value
var vArray = [5, 4, 3, 2, 1];
const sVArray = [...vArray.values()]; // value
// const sVArray = [...vArray.keys()]; // index
// const sVArray = [...vArray.entries()]; // index + value
console.log(sVArray);

// API Object
var x = NaN;
var y = 0;
var z = -0;

x === x; // false
Object.is(x, x); // true
y === z; // true
Object.is(y, z); // false

// setPrototypeof

var o1 = {
  foo() {
    console.log("foo");
  },
};

var o2 = { o2 };

Object.setPrototypeOf(o2, o1);
o2.foo();
