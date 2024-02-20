// // const button = document.querySelector("button");
// // const input1 = document.getElementById("num1")! as HTMLInputElement;
// // const input2 = document.getElementById("num2")! as HTMLInputElement;

// // function add(num1: number, num2: number) {
// //   return num1 + num2;
// // }

// // button?.addEventListener("click", function () {
// //   console.log(add(+input1.value, +input2.value));
// // });

// // let num: number;

// // num = 10;

// // let str: string;

// // str = "12";

// // let boo: boolean;

// // boo = true;

// // let person = 'Max'

// // person='2'

// // let arr: string[] = [];

// // arr = ["str2", "srt"];

// // let arrObj: { name: string }[];

// // arrObj = [{ name: "Max" }, { name: "Alex" }];

// // let obj: { name: string };

// // obj = { name: "Alex" };

// // obj.name;

// // let db: { id: number; title: string; info: { date: Date; isNew: boolean } };
// // db = { id: 1, title: "new product", info: { date: new Date(), isNew: true } };

// // Тип ANY  - не проходить перевірок!!!
// // let some: any;

// // some = 1;
// // some = "String";

// // Тип unknown  - не проходить перевірок!!!
// // let some: unknown;

// // some = 1;
// // some = "String";

// // let str: string;
// // if (typeof some === "string") {
// //   str = some;
// // }

// // let fixed: [string, number];
// // fixed = ["Nick", 2];

// // ENUM

// // enum Toggle {
// //   ENABLE,
// //   DISABLE,
// // }

// // const service = { status: Toggle.ENABLE };

// // if (service.status === Toggle.ENABLE) {
// //   console.log("It is active");
// // }

// // UNION TYPE

// // let union: number | string

// // union = 10

// // function combine(param1: string | number, param2: string | number) {
// //   if (typeof param1 === "string" || typeof param2 === "string") {
// //     return param1.toString() + param2.toString();
// //   }

// //   return param1 + param2;
// // }

// // console.log(combine("str1", "str2"));

// // let active: "start" | "and";

// // active = "start";

// // const fruit: string[] = [];

// // function workWithArr(arr: string[], value: string, action: "add" | "delete") {
// //   if (action === "add") {
// //     arr.push(value);
// //   } else {
// //     const index = arr.indexOf(value);
// //     arr.splice(index, 1);
// //   }
// //   return arr;
// // }

// // workWithArr(fruit, "Banana", "add");
// // workWithArr(fruit, "Melon", "add");
// // workWithArr(fruit, "Pear", "add");
// // workWithArr(fruit, "Bear", "add");

// // console.log(fruit);

// // function calc(
// //   num1: number,
// //   num2: number,
// //   callback: (arg1: number, arg2: number) => number
// // ) {
// //   return callback(num1, num2);
// // }
// // function foo(num1: number, num2: number) {
// //   return num1 + num2;
// // }

// // const result = calc(1, 3, foo);
// // console.log("result:", result);

// // ПРАКТИКА
// // 1
// let age: number;
// // let name: string;
// let toggle: boolean;
// let empty: null;
// let notInitialize: undefined;
// let callback: (a: number) => number;
// callback = (a) => {
//   return 100 + a;
// };

// // 2
// let anything: any;
// anything = "Text";
// anything = {};

// // 3
// let some: any;
// some = "Text";

// let str: string;
// str = some;

// // 4
// let person: [string, number];
// person = ["Max", 21];

// // 5
// enum Load {
//   LOADING,
//   READY,
// }

// const page = { load: Load.READY };

// if (page.load === Load.LOADING) {
//   console.log("Loading");
// }

// if (page.load === Load.READY) {
//   console.log("Ready");
// }

// // 6

// let strOrNumber: string | number;

// // 7
// let strNew: "enable" | "Disable";

// // 8
// function showMessage(message: string): void {
//   console.log(message);
// }

// function calc(num1: number, num2: number): number {
//   return num1 + num2;
// }

// function customError(): never {
//   throw new Error("Error");
// }

// type PageData = {
//   title: string;
//   likes: number;
//   accounts: string[];
//   status: string;
//   details?: {
//     createAt: Date;
//     updateAt: Date;
//   };
// };

// const page1: PageData = {
//   title: "The awesome page",
//   likes: 100,
//   accounts: ["Max", "Anton", "Nikita"],
//   status: "open",
//   details: {
//     createAt: new Date("2021-01-01"),
//     updateAt: new Date("2021-05-01"),
//   },
// };

// const page2: PageData = {
//   title: "Python or Js",
//   likes: 5,
//   accounts: ["Alex"],
//   status: "close",
// };

// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/typescript

function grow(arr: number[]): number {
    return arr.reduce((acc, item) => { console.log(acc);  return acc*item});
}

console.log(grow([4, 1, 1, 1, 4]));