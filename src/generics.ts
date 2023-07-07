// let arr: Array<string | number> = [];

// const promice: Promise<string> = new Promise((res) => {
//   setInterval(() => {
//     res("done");
//   }, 1000);
// });

// promice.then((data) => {
//   console.log(data);
// });

// Generic function/method
// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }

// const merged = merge({ name: "Alisa" }, { age: 28 });
// console.log("merged:", merged);

// merged.name

// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const merged = merge({ name: "Alisa" }, { age: 28 });

// function merge<T extends {}, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const merged = merge({ name: "Alisa" }, { age: 28 });

// merged.name;

type Admin = {
  name: string;
  priv: string[];
};

type User = {
  name: string;
  startDate: Date;
};

// type AdminUser = Admin & User;

// const user: AdminUser = {};

// type ComplexType = string | number;

// function combime(a: ComplexType, b: ComplexType) {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }

//   return a + b;
// }

// type AdminOrUser = Admin | User;

// function showFields(el: AdminOrUser) {
//   if ("startDate" in el) {
//     console.log(el.startDate);
//   }
// }

// abstract class Guy {
//   constructor(public name: string) {}
// }

// class Good extends Guy {
//   advice() {
//     console.log("advice");
//   }
// }

// class Bad extends Guy {
//   insult() {
//     console.log("insult");
//   }
// }

// const good = new Good("Djon");
// const bad = new Good("Sergey");

// function gyes(user: Guy) {
//   if (user instanceof Good) {
//     user.advice();
//   }

//   if (user instanceof Bad) {
//     user.insult();
//   }
// }

// const input = document.getElementById("inputEmail");

// input.value;

// interface Person {
//   name: string;
//   age: number;
//   [x: string]: any;
// }

// const user: Person = {
//   age: 30,
//   name: "Max",
//   gender: "man",
//   country: "Ukraine",
// };

// interface Person {
//   name: string;
//   additionalInfo?: {
//     someInfo: string;
//   };
// }

// const user: Person = {
//   name: "Max",
// };

// user?.additionalInfo?.someInfo;

// const userInput = "";

// const store = userInput ?? "DEFAULT";
// console.log("store:", store);

// Перегрузка операторов

// function add(a: string, b: string): string;
// function add(a: number, b: number): number;

// function add(a: string | number, b: string | number) {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// ====== GENERIC ======

// let arr: Array<string | number>;

// const promise: Promise<string> = new Promise((res) => {
//   setTimeout(() => {
//     res("Hello");
//   }, 1000);
// });

// promise.then((data) => {
//   console.log(data);
// });

// (() => {
//   async function promiseFoo(): Promise<string> {
//     return "String";
//   }
//   promiseFoo().then((data) => {
//     console.log(data);
//   });
// })();

// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign({}, objA, objB);
// }

// type Person = {
//   name: string;
// };

// type AdditionalFields = {
//   age: number;
// };

// const toMerge1 = { name: "Max" };
// const toMerge2 = { age: 21 };

// const merged = merge<Person, AdditionalFields>(toMerge1, toMerge2);

// merged.name;

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign({}, objA, objB);
// }

// const toMerge1 = { name: "Max" };
// const toMerge2 = { age: 21 };

// const merged = merge(toMerge1, toMerge2);

// interface ILength {
//   length: number;
// }

// function getLength<T extends ILength>(str: T): number {
//   return str.length;
// }

// const obj = { length: 10 };

// getLength("string");

// function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
//   return obj[key];
// }

// const field = extractValue({ name: "Max" }, "name");

// class DataStore<T> {
//   private data: T[] = [];

//   addItem(item: T): void {
//     this.data.push(item);
//   }

//   getItems(): T[] {
//     return this.data;
//   }
// }

// interface IPerson {
//   name: string;
// }

// const storeUsers = new DataStore<IPerson>();

// storeUsers.addItem({ name: "Max" });
// storeUsers.addItem({ name: "Anton" });

// console.log("storeUsers.getItems():", storeUsers.getItems());

// const ageStore = new DataStore<number>();
// ageStore.addItem(21);
// ageStore.addItem(23);

// ====PARTIAL =====

// interface IUser {
//   name: string;
//   age: number;
// }

// function createPerson(name: string): IUser {
//   const person: Partial<IUser> = { name };

//   //   person.age = 21;

//   return person as IUser;
// }

// ===READONLY=====

// interface IPerson {
//   name: string;
// }

// // const arr: Readonly<string[]> = ["One", "Two", "Three"];
// const obj: Readonly<IPerson> = {
//   name: "Max",
// };

// ====PICK======
// interface Page {
//   title: string;
//   annotation: string;
//   numberPage: number;
// }

// const pageAnnotation: Pick<Page, "annotation" | "numberPage"> = {
//   annotation: "Smile page",
//   numberPage: 1,
// };

// ===== ПРАКТИКА =======
// //=====1=====
// function getPromise(): Promise<Array<string | number>> {
//   return new Promise((res) => {
//     res(["Text", 50]);
//   });
// }

// getPromise().then((data) => {
//   console.log(data);
// });

// //======2======
// type AllType = {
//   name: string;
//   position: number;
//   color: string;
//   weight: number;
// };

// function compare(
//   top: Pick<AllType, "name" | "color">,
//   bottom: Pick<AllType, "position" | "weight">
// ): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   };
// }

// // ====3====

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// // ====4====
// class Component<T> {
//   constructor(public props: T) {}
// }

// interface IProp {
//   title: string;
// }

// class Page extends Component<IProp> {
//   pageInfo() {
//     console.log(this.props.title);
//   }
// }
