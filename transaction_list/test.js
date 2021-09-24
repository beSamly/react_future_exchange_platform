let arr = [
  { price: 5, amount: 2 },
    // { price: 5, amount: 3 },
    // { price: 2, amount: 3 },
];

console.log(
  arr.reduce((accumulator, currentObj) => accumulator +currentObj.price, 0)
);

let testArr = [3, 6, 8];

// for (let index in testArr) {
//     let t =index+1
//     console.log(`t : `, t);
//   console.log(testArr.slice(0, t));
// }
