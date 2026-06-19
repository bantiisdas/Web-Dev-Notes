// let myName = "Supda";

// console.log(myName.indexOf("up"));

// console.log(myName.slice(1, -1));

// let str = "supriya";
// let arr = str.split("");

// console.log(arr.join("-"));

// const missionNumber = "19";
// console.log(missionNumber.padEnd(7, "X"));

// console.log(void 0);

// console.log(JSON.stringify({ a: null }));

// console.log(JSON.stringify({ a: undefined }));

// let arr = [1, 2, 3, 4, 5];
// //arr.unshift(9, 10);

// let b = arr.slice(1, 2);
// console.log(b);

// let threeEmp = Array(1);
// console.log(threeEmp);
// console.log(threeEmp.length);

// let threeEmp = Array.of(1, 2);
// console.log(threeEmp);
// console.log(threeEmp.length);

// const string = "Banti";
// console.log(Array.from(string));

// let arr1 = [10, 11, 12, 13, 14, 15];
// arr1.splice(2, 3);
// console.log(arr1);

// let arr2 = [10, 11, 12, 13, 14, 15];
// let slice = arr2.slice();
// console.log(slice);

// const alphabets = ["A", "B", "C", "D", "E"];
// alphabets.length = 3;
// console.log(alphabets);
// alphabets.length = 5;
// console.log(alphabets);

// console.log(Array.isArray("Sup"));

// let arr3 = [1, 2, 3, 4, 5];
// console.log(arr3.includes(50));

const orders = [
  { dish: "abc", price: 9, spicy: false, qty: 3 },
  { dish: "dssfs", price: 8, spicy: true, qty: 1 },
  { dish: "adfdbc", price: 19, spicy: true, qty: 4 },
  { dish: "abdfdc", price: 5, spicy: false, qty: 2 },
];

// const myOrder = orders.forEach((order, index) => {
//   console.log(`${order.dish}`);
// });

// console.log(myOrder);

// const myNewOrder = orders.map((order, index) => `#${index}: ${order.dish}`);
// //or
// const myNewOrder2 = orders.map((order, index) => {
//   return `#${index}: ${order.dish}`;
// });
// console.log(myNewOrder);

// const spicyDishes = orders.filter((order) => order.spicy);
// console.log(spicyDishes);

// let totalRevenue = orders.reduce(
//   (sum, order) => sum + order.price * order.qty,
//   0,
// );

// console.log(totalRevenue);

// let grouped = orders.reduce(
//   (acc, order) => {
//     const catagoery = order.spicy ? "spicy" : "mild";
//     acc[catagoery].push(order);
//     return acc;
//   },
//   { spicy: [], mild: [] },
// );
// console.log(grouped);

// let numbers = [100, 60, 30, 2, 9];

// let sorted = [...numbers].sort((a, b) => b - a);
// console.log(sorted);

// const hero = {
//   sup: 12,
//   power: "Boost",
//   level: 10,
// };

// hero.move = "fight";
// delete hero.level;
// console.log(hero);

// const powerRanger = {
//   samurai: 2,
//   ninjaStrom: 2,
//   mysticForce: 1,
//   wildForce: undefined,
// };

// console.log("samurai" in powerRanger);
// console.log("wildForce" in powerRanger);
// console.log("toString" in powerRanger);

// console.log(powerRanger.hasOwnProperty("samurai"));
// console.log(powerRanger.hasOwnProperty("wildForce"));
// console.log(powerRanger.hasOwnProperty("toString"));

// console.log(Object.keys(powerRanger));
// console.log(Object.values(powerRanger));
// console.log(Object.entries(powerRanger));

// for ([key, value] of Object.entries(powerRanger)) {
//   console.log(`${key}: ${value}`);
// }

// const powerEntries = Object.entries(powerRanger);
// console.log(powerEntries);
// const powerObj = Object.fromEntries(powerEntries);
// console.log(powerObj);

// const powerRanger = {
//   samurai: 2,
//   ninjaStrom: 2,
//   mysticForce: 1,
//   wildForce: 1,
//   oldRanger: {
//     zeo: 1,
//     timeForce: 2,
//     inSpace: 1,
//   },
// };

// Object.freeze(powerRanger);

// powerRanger.oldRanger.timeForce = 1;
// powerRanger.mysticForce = 2;
// delete powerRanger.oldRanger.inSpace;
// powerRanger.oldRanger.newRanger = 1;

// console.log(powerRanger);

// const powerRanger = {
//   samurai: 2,
//   ninjaStrom: 2,
//   mysticForce: 1,
//   wildForce: 1,
// };

// Object.seal(powerRanger);

// powerRanger.mysticForce = 2;
// delete powerRanger.wildForce;
// powerRanger.newRanger = 3;

// console.log(powerRanger);

// const artifact = { name: "crateBox" };
// Object.defineProperty(artifact, "elementCode", {
//   value: "0x23CD",
//   configurable: true,
//   writable: false,
//   enumerable: true,
// });

// artifact.elementCode = "1";

// Object.defineProperty(artifact, "elementCode", {
//   value: "Abc",
//   configurable: true,
//   writable: true,
//   enumerable: false,
// });
// artifact.elementCode = "A";
// // delete artifact.elementCode;

// console.log(artifact);

// for ([key, value] of Object.entries(artifact)) {
//   console.log(`${key}: ${value}`);
// }

// const desc = Object.getOwnPropertyDescriptor(artifact, "elementCode");
// console.log(desc);

// console.log(printItfunc("Supriya")); //error
// // console.log(printIt("SUp")); //no error
// let printItfunc = function printIt(toPrint) {
//   return toPrint;
// };

// function hello() {
//   console.log(arguments);
// }
// hello("hi", "Banti");

// const hello2 = () => {
//   console.log(arguments);
// };
// hello2("hi", "Banti");

// console.log("Continue");

// (function () {
//   console.log("IIFE");
// })();

// let iife = (function () {
//   console.log("IIFE");
// })();

// let arr = [20, 30, 50, 90, 10];

// arr.forEach((item) => {
//   console.log(item);
//   if (item > 50) {
//     await;
//   }
// });

// const portionShop = (() => {
//   let inventory = 0;

//   return {
//     brew() {
//       inventory++;
//       return `Brew: ${inventory}`;
//     },
//     getStock() {
//       return inventory;
//     },
//   };
// })();

// console.log(portionShop);
// console.log(portionShop.brew());
// console.log(portionShop.brew());
// console.log(portionShop.getStock());
// console.log(portionShop.inventory); //undefined

// const portionShop2 = () => {
//   let inventory = 0;

//   return {
//     brew() {
//       inventory++;
//       return `Brew: ${inventory}`;
//     },
//     getStock() {
//       return inventory;
//     },
//   };
// };

// const portionShopHolder = portionShop2();

// console.log(portionShopHolder);
// console.log(portionShopHolder.brew());
// console.log(portionShopHolder.brew());
// console.log(portionShopHolder.getStock());
// console.log(portionShopHolder.inventory); //undefined

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
