// // class A {
// //   protected someProperty = "str";
// // }

// // class B extends A {
// //   showPropery() {
// //     console.log(this.showPropery);
// //   }
// // }

// // const a = new A();
// // const b = new B();

// // b.showPropery();

// // class House {
// //   street: string;

// //   constructor(n: string) {
// //     this.street = n;
// //   }

// //   showAdress(this: House): void {
// //     console.log("Adress: " + this.street);
// //   }
// // }

// // const house = new House("Middle-earth");

// // house.showAdress();

// // const copyHouse = { showAdress: house.showAdress, street: "Mykola street" };

// // copyHouse.showAdress();

// // Модифікатори доступа

// // class House {
// //   private tetants: string[] = [];

// //   constructor(protected street: string, public readonly type: string) {
// //     this.street = street;
// //   }

// //   public showAdress(this: House, add: string) {
// //     console.log("Adress " + this.street + add);
// //   }

// //   public addTenant(name: string) {
// //     this.tetants.push(name);
// //   }
// //   public showTenants() {
// //     console.log(this.tetants);
// //   }

// //   public showType() {
// //     console.log(this.type);
// //   }
// // }

// // const house = new House("Middle-earth", "wood");
// // console.log("house:", house);

// // house.showAdress("Hello");

// // house.addTenant("Max");
// // house.addTenant("Nikita");

// // house.shoqTenants();

// // house.showType();

// // class StoneHouse extends House {
// //   private chargeOfHouse: string;
// //   constructor(street: string, general: string) {
// //     super(street, "stone");

// //     this.chargeOfHouse = general;
// //   }

// //   public showTenants() {
// //     console.log("General:" + this.chargeOfHouse);
// //     super.showTenants();
// //   }

// //   public showAdress(): void {
// //     console.log("Adress " + this.street);
// //   }
// // }

// // const stoneHouse = new StoneHouse("stone-word", "Max");

// // stoneHouse.addTenant("Mykola");
// // stoneHouse.addTenant("Varui");

// // stoneHouse.showTenants();

// // Статичні методи і властивості

// // class UseStatic {
// //   private static count = 0;

// //   constructor() {
// //     UseStatic.count += 1;
// //   }

// //   public static isStatic() {
// //     console.log("Im static");
// //   }

// //   public showCount() {
// //     console.log(UseStatic.count);
// //   }
// // }

// // const obj1 = new UseStatic();
// // const obj2 = new UseStatic();
// // const obj3 = new UseStatic();

// // obj1.showCount();
// // obj2.showCount();
// // obj3.showCount();

// // UseStatic.isStatic();

// // ===== Abstract clases =====

// // abstract class Plane {
// //   protected pilotInCabin = false;

// //   public sitInPlane() {
// //     this.pilotInCabin = true;
// //   }

// //   public abstract startEngine(): string;
// // }

// // class Meize extends Plane {
// //   public startEngine(): string {
// //     {
// //       return "ta-ta-ta";
// //     }
// //   }
// // }

// // class Boeing extends Plane {
// //   public startEngine(): string {
// //     return "Buuuuuuu";
// //   }
// // }

// // const maize = new Meize();
// // const boeing = new Boeing();

// // maize.sitInPlane();
// // boeing.sitInPlane();

// // console.log(maize.startEngine());
// // console.log(boeing.startEngine());

// // =====Інтерфейси обєктів======
// // interface IPerson {
// //   readonly name: string;
// //   age: number;

// //   greet(phrase: string): void;
// // }

// // interface IPilot {
// //   flyMesage(): void;
// // }

// // class Pilot implements IPerson, IPilot {
// //   constructor(public readonly name: string, public age: number) {
// //     this.checkAge();
// //   }

// //   private checkAge() {
// //     if (this.age < 28) {
// //       throw new Error("Pilot too young");
// //     }
// //   }

// //   public greet(phrase: string): void {
// //     console.log(phrase + " " + this.name);
// //   }

// //   public flyMesage(): void {
// //     console.log("Літак набрав висоту приємного польоту");
// //   }
// // }

// // abstract class Plane {
// //   protected pilot?: IPilot;

// //   public sitInPlane(pilot: IPilot) {
// //     this.pilot = pilot;
// //   }

// //   public abstract startEngine(): boolean;
// // }

// // class Boeing extends Plane {
// //   public startEngine(): boolean {
// //     if (!this.pilot) {
// //       throw new Error("No pilot in cabin");
// //     }
// //     console.log("Запуск турбін");
// //     this.pilot.flyMesage();
// //     return true;
// //   }
// // }

// // const pilot = new Pilot("Max", 32);
// // const boeing = new Boeing();

// // pilot.greet("Вас вітає капітан корабля");
// // boeing.sitInPlane(pilot);
// // boeing.startEngine();

// // ======== Інтерфейси як тип функції ========

// // type AddFunc = (n1: number, n2: number) => number;

// // interface AddFunc {
// //   (n1: number, n2: number): number;
// // }

// // const foo: AddFunc = (n1: number, n2: number) => {
// //   return n1 + n2;
// // };

// // ======ПРАКТИКА=======

// // class Key {
// //   private signature: number;

// //   constructor() {
// //     this.signature = Math.random();
// //   }

// //   public getSignature(): number {
// //     return this.signature;
// //   }
// // }

// // class Person {
// //   constructor(private key: Key) {
// //     this.key = key;
// //   }

// //   getKey(): Key {
// //     return this.key;
// //   }
// // }

// // abstract class House {
// //   protected door = false;
// //   private tenants: Person[] = [];

// //   constructor(protected key: Key) {}

// //   comeIn(person: Person): void {
// //     if (!this.door) {
// //       throw new Error("Door is close");
// //     }
// //     this.tenants.push(person);
// //     console.log("Person inside");
// //   }

// //   abstract openDoor(key: Key): boolean;
// // }

// // class MyHouse extends House {
// //   openDoor(key: Key) {
// //     if (key.getSignature() !== this.key.getSignature()) {
// //       throw new Error("Key to another door");
// //     }

// //     return (this.door = true);
// //   }
// // }

// // const key = new Key();

// // const house = new MyHouse(key);
// // console.log("house:", house);

// // const person = new Person(key);

// // house.openDoor(person.getKey());

// // house.comeIn(person);

// // Створюємо клас Key
// // class Key {
// //   private signature: number;

// //   constructor() {
// //     this.signature = Math.random();
// //   }

// //   // отримати підпис
// //   getSignature(): number {
// //     return this.signature;
// //   }
// // }

// // class Person {
// //   constructor(private key: Key) {
// //     this.key = key;
// //   }

// //   getKey(): Key {
// //     return this.key;
// //   }
// // }

// // Створюємо абстрактний клас House
// // abstract class House {
// //   protected door = false;
// //   protected tenants: Person[] = [];

// //   constructor(protected key: Key) {}

// //   comeIn(person: Person): void {
// //     if (!this.door) {
// //       throw new Error("The door is close");
// //     }

// //     this.tenants.push(person);
// //     console.log("Person in house");
// //   }

// //   abstract openDoor(key: Key): void;
// // }

// // class MyHouse extends House {
// //   openDoor(key: Key) {
// //     console.log(key);
// //     if (this.key.getSignature() !== key.getSignature()) {
// //       throw new Error("THis door is closed");
// //     }
// //     this.door = true;
// //   }
// // }

// // const key = new Key();
// // const person = new Person(key);
// // const house = new MyHouse(key);

// // house.openDoor(person.getKey());
// // house.comeIn(person);

// // const userInput = null;

// // const store = userInput ?? "DEFAULT";
// // console.log("userInput:", !!userInput);

// // console.log(store);

// /*Write a function that takes an integer as input, and returns the number of bits that
// are equal to one in the binary representation of that number.
// You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case */

// // function countBits(n: number): number {
// //   let bitsArray = [];
// //   let tmp = n;

// //   do {
// //     tmp = Math.floor(n / 2);

// //     bitsArray.unshift(n % 2);
// //     n = tmp;
// //   } while (tmp >= 1);

// //   return bitsArray.filter((item) => item === 1).length;
// // }

// // console.log(countBits(1234));

// // Vowel Count

// /*Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.*/

// // class Kata {
// //   static vowels: string[] = ["a", "e", "i", "o", "u"];

// //   static getCount(str: string): number {
// //     const lettersArray: string[] = [...str];
// //     let count = 0;

// //     lettersArray.forEach((item: string) => {
// //       if (this.vowels.includes(item)) {
// //         count += 1;
// //       }
// //     });

// //     return count;
// //   }
// // }

// // const numbersVovels = Kata.getCount("abc");
// // console.log("numbersVovels:", numbersVovels);

// // Tribonacci Sequence
// // function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
// //   let array = [a, b, c];

// //   if (n === 0) {
// //     return [];
// //   }
// //   if (n <= 3) {
// //     return array.splice(0, n);
// //   }

// //   do {
// //     let tmp = 0;

// //     for (let i = array.length - 1; i >= array.length - 3; i -= 1) {
// //       tmp += array[i];
// //     }

// //     array.push(tmp);
// //   } while (array.length < n);

// //   return array;
// // }

// // console.log(tribonacci([3, 2, 1], 10));

// // Beginner Series #3 Sum of Numbers
// // function getSum(a: number, b: number): number {
// //   if (a === b) {
// //     return a;
// //   }

// //   if (a > b) {
// //     [a, b] = [b, a];
// //   }

// //   let sum = 0;

// //   for (let i = a; i <= b; i += 1) {
// //     sum += i;
// //   }

// //   return sum;
// // }

// // console.log(getSum(1, 2));

// // Roman Numerals Decoder
// // https://www.codewars.com/kata/51b6249c4612257ac0000005/train/typescript
// // 'I'          1
// // V          5
// // X          10
// // L          50
// // C          100
// // D          500
// // M          1,000

// // function solution(roman: string): number {
// //   interface RomanNumber {
// //     [key: string]: number;
// //   }

// //   const romanObj: RomanNumber = {
// //     I: 1,
// //     V: 5,
// //     X: 10,
// //     L: 50,
// //     C: 100,
// //     D: 500,
// //     M: 1000,
// //   };

// //   const arr = [...roman];
// //   console.log("arr:", arr);

// //   let sum = 0;

// //   for (let i = 0; i < arr.length; i += 1) {
// //     if (romanObj[arr[i]] === 1 && i === arr.length - 1) {
// //       sum += romanObj[arr[i]];
// //       continue;
// //     }

// //     if (
// //       romanObj[arr[i]] === 1 &&
// //       i === arr.length - 2 &&
// //       romanObj[arr[arr.length - 1]] !== 1
// //     ) {
// //       sum += romanObj[arr[i + 1]] - romanObj[arr[i]];
// //       return sum;
// //     }

// //     sum += romanObj[arr[i]];
// //   }
// //   return sum;
// // }

// // console.log(solution("MMVIII"));

// // Are they the "same"?
// // function comp(a1: number[] | null, a2: number[] | null): boolean {
// //   if (!a1 || !a2) {
// //     return false;
// //   }

// //   const arr = a1.map((item) => Math.pow(item, 2));

// //   for (const item of arr) {
// //     if (
// //       !a2.includes(item) ||
// //       arr.filter((numb) => numb === item).length !==
// //         a2.filter((numb) => numb === item).length
// //     ) {
// //       return false;
// //     }
// //   }

// //   return true;
// // }

// // const a = [121, 144, 19, 161, 19, 144, 19, 11];

// // const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
// // console.log(comp(a, b));

// // Bouncing Balls
// //https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/typescript

// // function bouncingBall(h: number, bounce: number, window: number): number {
// //   if (bounce <= 0 || bounce >= 1 || window >= h) {
// //     return -1;
// //   }

// //   let counter = 1;
// //   let aftBounceHeigth = h * bounce;

// //   do {
// //     if (counter > 1) {
// //       aftBounceHeigth = aftBounceHeigth * bounce;
// //     }

// //     if (aftBounceHeigth > window) {
// //       counter += 2;
// //     }
// //   } while (aftBounceHeigth > window);

// //   return counter;
// // }

// // console.log(bouncingBall(30, 0.75, 1.5));

// // Count the smiley faces!
// /*Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D*/

// // function countSmileys(arr: string[]) {
// //   if (arr.length === 0) {
// //     return 0;
// //   }

// //   const count = arr.reduce((acc, item) => {
// //     if ([...item].includes(":") || [...item].includes(";")) {
// //       if ([...item].length === 3) {
// //         if ([...item].includes("-") || [...item].includes("~")) {
// //           if ([...item].includes("D") || [...item].includes(")")) {
// //             return (acc += 1);
// //           }
// //         }
// //       }
// //       if ([...item].length === 2) {
// //         if ([...item].includes("D") || [...item].includes(")")) {
// //           return (acc += 1);
// //         }
// //       }
// //     }

// //     return acc;
// //   }, 0);

// //   return count;
// // }

// // console.log(countSmileys([":D", ":~)", ";~D", ":)"]));

// // Multiplication table
// // https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/typescript

// // function multiplicationTable(size: number): number[][] {
// //   let array: number[][] = Array.from({ length: size }, () => []);
// //   for (let i = 0; i < array.length; i += 1) {
// //     if (i === 0) {
// //       for (let k = 1; k <= size; k += 1) {
// //         array[i].push(k);
// //       }
// //     }

// //     if (i > 0) {
// //       for (let k = 0; k < size; k += 1) {
// //         if (k === 0) {
// //           array[i].push(i + 1);
// //           continue;
// //         }

// //         const num = array[i][0] * k;

// //         array[i].push(array[i][0] + num);
// //       }
// //     }
// //   }

// //   return array;
// // }

// // console.log(multiplicationTable(4));

// // Sum of odd numbers

// // https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/typescript
// // Duplicate Encoder

// function duplicateEncode(word: string) {
//   const arrLettersWord = [...word.toLocaleLowerCase()];
//   const arr: string[] = Array(arrLettersWord.length);

//   for (let i = 0; i < arrLettersWord.length; i += 1) {
//     const indexArray = arrLettersWord.reduce((acc: number[], item, index) => {
//       if (item === arrLettersWord[i]) {
//         acc.push(index);
//       }
//       return acc;
//     }, []);
//     if (indexArray.length === 1) {
//       arr[indexArray[0]] = "(";
//     } else {
//       for (let i = 0; i < indexArray.length; i += 1) {
//         arr[indexArray[i]] = ")";
//       }
//     }
//   }

//   return arr.join("");
// }

// // // console.log(duplicateEncode("din"));
// console.log(duplicateEncode("Success"));

// async function fetchMovies() {
//   const data = await new Promise<string>((resolve) => {
//     setTimeout(() => {
//       resolve("SpiderMan");
//     }, 5000);
//   });
//   return data;
// }

// async function fetchMovies() {
//   const data = await new Promise<string>((resolve) => {
//     setTimeout(() => {
//       resolve("Mavka");
//     }, 3000);
//   });
//   return data;
// }

// const getMovies = async () => {
//   const data = await fetchMovies();
//   console.log("data:", data);
// };

// getMovies();

// function printerError(s: string): string {
//   const stringLength = s.length;

//   const numberErrors = [...s].reduce((acc, item) => {
//     if (item > "m") {
//       acc += 1;
//       return acc;
//     } else {
//       return acc;
//     }
//   }, 0);

//   return numberErrors.toString() + "/" + stringLength.toString();
// }

// let s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";

// console.log(printerError(s));

// function dirReduc(arr: string[]): string[] {
//   console.log("arr:", arr);
//   const opositeObj: { [key: string]: string } = {
//     NORTH: "SOUTH",
//     SOUTH: "NORTH",
//     EAST: "WEST",
//     WEST: "EAST",
//   };

//   const newArr: string[] = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     console.log("newArr:", newArr);
//     if (newArr.length === 0) {
//       newArr.push(arr[i]);
//       continue;
//     }
//     if (opositeObj[newArr[newArr.length - 1]] === arr[i]) {
//       newArr.pop();
//       continue;
//     }
//     newArr.push(arr[i]);
//   }

//   return newArr;
// }

// const array = [
//   "SOUTH",
//   "EAST",
//   "WEST",
//   "EAST",
//   "WEST",
//   "WEST",
//   "WEST",
//   "EAST",
//   "SOUTH",
//   "SOUTH",
//   "SOUTH",
//   "NORTH",
//   "NORTH",
// ];
// // [ 'SOUTH', 'WEST', 'SOUTH' ]

// console.log(dirReduc(array));

// Reverse or rotate?
// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/typescript

// function revRot(s: string, sz: number): string {
//   if (sz <= 0 || !s) {
//     return "";
//   }

//   if (sz > s.length) {
//     return "";
//   }
//   const strArray = [...s];

//   const numberOfChunks = Math.floor(s.length / sz);

//   const arrOfChunks = [];

//   for (let i = 0; i < numberOfChunks; i += 1) {
//     arrOfChunks.push(strArray.splice(0, sz));
//   }

//   arrOfChunks.forEach((item, index) => {
//     const sumOfCubes = item.reduce((acc, it) => {
//       return (acc += Math.pow(+it, 3));
//     }, 0);

//     if (sumOfCubes % 2 === 0) {
//       arrOfChunks[index] = item.reverse();
//     } else {
//       const partOne = item.slice(1, item.length);

//       const partTwo = item[0];

//       const newItem = [...partOne, partTwo];

//       arrOfChunks[index] = [...partOne, partTwo];
//     }
//   });

//   const combinedString = arrOfChunks
//     .map((innerArr) => innerArr.join(""))
//     .join("");

//   return combinedString;
// }

// class Vector {
//   public vector: number[];

//   constructor(components: number[]) {
//     this.vector = components;
//   }

//   add(components: { vector: number[] }) {
//     if (this.vector.length !== components.vector.length) {
//       throw new Error("Vectors must have the same length");
//     }
//     const resultComponents = this.vector.map(
//       (item, index) => (item += components.vector[index])
//     );
//     return new Vector(resultComponents);
//   }

//   subtract(components: { vector: number[] }) {
//     if (this.vector.length !== components.vector.length) {
//       throw new Error("Vectors must have the same length");
//     }
//     const resultComponents = this.vector.map(
//       (item, index) => (item -= components.vector[index])
//     );
//     return new Vector(resultComponents);
//   }

//   dot(components: { vector: number[] }) {
//     if (this.vector.length !== components.vector.length) {
//       throw new Error("Vectors must have the same length");
//     }
//     const resultComponents = this.vector.map(
//       (item, index) => item * components.vector[index]
//     );
//     return resultComponents.reduce((acc, item) => (acc += item), 0);
//   }

//   // norm() {
//   //   console.log(this.vector);
//   //   console.log(this.vector.reduce((acc, item) => (acc += item ** 2), 0));
//   //   return this.vector.reduce((acc, item) => (acc += item ** 2), 0);
//   // }

//   norm() {
//     const result = Math.sqrt(
//       this.vector.reduce((acc, value) => acc + value * value, 0)
//     );
//     return result;
//   }

//   toString() {
//     return `(${this.vector.join(",")})`;
//   }

//   equals(components: { vector: number[] }) {
//     return this.toString() === `(${components.vector.join(",")})`;
//   }
// }

// const a = new Vector([1, 2, 3]);
// const b = new Vector([1, 2, 3]);
// const c = new Vector([5, 6, 7, 8]);

// console.log(a.add(b));
// console.log(a.subtract(b));
// console.log(a.dot(b));
// console.log(a.norm());
// console.log(a.toString());
// console.log(a.equals(b));

// function solequa(n: number): [number, number][] {
//   const arr: [number, number][] = [];

//   for (let i = 0; i <= Math.ceil(n / 1.8); i += 1) {
//     if (i === 0 && n !== 0) {
//       continue;
//     }

//     for (let k = 0; k <= Math.sqrt((i * i - n) / 4); k += 1) {
//       if ((i - 2 * k) * (i + 2 * k) > n) {
//         continue;
//       }

//       if ((i - 2 * k) * (i + 2 * k) === n) {
//         arr.unshift([i, k]);
//         continue;
//       }
//       continue;
//     }
//   }

//   return arr;
// }

// https://www.codewars.com/kata/554f76dca89983cc400000bb/train/typescript
// Diophantine Equation

// function solequa(n: number): number[][] {
//   const solutions: number[][] = [];

//   for (let x_minus_2y = 1; x_minus_2y <= Math.sqrt(n); x_minus_2y++) {
//     if (n % x_minus_2y === 0) {
//       const x_plus_2y = n / x_minus_2y;
//       const x = (x_plus_2y + x_minus_2y) / 2;
//       const y = (x_plus_2y - x_minus_2y) / 4;

//       if (
//         x === Math.floor(x) &&
//         y === Math.floor(y) &&
//         x_minus_2y * x_plus_2y === n
//       ) {
//         solutions.push([x, y]);
//       }
//     }
//   }

//   console.log(solutions);

//   return solutions;
// }

// solequa(12);

// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/typescript

// const towerBuilder = (nFloors: number): string[] => {
//   const arr = Array.from({ length: nFloors });

//   return ["*"];
// };

// towerBuilder(1);

// https://www.codewars.com/kata/5949481f86420f59480000e7/train/typescript

// function oddOrEven(array: number[]) {
//   if (
//     array.length === 0 ||
//     (array.length === 1 && array[array.length - 1] === 0)
//   ) {
//     return "even";
//   }

//   const value = array.reduce((acc, item) => acc + item, 0);

//   if (value % 2 === 0) {
//     return "even";
//   }
//   return "odd";
// }

// // oddOrEven([0]);
// console.log("oddOrEven([0]);:", oddOrEven([1, 2, 5, 7]));

// https://www.codewars.com/kata/59dd2c38f703c4ae5e000014/train/typescript

// function solve(s: string): number {
//   const numbersArray = [];
//   let numbers: number[] = [];

//   for (let i = 0; i < s.length; i += 1) {
//     if (!isNaN(Number(s[i]))) {
//       numbers.push(Number(s[i]));

//       if (i === s.length - 1 && numbers.length >= 1) {
//         numbersArray.push(numbers);
//         numbers = [];
//       }
//       continue;
//     }
//     if (isNaN(Number(s[i])) && numbers.length >= 1) {
//       numbersArray.push(numbers);
//       numbers = [];
//       continue;
//     }
//   }
//   console.log("numbersArray:", numbersArray);

//   return Math.max(...numbersArray.map((item) => Number(item.join(""))));
// }

// solve("gh12cdy695m1");

// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/typescript

// function isUpperCase(str: string) {
//   if (str.toUpperCase() === str) {
//     return true;
//   }
//   return false;
// }

// isUpperCase("hello I AM DONALD");

// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/typescript

// function positiveSum(arr: number[]): number {
//   return arr.reduce((acc, item) => (item > 0 ? acc + item : acc), 0);
// }

// console.log("positiveSum([1, 2, 3, 4, 5]):", positiveSum([1, 2, 3, 4, 5]));
// positiveSum([1, 2, 3, 4, 5]);

// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript

// function sortByLength(array: string[]) {
//   // Return an array containing the same strings, ordered from shortest to longest
//   const arr = array.sort((a: string, b: string) => a.length - b.length);
//   console.log("arr:", arr);
// }

// sortByLength(["Beg", "Life", "I", "To"]);

// https://www.codewars.com/kata/5a651865fd56cb55760000e0/train/javascript

// function arrayLeaders(numbers: number[]): number[] {
//   const leadersArray = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     // if (numbers[i] <= numbers[i + 1] && i !== numbers.length - 1) {
//     //   continue;
//     // }
//     if (i === numbers.length - 1 && numbers[i] > 0) {
//       leadersArray.push(numbers[i]);
//       continue;
//     }

//     console.log("aaaaaaaaaaaaaa");
//     console.log(numbers[i]);
//     console.log("numbers.slice(i + 1):", numbers.slice(i + 1));
//     const sum = numbers.slice(i + 1).reduce((acc, item) => acc + item, 0);
//     console.log("sum:", sum);
//     if (numbers[i] > sum) {
//       leadersArray.push(numbers[i]);
//     }
//   }

//   return leadersArray;
// }

// // arrayLeaders([1, 2, 3, 4, 0]);
// console.log("arrayLeaders([ -36, -12, -27 ]", arrayLeaders([-36, -12, -27]));

// // [-1, -29, -26, -2][(-36, -12, -27)];

// https://www.codewars.com/kata/5a53a17bfd56cb9c14000003/train/typescript

// function disariumNumber(n: number) {
//   return n ===
//     n
//       .toString()
//       .split("")
//       .map(Number)
//       .reduce((acc, item, index) => acc + Math.pow(item, index + 1), 0)
//     ? "Disarium !!"
//     : "Not !!";
// }

// disariumNumber(564);
// console.log("disariumNumber(564):", disariumNumber(564));

// https://www.codewars.com/kata/58712dfa5c538b6fc7000569/train/typescript

// function countRedBeads(n: number): number {
//   return n === 0 || n === 1 ? 0 : (n - 1) * 2;
// }

// countRedBeads(5);
// console.log("countRedBeads(5):", countRedBeads(5));

// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

// function findOutlier(integers: number[]): number {
//   const evenArray = [];
//   const oddArray = [];
//   for (const item of integers) {
//     item % 2 === 0 ? evenArray.push(item) : oddArray.push(item);
//   }

//   return evenArray.length === 1 ? evenArray[0] : oddArray[0];
// }

// findOutlier([0, 1, 2]);

// https://www.codewars.com/kata/55aa075506463dac6600010d/train/typescript

// const listSquared = (m: number, n: number): number[][] => {
//   // 1. Знаходимо всі дільники між m та n (m and n integers with 1 <= m <= n
//   const divisors: number[] = Array.from(
//     { length: n - m + 1 },
//     (_, index) => m + index
//   );
//   // 2. Знаходимо дільники чисел з масиву divisors
//   const result: number[][] = divisors.reduce((acc: number[][], item) => {
//     const arrayOfdivisorsSquare = [];
//     for (let i = 1; i <= item; i += 1) {
//       if (item % i !== 0) {
//         continue;
//       }
//       arrayOfdivisorsSquare.push(Math.pow(i, 2));
//     }

//     const sumArrayOfdivisorsSquare: number = arrayOfdivisorsSquare.reduce(
//       (acc, item) => acc + item,
//       0
//     );

//     const sqrt: number = Math.sqrt(sumArrayOfdivisorsSquare);
//     if (sumArrayOfdivisorsSquare % sqrt === 0) {
//       acc.push([item, sumArrayOfdivisorsSquare]);
//       return acc;
//     }

//     return acc;
//   }, []);

//   return result;
// };

// const listSquared = (m: number, n: number): number[][] => {
//   const result: number[][] = [];

//   for (let number = m; number <= n; number++) {
//     let sumOfDivisorSquares = 0;
//     for (let i = 1; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         const otherDivisor = number / i;
//         sumOfDivisorSquares += i * i;
//         if (i !== otherDivisor) {
//           sumOfDivisorSquares += otherDivisor * otherDivisor;
//         }
//       }
//     }

//     const sqrt = Math.sqrt(sumOfDivisorSquares);
//     if (Number.isInteger(sqrt)) {
//       result.push([number, sumOfDivisorSquares]);
//     }
//   }

//   return result;
// };
// console.log("listSquared(795, 4795);:", listSquared(795, 4795));

// const promise = new Promise((res, rej) => {
//   const randomValue = Math.random() > 0.5;

//   setTimeout(() => {
//     if (randomValue) {
//       res("IIIIIIIIIIIIIIIIIIIIIII");
//     }
//     rej(new Error("AAAAAAAAAAAAAAAA"));
//   }, 3000);
// });
// console.log("promise:", promise);

// promise.then((res) => console.log(res)).catch(console.log);

// // https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
// export function evenOrOdd(n:number):string {
//   return n%2===0?"Even":"Odd";
// }

//www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/typescript

// const arrayPlusArray = (arr1: number[], arr2: number[]): number => {
//   return arr1.concat(arr2).reduce((acc, item) => acc + item, 0); // something went wrong ?
// };

// arrayPlusArray([1, 2, 3], [4, 5, 6]);
// console.log(
//   "arrayPlusArray([1, 2, 3], [4, 5, 6]):",
//   arrayPlusArray([1, 2, 3], [4, 5, 6])
// );

// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/typescript

// const makeNegative = (num: number): number => {
//   if (num < 0) {
//     return num;
//   }
//   return num * -1;
// };

// makeNegative(42);

// https://www.codewars.com/kata/567d609f1c16d7369c000008/train/typescript

// function generate(length: number): string {
//   let array = [];
//   for (let i = 0; i < length; i += 1) {
//     array.push(Math.round(Math.random()));
//   }

//   return array.join("");
// }

// generate(16);
// console.log("generate(16);:", generate(16));

// https://www.codewars.com/kata/569218bc919ccba77000000b/train/typescript
// an amount of money a0 > 0
// p percent divided by 360
// You want to have an amount a >= a0.

// function dateNbDays(a0: number, a: number, p: number): string {
//   const diff = a - a0;
//   let qty = a0;
//   let count = 0;

//   while (qty < a) {
//     count += 1;
//     const amountPerDay = qty * (p / (360 * 100));
//     qty += amountPerDay;
//   }

//   const startDate = new Date("01/01/2016").getTime();

//   const endDate = new Date(startDate + count * 24 * 60 * 60 * 1000);
//   const month =
//     endDate.getMonth() + 1 < 10
//       ? "0" + (endDate.getMonth() + 1)
//       : endDate.getMonth() + 1;
//   const day =
//     endDate.getDate() < 10 ? "0" + endDate.getDate() : endDate.getDate();

//   return endDate.getFullYear().toString() + "-" + month + "-" + day;
// }

// dateNbDays(100, 150, 2);
// console.log("dateNbDays(100, 150, 2);:", dateNbDays(100, 150, 2));

// https://www.codewars.com/kata/5731861d05d14d6f50000626/train/typescript
// function bigToSmall(arr: number[][]): string {
//   let concatArray: number[] = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     concatArray = concatArray.concat(arr[i]);
//   }

//   return concatArray.sort((a, b) => b - a).join(">");
// }

// console.log(
//   bigToSmall([
//     [1, 3, 5],
//     [2, 4, 6],
//   ])
// );

// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/typescript

// function findSmallestInt(args: number[]): number {
//   return Math.min(...args);
// }

// findSmallestInt([78, 56, 232, 12, 8]);
// console.log(
//   "findSmallestInt([78, 56, 232, 12, 8]):",
//   findSmallestInt([78, 56, 232, 12, 8])
// );

// https://www.codewars.com/kata/54fb963d3fe32351f2000102/train/typescript

// function collatz(n: number): number {
//   const resultArray: number[] = [];

//   let numb = n;
//   while (numb !== 1) {
//     console.log("numb:", numb);
//     if (numb % 2 === 0) {
//       resultArray.push(numb);
//       numb = numb / 2;
//       continue;
//     }

//     resultArray.push(numb);
//     numb = numb * 3 + 1;
//   }

//   resultArray.push(1);

//   return resultArray.length;
// }

// collatz(20);

// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/typescript
// // function countPositivesSumNegatives(input: any) {
// //   if (input === null || input.length === 0) {
// //     return [];
// //   }
// //   return input.reduce(
// //     (acc: number[], item: number) => {
// //       item > 0 ? (acc[0] += 1) : (acc[1] += item);
// //       return acc;
// //     },
// //     [0, 0]
// //   );
// // }

// // const testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
// // const actual = countPositivesSumNegatives(testData);
// // console.log("actual:", actual);

// До за по typeScript
// У цьому завдання вам належить реалізувати сценарій життя, де людина, ключ і будинок взаємодіють один з одним.

// Ключ (Key): Створіть клас Key. У нього має бути одна приватна властивість signature, яка генерується випадково при створенні об'єкта цього класу (наприклад Math.random()). Також цей клас повинен мати метод getSignature, який повертає значення властивості signature.

// Людина (Person): Створіть клас Person. Конструктор цього класу приймає об'єкт класу Key і зберігає їх у приватному властивості key. Клас Person повинен мати метод getKey, який повертає збережений ключ.

// Дім (House): Створіть абстрактний клас House. Цей клас має дві властивості: door, яка може бути відкрита (true), або закрита (false), і key, яка зберігає об'єкт класу Key.
// У цьому класі також повинен бути метод comeIn, який додає об'єкт класу Person у масив tenants, якщо door відкрита. Ваш абстрактний клас House також повинен мати абстрактний метод OpenDoor, який приймає об'єкт класу Key.

// Мій будинок (MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу House. Реалізуйте метод openDoor у цьому класі. Якщо ключ, переданий цьому методу, збігається з ключем, збереженим як key, то двері відчиняються.

// Після реалізації всіх класів створіть об'єкти для кожного класу та спробуйте відтворити сценарій, в якому людина приходить додому.

// Наприклад, ось так:

// Створюємо клас Key
// class Key {
//   private signature: number;
//   constructor() {
//     this.signature = Math.random();
//   }

//   getSignature(): number {
//     return this.signature;
//   }
// }

// Створюємо клас Person

// class Person {
//   constructor(private key: Key) {}

//   getKey(): Key {
//     return this.key;
//   }
// }

// Створюємо клас House
// abstract class House {
//   protected door = false;
//   private tenants: Person[] = [];
//   constructor(protected key: Key) {}

//   comeIn(person: Person): void {
//     if (!this.door) {
//       throw new Error("Door is closed");
//     }
//     this.tenants.push(person);
//   }

//   abstract openDoor(key: Key): boolean;
// }

// Створюємо клас MyHouse

// class MyHouse extends House {
//   openDoor(key: Key) {
//     if (key.getSignature() !== this.key.getSignature()) {
//       throw new Error("It different key!");
//     }
//     return (this.door = true);
//   }
// }

// Виклик методів
// const key = new Key();

// console.log("key:", key);

// const house = new MyHouse(key);
// console.log("house:", house);

// const person = new Person(key);
// console.log("person:", person);

// house.openDoor(person.getKey());

// house.comeIn(person);

// console.log("house:", house);

// export {};

// https://www.codewars.com/kata/52b5247074ea613a09000164/train/typescript

function cookingTime(eggs: number): number {
  return 5 * Math.ceil(eggs / 8);
}

// // cookingTime(10);
// // console.log("cookingTime(5):", cookingTime(5));

// https://www.codewars.com/kata/56747fd5cb988479af000028/train/typescript

// function getMiddle(s: string) {
//   return s.length === 1
//     ? s
//     : s.length % 2 === 0
//     ? s[s.length / 2 - 1] + s[s.length / 2]
//     : s[Math.floor(s.length / 2)];
// }

// getMiddle("test");
// console.log('getMiddle("a"):', getMiddle("a"));

// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/typescript

// function binaryArrayToNumber(arr: number[]): number {
//   return arr
//     .reverse()
//     .reduce((acc, item, index) => (acc += item * Math.pow(2, index)), 0);
// }

// binaryArrayToNumber([0, 0, 0, 1]);
// console.log(
//   "binaryArrayToNumber([1,1,1,1]):",
//   binaryArrayToNumber([1, 1, 1, 1])
// );

// https://www.codewars.com/kata/58cb43f4256836ed95000f97

// function findDifference(
//   a: [number, number, number],
//   b: [number, number, number]
// ): number {
//   return Math.abs(
//     a.reduce((acc, item) => acc * item) - b.reduce((acc, item) => acc * item)
//   );
// }

// findDifference([3, 2, 5], [1, 4, 4]);

// https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/typescript

// function between(a: number, b: number): number[] {
//   return Array.from({ length: b - a + 1 }, (item, index) => a + index);
// }

// between(1, 4);
// console.log("between(1, 4):", between(1, 4));

// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/typescript

// const fakeBin = (x: string): string => {
//   return Array.from(x, (item) => (Number(item) < 5 ? 0 : 1)).join("");
// };

// fakeBin("45385593107843568");
// console.log('fakeBin("45385593107843568":', fakeBin("45385593107843568"));

// function squareSum(numbers: number[]): number {
//   return numbers.reduce((acc, item) => acc + item ** 2, 0);
// }

// squareSum([1, 2]);
// console.log("squareSum([1, 2]):", squareSum([1, 2]));

// https://www.codewars.com/kata/576bb3c4b1abc497ec000065/train/typescript

// function compare(s1: string | null, s2: string | null): boolean {
//   let sumS1 = s1 ? (/[^a-zA-z]/.test(s1) ? 0 : sumString(s1.toUpperCase())) : 0;
//   let sumS2 = s2 ? (/[^a-zA-z]/.test(s2) ? 0 : sumString(s2.toUpperCase())) : 0;

//   return sumS1 === sumS2;
// }

// function sumString(str: string) {
//   return [...str].reduce((acc, item) => acc + item.charCodeAt(0), 0);
// }

// compare("AD", "BC");
// console.log('compare("AD", "DD")', compare("AD", "DD"));

// https://www.codewars.com/kata/57a77726bb9944d000000b06/train/typescript

// function mango(quantity: number, price: number): number {
//   return quantity < 3
//     ? quantity * price
//     : (Math.floor(quantity / 3) * 2 + (quantity % 3)) * price;
// }

// mango(3, 3);
// console.log("mango(9, 5):", mango(9, 5));

//www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/typescript
// function evenNumbers(array: number[], n: number): number[] {
//   const evenAray = array.filter((item) => item % 2 === 0);
//   return evenAray.slice(evenAray.length - n);
// }

// console.log(
//   "evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)",
//   evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)
// );

// https://www.codewars.com/kata/5913152be0b295cf99000001/train/typescript

function divisions(n: number, divisor: number): number {
  let counter = 0;
  let numb = n;

  while (numb / divisor >= 1) {
    counter += 1;
    numb = Math.floor(numb / divisor);
  }

  return counter;
}

divisions(6, 2);
console.log("divisions(2450, 5)", divisions(2450, 5));
