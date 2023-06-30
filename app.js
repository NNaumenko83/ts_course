// const button = document.querySelector("button");
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// function add(num1: number, num2: number) {
//   return num1 + num2;
// }
// button?.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value));
// });
// let num: number;
// num = 10;
// let str: string;
// str = "12";
// let boo: boolean;
// boo = true;
// let person = 'Max'
// person='2'
// let arr: string[] = [];
// arr = ["str2", "srt"];
// let arrObj: { name: string }[];
// arrObj = [{ name: "Max" }, { name: "Alex" }];
// let obj: { name: string };
// obj = { name: "Alex" };
// obj.name;
// let db: { id: number; title: string; info: { date: Date; isNew: boolean } };
// db = { id: 1, title: "new product", info: { date: new Date(), isNew: true } };
// Тип ANY  - не проходить перевірок!!!
// let some: any;
// some = 1;
// some = "String";
// Тип unknown  - не проходить перевірок!!!
// let some: unknown;
// some = 1;
// some = "String";
// let str: string;
// if (typeof some === "string") {
//   str = some;
// }
// let fixed: [string, number];
// fixed = ["Nick", 2];
// ENUM
// enum Toggle {
//   ENABLE,
//   DISABLE,
// }
// const service = { status: Toggle.ENABLE };
// if (service.status === Toggle.ENABLE) {
//   console.log("It is active");
// }
// UNION TYPE
// let union: number | string
// union = 10
// function combine(param1: string | number, param2: string | number) {
//   if (typeof param1 === "string" || typeof param2 === "string") {
//     return param1.toString() + param2.toString();
//   }
//   return param1 + param2;
// }
// console.log(combine("str1", "str2"));
// let active: "start" | "and";
// active = "start";
// const fruit: string[] = [];
// function workWithArr(arr: string[], value: string, action: "add" | "delete") {
//   if (action === "add") {
//     arr.push(value);
//   } else {
//     const index = arr.indexOf(value);
//     arr.splice(index, 1);
//   }
//   return arr;
// }
// workWithArr(fruit, "Banana", "add");
// workWithArr(fruit, "Melon", "add");
// workWithArr(fruit, "Pear", "add");
// workWithArr(fruit, "Bear", "add");
// console.log(fruit);
function calc(num1, num2, callback) {
    return callback(num1, num2);
}
function foo(num1, num2) {
    return num1 + num2;
}
var result = calc(1, 3, foo);
console.log("result:", result);
