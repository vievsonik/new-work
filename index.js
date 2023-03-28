// const arr1 = [ -1, -2, -3, 1, 2, 3, 4, 1, 2];

// const positiveNum = arr1.filter((item) => item > 0)

// const calculatedNum = positiveNum.reduce ((acc,curr ) => {
//         return acc + curr;
//     }, 0);
// console.log(calculatedNum)
// _____________________________________________________

// const arr1 = ["a", "a", "a", "a", "b", "b", "z", 'z',];

// const countedNames = arr1.reduce((acc, curr) => {
//   const currCount = acc[curr] ?? 0;
//   return {
//     ...acc,
//     [curr]: currCount + 1,
//   };

// }, {});
// console.log(countedNames)
// ____________________________________________________

// class Car {
//   constructor(brand, model, carSpeed, status) {
//     this.brand = brand;
//     this.model = model;
//     this.carSpeed = carSpeed;
//     this.status = status;
//   }
//   logInFo = () => {
//     console.log(
//       ` car ${this.brand} ${this.model} is moving ${this.carSpeed} km/h and status ${this.status}  `
//     );
//   };
// }
// const car1 = new Car("toyota",  );

// function iaa() {
//   // const x = this.status;
//   const carSpd = this.carSpeed;
//   const func = () => {
//     car1,carSpd = 0
//   };
//   func();
// }

// car1.logInFo();
// ____________________________________

// const value = ['asd'];
// const value2 = ['asdasd'];

// const value3 = [...value2,...value ];
// console.log(value3)
// const myPromise = new Promise((resolve, reject) => {
//   const num = Number;
//   if (value3 === num) {
//     resolve("success");
//   } else {
//     reject("error");
//   }
// });

// myPromise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


