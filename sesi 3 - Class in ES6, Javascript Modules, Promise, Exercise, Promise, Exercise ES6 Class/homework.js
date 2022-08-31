const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

// const makeAllCaps = function (...array) {
//   return new Promise((resolve, reject) => {
//     array.map(function (x) {
//       x.toUpperCase();
//     });
//   });
// };

// const sortWords = function (...array) {
//   return new Promise((resolve, reject) => {
//     array.sort();
//   });
// };

// makeAllCaps(arrayOfWords)
//   .then(sortWords)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// makeAllCaps(complicatedArray)
//   .then(sortWords)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// const makeAllCaps = new Promise((resolve, reject) => {
//   resolve(
//     arrayOfWords.map(function (x) {
//       x.toUpperCase();
//     })
//   );
// });

function makeAllCaps(array) {
  return new Promise((resolve, reject) => {
    resolve(String.prototype.toUpperCase.apply(array));
  });
}

function sortWords(array) {
  return new Promise((resolve, reject) => {
    resolve(array.sort());
  });
}

const result = makeAllCaps(arrayOfWords);
result.then((resolve) => console.log(resolve));
