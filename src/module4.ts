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

// function cookingTime(eggs: number): number {
//   return 5 * Math.ceil(eggs / 8);
// }

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

// // function squareSum(numbers: number[]): number {
// //   return numbers.reduce((acc, item) => acc + item ** 2, 0);
// // }

// // squareSum([1, 2]);
// // console.log("squareSum([1, 2]):", squareSum([1, 2]));

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

// function divisions(n: number, divisor: number): number {
//   let counter = 0;
//   let numb = n;

//   while (numb / divisor >= 1) {
//     counter += 1;
//     numb = Math.floor(numb / divisor);
//   }

//   return counter;
// }

// divisions(6, 2);
// console.log("divisions(2450, 5)", divisions(2450, 5));

// https://www.codewars.com/kata/5d376cdc9bcee7001fcb84c0/train/typescript

// function oddOnesOut(nums: number[]) {
//   const resArr = nums.reduce((acc: number[], item, index, array) => {
//     if (acc.includes(item)) {
//       acc.push(item);
//       return acc;
//     }

//     const numArr = array.filter((num) => item === num).length;

//     if (numArr % 2 === 0) {
//       acc.push(item);
//       return acc;
//     }
//     return acc;
//   }, []);

//   return resArr;
// }

// console.log(
//   "oddOnesOut([100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100]):",
//   oddOnesOut([100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100])
// );

// https://www.codewars.com/kata/57741d8f10a0a66915000001/train/typescript

// const intDiff = (arr: number[], n: number): number => {
//   console.log("arr:", arr);
//   console.log("n:", n);
//   let counter = 0;

//   for (let i = 0; i < arr.length; i += 1) {
//     for (let k = i + 1; k < arr.length; k += 1) {
//       if (
//         n !== 0 &&
//         ((arr[k] - arr[i]) / n === 1 || (arr[k] - arr[i]) / n === -1) &&
//         arr[k] - arr[i] !== 0
//       ) {
//         counter += 1;
//         continue;
//       }
//       if (n === 0 && arr[k] - arr[i] === n) {
//         counter += 1;
//         continue;
//       }
//     }
//   }
//   return counter;
// };

// intDiff([1, 1, 5, 6, 9, 16, 27], 4);
// console.log("intDiff:", intDiff([4, 8, 12, 12, 3, 6, 2], 6));

// arr: [1, 1, 5, 6, 9, 16, 27];
// n: 4;
// arr: [1, 1, 3, 3];
// n: 2;
// arr: [4, 8, 12, 12, 3, 6, 2];
// n: 6;

// https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/typescript

// function squareOrSquareRoot(array: number[]): number[] {
//   return array.map((item) => {
//     if (Math.sqrt(item) === Math.round(Math.sqrt(item))) {
//       return Math.sqrt(item);
//     }
//     return item ** 2;
//   });
// }

// console.log(
//   "squareOrSquareRoot([4, 3, 9, 7, 2, 1]):",
//   squareOrSquareRoot([4, 3, 9, 7, 2, 1])
// );
// squareOrSquareRoot([4, 3, 9, 7, 2, 1]);
// // https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/typescript

// function solution(str: string, ending: string): boolean {
//   return str.slice(str.length - ending.length) === ending;
// }

// solution("abcde", "cde");
// console.log('solution("abcde", "cde"):', solution("abcde", "cde"));

// function greet(name: string): string {
//   return `"Hello, ${name} how are you doing today?"`;
// }

// greet("Ryan");

// https://www.codewars.com/kata/56ed20a2c4e5d69155000301/train/typescript

// const scale = (s: string, k: number, n: number): string => {
//   const modifiedString = !s
//     ? ""
//     : s
//         .split("\n")
//         .map((item) =>
//           [...item]
//             .map((letter) => {
//               let str = "";
//               for (let i = 0; i < k; i += 1) {
//                 str = str + letter;
//               }
//               return str;
//             })
//             .join("")
//         )
//         .map((item, index) => {
//           let str = "";

//           for (let i = 0; i < n; i += 1) {
//             if (index === 0 && i === 0) {
//               str = item;
//               continue;
//             }
//             if (i === 0) {
//               str = "\n" + item;
//               continue;
//             }
//             str = str + "\n" + item;
//           }

//           return str;
//         })
//         .join("");

//   return modifiedString;
// };

// // scale(strng, k, v);
// scale("abcd\nefgh\nijkl\nmnop", 2, 1);

//www.codewars.com/kata/59ca8246d751df55cc00014c/train/typescript

// function hero(bullets: number, dragons: number): boolean {
//   return dragons * 2 <= bullets;
// }

// hero(10, 5);

// https://www.codewars.com/kata/5545f109004975ea66000086/train/typescript

// function isDivisible(n: number, x: number, y: number): boolean {
//   return n % x === 0 && n % y === 0;
// }

// isDivisible(3, 3, 4);

// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/typescript

// function twoSort(s: string[]): string {
//   const sortArr = [...s].sort();

//   return [...sortArr[0]]
//     .map((item, index) => {
//       if (index == 0) {
//         return item;
//       }
//       return "***" + item;
//     })
//     .join("");
// }

// console.log(
//   twoSort([
//     "bitcoin",
//     "take",
//     "over",
//     "the",
//     "world",
//     "maybe",
//     "who",
//     "knows",
//     "perhaps",
//   ])
// );

// https://www.codewars.com/kata/5641275f07335295f10000d0/train/typescript

// function splitTheBill(x: { [k: string]: number }): { [k: string]: number } {
//   const arr = Object.values(x);
//   const average = arr.reduce((acc, item) => acc + item, 0) / arr.length;

//   const resObj = Object.fromEntries(
//     Object.entries(x).map((item) => [
//       item[0],
//       Number((item[1] - average).toFixed(2)),
//     ])
//   );

//   return resObj;
// }

// splitTheBill({ A: 40, B: 25, C: 10, D: 153, E: 58 });

// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/typescript

// function firstNonConsecutive(arr: number[]): null | number {
//   for (let i = 0; i < arr.length - 1; i += 1) {
//     if (arr[i + 1] - arr[i] === 1) {
//       continue;
//     }

//     return arr[i + 1];
//   }

//   return null;
// }

// firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]);

// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/typescript

// function stringToArray(s: string): string[] {
//   return s.split(" ");
// }

// stringToArray("Robin Singh");

// https://www.codewars.com/kata/555a67db74814aa4ee0001b5/train/typescript

// const testEven = (n: number): boolean => n % 2 === 0;

// testEven(0);

// function findMultiples(integer: number, limit: number): number[] {
//   const resArr: number[] = [];
//   do {
//     if (resArr.length === 0) {
//       resArr.push(integer);
//     } else {
//       resArr.push(resArr[resArr.length - 1] + integer);
//     }
//   } while (resArr[resArr.length - 1] + integer <= limit);
// function findMultiples(integer: number, limit: number): number[] {
//   const resArr: number[] = [];
//   do {
//     if (resArr.length === 0) {
//       resArr.push(integer);
//     } else {
//       resArr.push(resArr[resArr.length - 1] + integer);
//     }
//   } while (resArr[resArr.length - 1] + integer <= limit);

//   return resArr;
// }
//   return resArr;
// }

// findMultiples(11, 54);

// https://www.codewars.com/kata/56b1f01c247c01db92000076/train/typescript

// function doubleChar(str: string): string {
//   return [...str].map((letter) => letter + letter).join("");
// }

// console.log('doubleChar("abcd"):', doubleChar("abcd"));
// doubleChar("abcd");

// https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b/train/typescript

// function reverseList(list: number[]): number[] {
//   return list.reverse();
// }

// reverseList([1, 2, 3, 4]);

// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/typescript

// const distinct = (a: number[]): number[] => {
//   console.log("new Set(a):", new Set(a));
//   return Array.from(new Set(a));
// };

// console.log("distinct([1, 1, 2]):", distinct([1, 1, 2]));
// distinct([1, 1, 2]);

// https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/typescript

// function hello(name = ""): string {
//   if (!name) {
//     return "Hello, World!";
//   }
//   return `Hello, ${
//     name.toLowerCase().charAt(0).toUpperCase() + name.toLowerCase().slice(1)
//   }`;
// }

// console.log('hello("johN"):', hello("johN"));
// hello("johN");

// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/typescript

// function solution(str: string): string {
//   return [...str].reverse().join(""); // reverse this!
// }

// console.log('solution("world"):', solution("world"));
// solution("world");

// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/typescript

// function noSpace(x: string): string {
//   return x.split(" ").join("");
// }

// console.log(
//   'noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"):',
//   noSpace("8 j 8   mBliB8g  imjB8B8  jl  B")
// );
// noSpace("8 j 8   mBliB8g  imjB8B8  jl  B");

// const golos = "aeyuio";
// const progolos = "qwrtpsdfghjklzxcvbnm";

// const modify = (str: string): {}[] => {
//   return [...str].reduce((acc, letter, index) => {
//     return [
//       ...acc,
//       {
//         pos: index,
//         char: letter,
//         type: golos.includes(letter.toLowerCase())
//           ? 1
//           : progolos.includes(letter.toLocaleLowerCase())
//           ? 2
//           : 3,
//       },
//     ];
//   }, []);
// };

// console.log("modify('I like js')", modify("I like js"));
// modify("I like js");

// Дана текстова строка англійською.
// Перетворити в масив об'єктів, де формат об'єкта такий:
// {
//   pos: <позиція>
//   char: <символ в верхньому регістрі>
//   type: <1 - голосна (aeyuio), 2 - приголосна (qwrtpsdfghjklzxcvbnm), 3-інші>
// }

// Наприклад
// 'I like js'

// Результат:
// [
//     { "pos": 0, "char": "I", "type": 1 },
//     { "pos": 1, "char": " ", "type": 3 },
//     { "pos": 2, "char": "L", "type": 2 },
//     { "pos": 3, "char": "I", "type": 1 },
//     { "pos": 4, "char": "K", "type": 2 },
//     { "pos": 5, "char": "E", "type": 1 },
//     { "pos": 6, "char": " ", "type": 3 },
//     { "pos": 7, "char": "J", "type": 2 },
//     { "pos": 8, "char": "S", "type": 2 }
// ]

// https://www.codewars.com/kata/5e4217e476126b000170489b/train/typescript

// function polydivisible(x: number): boolean {
//   return ![...x.toString()].find((item, index, array) => {
//     const numb = Number(array.slice(0, index + 1).join(""));
//     return numb % (index + 1) !== 0;
//   });
// }

// console.log("polydivisible(123220):", polydivisible(123220));
// polydivisible(123220);
// findMultiples(11, 54);

// Quarter of the year
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/typescript

// export function quarterOf(month: number): number {
//   switch (true) {
//     case month >= 1 && month <= 3:
//       return 1;
//     case month > 3 && month <= 6:
//       return 2;
//     case month > 6 && month <= 9:
//       return 3;
//     case month > 9 && month <= 12:
//       return 4;

//     default:
//       return 0;
//   }
// }

// console.log(quarterOf(3));

// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/typescript

// function sameCase(a: string, b: string): number {
//   if (!isLetter(a) || !isLetter(b)) {
//     return -1;
//   }

//   return (a.toLowerCase() === a && b.toLowerCase() === b) ||
//     (a.toUpperCase() === a && b.toUpperCase() === b)
//     ? 1
//     : 0;
// }

// function isLetter(char: string): boolean {
//   return /^[a-zA-Z]$/.test(char);
// }
// console.log(sameCase("a", "b"));

// https://www.codewars.com/kata/5708f682c69b48047b000e07/train/javascript

// function multiply(number: number): number {
//   const numdDigits = isNaN(Number(number.toString()[0]))
//     ? number.toString().length - 1
//     : number.toString().length;

//   return number * Math.pow(5, numdDigits);
// }

// console.log(multiply(-2));

// https://www.codewars.com/kata/56f7493f5d7c12d1690000b6/train/typescript

// function mean(lst: string[]): [number, string] {
//   const arr: [number, string] = [...lst].reduce(
//     (acc, item, index) => {
//       console.log("isNaN(Number(item):", isNaN(Number(item)));
//       if (isNaN(Number(item))) {
//         acc[1] = acc[1] + item;
//         console.log("acc:", acc);
//         return acc;
//       }

//       acc[0] = acc[0] + Number(item);

//       console.log("acc:", acc);
//       return acc;
//     },
//     [0, ""]
//   );

//   arr[0] = arr[0] / 10;

//   return arr;
// }

// const lst = [
//   "u",
//   "6",
//   "d",
//   "1",
//   "i",
//   "w",
//   "6",
//   "s",
//   "t",
//   "4",
//   "a",
//   "6",
//   "g",
//   "1",
//   "2",
//   "w",
//   "8",
//   "o",
//   "2",
//   "0",
// ];

// console.log(mean(lst));

// https://www.codewars.com/kata/57b68bc7b69bfc8209000307/train/typescript

// function average(scores: number[]): number {
//   const sum = scores.reduce((acc, item) => (acc += item), 0);
// function average(scores: number[]): number {
//   const sum = scores.reduce((acc, item) => (acc += item), 0);

//   return Math.round(sum / scores.length);
// }
//   return Math.round(sum / scores.length);
// }

// const scores = [49, 3, 5, 300, 7];
// const scores = [49, 3, 5, 300, 7];

// // average(scores);
// console.log("average(scores):", average(scores));

// https://www.codewars.com/kata/57cc981a58da9e302a000214/train/typescript

// Small enough?

// function smallEnough(a: number[], limit: number): boolean {
//   for (let k = 0; k <= a.length - 1; k += 1) {
//     if (a[k] > limit) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(smallEnough([66, 101], 200));
// // average(scores);
// console.log("average(scores):", average(scores));

// https://www.codewars.com/kata/57faf12b21c84b5ba30001b0/train/typescript
// function remove(s: string): string {
//   let str="";

//   for (let i = 0; i < s.length; i += 1) {

//     if (s[i] === "!" && i !== s.length - 1) {
//       continue
//     } else  { str=str+s[i]
//     }
//   }

//   console.log('str:', str)
//   if (str[str.length - 1] !== "!") {
//     str=str+"!"
//   }

//   return str;

// }

// console.log(remove("Hi!"))

// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/typescript

// class Kata {
//   static highAndLow(numbers: string): string {

//     const max:string=Math.max(...numbers.split(" ").map((item)=>Number(item))).toString()
//     const min:string=Math.min(...numbers.split(" ").map((item)=>Number(item))).toString()

//     return `${max} ${min}`
//   }
// }

// console.log(Kata.highAndLow("1 20 3"))

// function sum(arr) {
//   return arr.reduce((acc, item) => {
//     if (item % 2 === 0) {
//       return acc + item;
//     }
//     return acc;
//   }, 0);
// }

// console.log(sum([4]));

// https://www.codewars.com/kata/54557d61126a00423b000a45/train/typescript

// function shorterReverseLonger(a: string, b: string): string {
//   return a.length >= b.length
//     ? b + [...a].reverse().join("") + b
//     : a + [...b].reverse().join("") + a;
// }

// console.log(shorterReverseLonger("first", "abcde"));

// https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/typescript

// function decipherThis(str: string): string {
//   return str
//     .split(" ")
//     .map((item) => {
//       const int = parseInt(item);
//       const letter = String.fromCharCode(int);
//       const newItem = item.replace(int.toString(), letter);
//       const arrFromNewItem = [...newItem];
//       [arrFromNewItem[1], arrFromNewItem[arrFromNewItem.length - 1]] = [
//         arrFromNewItem[arrFromNewItem.length - 1],
//         arrFromNewItem[1],
//       ];

//       return arrFromNewItem.join("");
//     })
//     .join(" ");
// }

// 72olle 103doo 100ya

// decipherThis("72olle 103doo 100ya");
// console.log(
//   'decipherThis("72olle 103doo 100ya"):',
//   decipherThis("72olle 103doo 100ya")
// );

// https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611/train/typescript

// function getLengthOfMissingArray(arrayOfArrays: any[]): number {
//   if (
//     arrayOfArrays.length === 0 ||
//     arrayOfArrays.includes(null) ||
//     arrayOfArrays.find((item) => item.length === 0)
//   ) {
//     return 0;
//   }

//   const arrayOfLength = arrayOfArrays
//     .map((item) => item.length)
//     .sort((a, b) => a - b);

//   for (let i = 0; i < arrayOfLength.length; i += 1) {
//     if (
//       i !== arrayOfLength.length - 1 &&
//       arrayOfLength[i + 1] - arrayOfLength[i] !== 1
//     ) {
//       return arrayOfLength[i] + 1;
//     }
//     continue;
//   }

//   return 0;
// }

// console.log(
//   getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
// );

// https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/typescript

// function partsSums(ls: number[]): number[] {
//   const modifiedArr = ls.map((item, index, array) =>
//     array.slice(index).reduce((acc, item) => acc + item, 0)
//   );

//   return [...modifiedArr, 0];
// }

// function partsSums(ls: number[]): number[] {
//   const result: number[] = new Array(ls.length + 1);
//   result[ls.length] = 0;

//   let sum = 0;
//   for (let i = ls.length - 1; i >= 0; i--) {
//     sum += ls[i];
//     result[i] = sum;
//   }

//   return result;
// }

// // function partsSums(ls: number[]): number[] {
// //   let total = ls.reduce((acc, cur) => acc + cur, 0);
// //   return [total, ...ls.map((num) => (total -= num))];
// // }

// const arr = [0, 1, 3, 6, 10];
// console.log(partsSums(arr));

// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/typescript

// function divisors(n: number) {
//   let numberDivis = 0

//   for (let i = 1; i <= n; i += 1) {
//     if (n % i === 0) {
//       numberDivis+=1
//     }
//     continue
//   }

//   return numberDivis

// }

// console.log(divisors(64))

// https://www.codewars.com/kata/56bdd0aec5dc03d7780010a5/train/typescript

// function nextHigher(n: number): number {
//   const arr: number[] = []
//   let numb= n

//   do {
//     arr.unshift(numb % 2)
//     numb=Math.floor(numb/2)
//     console.log('numb:', numb)

//   } while (numb >= 1);

//   console.log("arr", arr)

//   const sum = arr.reduce((acc, item) => acc + item, 0)
//   console.log('sum:', sum)
//   // ======
//   let nextSum=0
//   let nextArr: number[] = []
//   let nextNumb=n+1

//   do {
//     nextSum = 0
//     nextArr = []
//     let testNumb=nextNumb

//     do {

//       nextArr.unshift(testNumb % 2);
//       testNumb = Math.floor(testNumb / 2)

//     } while (testNumb >= 1);

//     console.log('nextArr:', nextArr)
//     console.log('arr:', arr)
//     nextSum = arr.reduce((acc, item) => acc + item, 0)
//     const testSum = nextArr.reduce((acc, item) => acc + item, 0)
//     console.log('testSum:', testSum)

//     console.log('nextSum:', nextSum)
//        testNumb+=1

// } while (nextSum!==sum);

//   return nextNumb;
//  }

// console.log(nextHigher(323423))

// https://www.codewars.com/kata/58663693b359c4a6560001d6/train/typescript

// function mazeRunner(maze: number[][], directions: string[]): string {
//   // Find start point
//   const startPointVert = maze.findIndex((item) => item.includes(2));
//   const startPointHor = maze[startPointVert].findIndex((item) => item === 2);

//   let startCoordinates = [startPointVert, startPointHor];
//   let res = "";

//   for (let i = 0; i < directions.length; i += 1) {
//     switch (directions[i]) {
//       case "N":
//         startCoordinates[0] -= 1;
//         res = checkPoint(startCoordinates[0], startCoordinates[1]);

//         break;
//       case "E":
//         startCoordinates[1] += 1;
//         res = checkPoint(startCoordinates[0], startCoordinates[1]);

//         break;
//       case "S":
//         startCoordinates[0] += 1;
//         res = checkPoint(startCoordinates[0], startCoordinates[1]);

//         break;
//       case "W":
//         startCoordinates[1] -= 1;

//         res = checkPoint(startCoordinates[0], startCoordinates[1]);

//         break;
//       default:
//         break;
//     }

//     switch (res) {
//       case "Safe place to walk":
//         break;
//       case "Wall":
//         return "Dead";
//       case "Dead":
//         return "Dead";
//       case "Lost":
//         return "Lost";

//       default:
//         return "Finish";
//     }
//   }

//   function checkPoint(coordinateOne: number, coordinateTwo: number): string {
//     if (
//       coordinateOne > maze.length - 1 ||
//       coordinateOne < 0 ||
//       coordinateTwo < 0 ||
//       coordinateTwo > maze.length - 1
//     ) {
//       return "Dead";
//     }

//     switch (maze[coordinateOne][coordinateTwo]) {
//       case 0:
//         return "Safe place to walk";
//       case 2:
//         return "Safe place to walk";
//       case 1:
//         return "Wall";
//       case 3:
//         return "Finish Point";
//       default:
//         return "Lost";
//     }
//   }

//   return "Lost";
// }

// let maze = [
//   [0, 2, 0, 0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 0, 0, 0, 3],
//   [0, 1, 0, 0, 0, 0, 0, 0],
//   [0, 0, 1, 1, 0, 0, 1, 0],
//   [0, 1, 0, 0, 0, 0, 0, 0],
// ];

// console.log(
//   mazeRunner(maze, [
//     "S",
//     "N",
//     "W",
//     "W",
//     "N",
//     "S",
//     "E",
//     "S",
//     "E",
//     "N",
//     "W",
//     "W",
//     "E",
//     "E",
//     "N",
//     "S",
//     "E",
//     "S",
//     "W",
//   ])
// );

//https://www.codewars.com/kata/54eb33e5bc1a25440d000891/train/typescript

// Подумати над цим прикладом!!!!

// const decompose = (n: number): null | number[] => {
//   const sqNumb = n ** 2;
//   let resArr: number[] = [];
//   console.log("sqNumb:", sqNumb);

//   for (let i = n - 1; i >= 1; i -= 1) {
//     console.log("i:", i);
//     let resArrSqSumm = resArr.reduce((acc, item) => acc + item ** 2, 0);
//     console.log("resArrSqSumm:", resArrSqSumm);

//     if (resArrSqSumm + i ** 2 <= sqNumb && i !== 1) {
//       console.log("AAAAAAAAAAAA");
//       resArr.unshift(i);
//       console.log('resArr:', resArr)
//       continue;
//     }

//     if (resArrSqSumm + i ** 2 !== sqNumb && i === 1) {
//       resArr = [];
//       continue;
//     }
//   }

//   console.log(resArr);

//   // your code
//   return resArr.length > 0 ? resArr : null;
// };

// console.log(decompose(11));

// https://www.codewars.com/kata/57d5e850bfcdc545870000b7/train/typescript

//  Подумати!!!!

// function deadAntCount(ants: string | null): number {
//   if (!ants) { return 0 }

//   console.log(ants?.split(" "))

//   const allAnts=ants?.split(" ").length
//   console.log('allAnts:', allAnts)
//   const liveAnts= ants?.split(" ").filter((item)=>item==="ant").length
//   console.log('liveAnts:', liveAnts)

//   return allAnts- liveAnts
// }

// console.log(deadAntCount("ant ant .... a nt"))

// https://www.codewars.com/kata/59a8570b570190d313000037/train/typescript

// function sumCubes(n: number): number {
//   let sum = 0

// for (let i = 1; i <= n; i++) {
// sum+=Math.pow(i,3)
// }

//   return sum
// }

// console.log(sumCubes(3) )

// function howMuchILoveYou(petals: number): string {
//   const arr = [
//     "I love you",
//     "a little",
//     "a lot",
//     "passionately",
//     "madly",
//     "not at all",
//   ];

//   const petal = petals <= 6 ? petals : petals % 6 === 0 ? 6 : petals % 6;

//   return arr[petal - 1];
// }

// console.log(howMuchILoveYou(12));

// function monkeyCount(n: number) {
//   return Array.from({ length: n }, (item, index) => index + 1);
// }

// console.log(monkeyCount(20));

// https://www.codewars.com/kata/56e3cd1d93c3d940e50006a4/train/typescript

// function makeValley(arr: number[]): number[] {

//   const sortedArray=arr.sort((a,b)=>b-a)

//   let decreasingArray:number[] = []
//   let increasingArray:number[]=[]

//   for (let i = 0; i < sortedArray.length; i += 1) {
//     if (i === 0 || i % 2 === 0) {
//       decreasingArray.push(sortedArray[i])
//       continue
//     }

//     increasingArray.unshift(sortedArray[i])

//   }

//   return [...decreasingArray, ...increasingArray]
// }

// makeValley([14, 10, 8])
// console.log(makeValley( [79, 35, 54, 19, 35, 25]))

// https://www.codewars.com/kata/556cebcf7c58da564a000045/train/typescript

// function numberOfRectangles(m: number, n: number): number {
//   const res = m * n + m + n + m - 2 + n - 2;

//   return res;
// }

// console.log(numberOfRectangles(4, 4));

// https://www.codewars.com/kata/5aa736a455f906981800360d/train/typescript

// function feast(beast: string, dish: string): boolean {
//   return beast[0] + beast[beast.length - 1] === dish[0] + dish[dish.length - 1];
// }
// function feast(beast: string, dish: string): boolean {
//   return beast[0] + beast[beast.length - 1] === dish[0] + dish[dish.length - 1];
// }

// console.log(feast("great blue heron", "garlic naan"));
// console.log(feast("great blue heron", "garlic naan"));

/* https://www.codewars.com/kata/56a4872cbb65f3a610000026 */

// function maxRot(n:number):number {
//    const arrStr= [...n.toString()]
//    console.log('arrStr:', arrStr)

//     const arr = []

//     for (let i = 0; i < arrStr.length-1; i++) {
//         // let a = arrStr[i];
//         console.log('arr:', arr)

//         if (i === 0) {

//             arr.push([...arrStr.slice(i+1, arrStr.length),arrStr[i] ])
//             continue;

//         }
//         arr.push([...arr[i-1].slice(0,i),...arr[i-1].slice(i+1, arr[i-1].length),arr[i-1][i]])

//     }

// const numberArray=[arrStr,...arr].map((item)=>Number(item.join("")))
// const maxNumber=Math.max(...numberArray)

//   return maxNumber

// }

// console.log(maxRot(507992495))

// https://www.codewars.com/kata/58d248c7012397a81800005c/train/typescript

// function cubeChecker(volume: number, side: number): boolean {
//   return volume > 0 && side > 0 && Math.cbrt(volume) === side ? true : false;
// }

// console.log(cubeChecker(512000, 80));

// https://www.codewars.com/kata/5865918c6b569962950002a1/train/typescript

// function strCount(str: string, letter: string): number {
//   return [...str].reduce((acc, item) => {
//     if (item === letter) {
//       return acc + 1;
//     }
//     return acc;
//   }, 0);
// }

// console.log(strCount("Hello", "l"));

// https://www.codewars.com/kata/547274e24481cfc469000416/train/typescript

// class God {
//   /**
//    * @returns Human[]
//    */
//   static create(): Array<Man | Woman> {
//     return [new Man(), new Woman()];
//   }
// }

// export class Human {}
// export class Man extends Human {}
// export class Woman extends Human {}

// https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/train/typescript

// function toCsvText(array: number[][]): string {
//   return array.reduce((str, item, index, array) => {
//     return index < array.length - 1
//       ? str + item.join(",") + "\n"
//       : str + item.join(",");
//   }, "");
// }

// console.log(
//   toCsvText([
//     [0, 1, 2, 3, 45],
//     [10, 11, 12, 13, 14],
//     [20, 21, 22, 23, 24],
//     [30, 31, 32, 33, 34],
//   ])
// );

// https://www.codewars.com/kata/544675c6f971f7399a000e79/train/typescript

// function stringToNumber(str: string): number {
//   return Number(str);
// }

// console.log(stringToNumber("1234567890"));


// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/typescript


// const summation = (num: number) => {
//     let res=0;
//     for (let i = 0; i <= num; i++) {

//        res+=i
     
      
//     }

//     return res
// }

// console.log(summation(8))

// // https://www.codewars.com/kata/59b710ed70a3b7dd8f000027/train/typescript

// function isAllPossibilities(x: number[]): boolean {
//     console.log('x:', x)
    
//     const sortedArray = x.sort((a, b) => a - b)
//     console.log('sortedArray:', sortedArray)

//     console.log(sortedArray[sortedArray.length-1]===0&& sortedArray.length>1||sortedArray.length===0||sortedArray[0]<0|| sortedArray[sortedArray.length-1]>sortedArray.length-1?false:true   )
   
//     return sortedArray[sortedArray.length-1]===0&& sortedArray.length>1||sortedArray.length===0||sortedArray[0]<0|| sortedArray[sortedArray.length-1]>sortedArray.length-1 ||sortedArray[sortedArray.length-1] !==sortedArray.length-1?false:true
// }


// console.log(isAllPossibilities([
//   6, 2, 4, 2, 2,
//   2, 1, 5, 0, 0
// ]))


// https://www.codewars.com/kata/5a0aae48ba2a14cfa600016d/train/typescript

// // function startSmoking(bars: number, boxes: number): number {


// //     const cigarettesInBox = 18;
// //     const boxesInBar = 10;
// //     let totalCigarettes = boxes * cigarettesInBox + bars * boxesInBar * cigarettesInBox;

// //     let stubs = 0;
// //     let smokedCigarettes = 0;

// //     do {
// //         smokedCigarettes += totalCigarettes;
// //         stubs = stubs+totalCigarettes;
// //         totalCigarettes=Math.floor(stubs/5)
// //         stubs = stubs - Math.floor(stubs / 5) * 5;
// //         if (stubs + totalCigarettes  < 5) { smokedCigarettes += totalCigarettes;}
// //     } while ((stubs+totalCigarettes)>5);
    

// // return smokedCigarettes;
// // }


// // console.log(startSmoking(1,0))

// https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/typescript

// // function divisibleBy(numbers: number[], divisor: number): number[]{
// //   const res: number[] = [];
// //   for (let i = 0; i < numbers.length; i++) {
// //     if (numbers[i] % divisor === 0) {
// //       res.push(numbers[i]);
// //     }
// //   }


// //   return res
// // }


// console.log(divisibleBy([1,2,3,4,5,6], 2))


// console.log(divisibleBy([1,2,3,4,5,6], 2))


// // https://www.codewars.com/kata/57f222ce69e09c3630000212/train/typescript
// function well(x: string[]): string{
//     if (!x.includes("good")) {
//         return 'Fail!'
//     }

//     return x.filter(item => item === "good").length <= 2 ? 'Publish!' : 'I smell a series!'
// }

// console.log(well(['bad', 'bad', 'bad']))
// console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))
// console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))



// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/typescript

// function repeatStr(n: number, s: string): string {

// return Array.from({length:n}, x=>s).join("");
// }



// repeatStr(3, "*")
// console.log('repeatStr(3, "*"):', repeatStr(3, "*"))


// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/typescript

// function basicOp(operation: string, value1: number, value2: number): number {
//   let res;
//   switch (operation) {
//     case '+':
//       res = value1 + value2;
//       break;
//     case '-':
//       res = value1 - value2;
//       break;
//     case '*':
//       res = value1 * value2;
//       break;
//     case '/':
//       res = value1 / value2;
//       break;
//     default:
//       throw new Error('Невідома операція: ' + operation);
//   }
//   return res;
// }


// basicOp('+', 4, 7)
// console.log('basicOp('+', 4, 7):', basicOp('+', 4, 7))


// https://www.codewars.com/kata/56c24c58e0c0f741d4001aef/train/typescript

// function isReallyNaN(val: any): boolean {

//   return isNaN(Number(val));
// };

// isReallyNaN('37')
// console.log('isReallyNaN("37")', isReallyNaN('37'))


// console.log(isNaN(undefined))


// https://www.codewars.com/kata/56f3a1e899b386da78000732/train/typescript


// https://www.codewars.com/kata/56f3a1e899b386da78000732/train/typescript
// function partlist(arr: string[]): string[][] {
//   const result: string[][] = [];
//   for (let i = 0; i < arr.length-1; i++) {
//     if (i === 0) { result.push([arr[i], arr.slice(i + 1).join(',').replaceAll(",", " ")]); continue }
//     result.push([arr.slice(0,i+1).join(',').replaceAll(",", " "), arr.slice(i + 1).join(',').replaceAll(",", " ")]);

//   }


//   return result
// }

// const arr = ["I", "wish", "I", "hadn't", "come"]

// partlist(arr)


// ===== Remove dupes =================

// function removeDupes(str: string): string {
// return Array.from(new Set (str)).join('');
// }



// console.log(removeDupes('aabbccdddddd'))


// =====flatten aray =================

// function flatten(arr: any[]): number[] {
// console.log('arr:', arr)

//   const res:number[] = []
  
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       res.push(...flatten(arr[i]))
//     } else {
//       res.push(arr[i])
//     }
    
//   }



//   console.log('res:', res)
//   return res
// }


// function flatten(arr: any[]): number[] {
//   const res: number[] = []

//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       res.push(...flatten(arr[i]))
//     }
//     else { res.push(arr[i]) }
    
    
//   }
//   return res
// }


// console.log(flatten([[1],[[2]], [[[3]]], [[[[4]]]]]))


// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/typescript

// function findShort(s: string): number {

//   // return s.split(" ").map((item) => item.length).sort((a, b) => a - b)[0];
//   return Math.min(...s.split(" ").map((item)=>item.length));
  
// }

// findShort("bitcoin take over the world maybe who knows perhaps")
// console.log('findShort("bitcoin take over the world maybe who knows perhaps"):', findShort("bitcoin take over the world maybe who knows perhaps"))



// test task

// function findPath(mountain: number[][]): number {
    
//     const arr:number[][]=Array.from(mountain, item=>Array.from({length:item.length}, item=>item=0))
   

//     for (let i = 0; i < mountain.length; i++) {
//         if (i === 0) { arr[i][0] = mountain[i][0]; continue}
//       for (let j = 0; j < mountain[i].length; j++) {
//           if (j === 0) { arr[i][j] = arr[i - 1][j] + mountain[i][j]; continue }
//           if (j === mountain[i].length - 1) { arr[i][j] = arr[i - 1][j - 1] + mountain[i][j]; continue }
//           arr[i][j] = Math.max(arr[i - 1][j], arr[i - 1][j - 1]) + mountain[i][j]

//       }
//     }

// return Math.max(...arr[arr.length - 1]);
// }


// function findPath(mountain) {
//   const arr = Array.from(mountain, item => Array.from({ length: item.length }, item => item = 0));

//     for (let i = 0; i < mountain.length; i++) {
//         if (i === 0) { arr[i][0] = mountain[i][0]; continue; }
//         for (let j = 0; j < mountain[i].length; j++) {
//             if (j === 0) { arr[i][j] = arr[i - 1][j] + mountain[i][j]; continue; }
//             if (j === mountain[i].length - 1) { arr[i][j] = arr[i - 1][j - 1] + mountain[i][j]; continue; }
//             arr[i][j] = Math.max(arr[i - 1][j], arr[i - 1][j - 1]) + mountain[i][j];
//         }
//     }

//     return Math.max(...arr[arr.length - 1]);
// }




// const arr:number[][]=[[6],[7,10],[12,11,9],[90,25,13,14]]



// console.log('findPath(arr):', findPath(arr))

// https://www.codewars.com/kata/515f51d438015969f7000013/train/typescript

// function pyramid(n: number) : Array<Array<Number>> {
//     return n === 0 ? []: Array.from({ length: n }, (item, index) => Array.from({length:index+1},item=>1))};


//     pyramid(0)
//     console.log(' pyramid(0):',  pyramid(4))


// console.log(Array(10).fill(1))


// const productFib = (prod: number): [number, number, boolean] => {
//     let arr: number[] = []
//     let res:[number, number, boolean]=[0,0,false]

//     for (let i = 0; i < prod; i++) {
//         if (i === 0) { arr.push(i); continue }
//         if (i === 1) { arr.push(i); continue }
//         if (arr[i - 2] * arr[i - 1] === prod) {
//             res = [arr[i - 2], arr[i - 1], true]
//             break
//         }
//         if (arr[i - 2] * arr[i - 1] > prod) {
//             res = [arr[i - 2], arr[i - 1], false]
//             break
//         }
//         arr.push(arr[i - 1] + arr[i - 2])
        
//     };

//     return res
    
// }


// console.log('productFib(5895):', productFib(5895))


// https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/train/typescript

// function chooseBestSum(t: number, k: number, ls: number[]): number | null {
//     const arr = []

//     for (let i = 0; i <= ls.length-k; i += 1) {
//         console.log(ls[i])
//         for (let j = i + 1; j < ls.length; j += 1) {
//             const partArr=ls.slice(j,j+k-1)
//             console.log('partArr:', partArr)
//             if (partArr.length < 2) { break}
//             arr.push([ls[i],...partArr])
//         }
//         if (i > 0) {
//             console.log('i:', i)

//         }
//     }

    

//     console.log(arr)

// }

//  chooseBestSum(163, 3, [50, 55, 56, 57, 58])


// https://www.codewars.com/kata/562c5ea7b5fe27d303000054/train/python

// function sscForperm(arr) {
//     const resArr = [{ "total perm": null }, { "total ssc": null }, { "max ssc": null }, { "min ssc": null }]
//     resArr["total perm"]=arr.
//     console.log('resArr:', resArr)
 
//   return resArr;
// }

// sscForperm([8, 23, -4, 10])




// https://www.codewars.com/kata/580755730b5a77650500010c/train/typescript

// function sortMyString(s: string): string {
//     const res = [...s].reduce((acc:[string[], string[]], item, index) => {
//         if (index % 2 ===0) { acc[0].push(item); return acc }
//         acc[1].push(item); return acc;
//     }, [[], []]);


//   return `${res[0].join("")} ${res[1].join("")}`;
// }


// console.log(sortMyString("CodeWars"))


// https://www.codewars.com/kata/526c7363236867513f0005ca/train/typescript

// function isLeap(year: number): boolean {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         return true;
//       }
//       return false;
//     }
//     return true;
//   }

//   return false;
  
// }

// console.log(isLeap(2020))

// // https://www.codewars.com/kata/5899a4b1a6648906fe000113/train/typescript

// function findRoutes(routes: string[][]): string {

//   const copyRoutes=[...routes];
 

//   const resArr: string[][] = []

// function findUniqueDestinationIndex(routes: string[][]) {

//   const uniqueFirstRoute = routes.find(([first, second]) => {
//     console.log('first:', first)
    
    
//     return !routes.some(([_, dest]) => dest === first)
//   });
//   console.log('uniqueFirstRoute:', uniqueFirstRoute)
 
//   if (!uniqueFirstRoute) {
//     return -1;
//   }
//   return routes.indexOf(uniqueFirstRoute);
// }

// const indexOfFirstElem =findUniqueDestinationIndex(routes);;
  
// resArr.push(copyRoutes[indexOfFirstElem])
//   copyRoutes.splice(indexOfFirstElem, 1)

//  while (copyRoutes.length > 1) {
   
// const index = copyRoutes.findIndex((item) => item[0]===resArr[resArr.length-1][1])
  

//     resArr.push(copyRoutes[index])
//     copyRoutes.splice(index,1)
  
//    }

 

//   const res=[...new Set([...resArr, ...copyRoutes].join(",").split(','))].join(", ").trim()
 



//   return res
// }

// console.log(findRoutes([["Chicago", "Winnipeg"], ["Halifax", "Montreal"], ["Montreal", "Toronto"], ["Toronto", "Chicago"], ["Winnipeg", "Seattle"]]))





// describe("Follow That Spy", function() {
//   it ("Sample", function() {
//   var routes1 = findRoutes([["MNL", "TAG"], ["CEB", "TAC"], ["TAG", "CEB"], ["TAC", "BOR"]]);
//   assert.strictEqual(routes1, "MNL, TAG, CEB, TAC, BOR");
//   var routes2 = findRoutes([["UK", "GER"], ["GER", "BEL"], ["BEL", "CAN"]]);
//   assert.strictEqual(routes2, "UK, GER, BEL, CAN");
//   var routes3 = findRoutes([["Chicago", "Winnipeg"], ["Halifax", "Montreal"], ["Montreal", "Toronto"], ["Toronto", "Chicago"], ["Winnipeg", "Seattle"]]);
//   assert.strictEqual(routes3, "Halifax, Montreal, Toronto, Chicago, Winnipeg, Seattle");
//   var routes4 = findRoutes([["Agra", "Tokyo"], ["Seoul", "Ljubljana"], ["Ljubljana", "Wroclaw"], ["Wroclaw", "Nashville"], ["Nashville", "Amsterdam"], ["Amsterdam", "Hull"], ["Hull", "Vancouver"], ["Vancouver", "Agra"], ["Tokyo", "Manila"]]);
//   assert.strictEqual(routes4, "Seoul, Ljubljana, Wroclaw, Nashville, Amsterdam, Hull, Vancouver, Agra, Tokyo, Manila");
//   var routes5 = findRoutes([["Calgary", "Fargo"], ["Spokane", "Toronto"], ["Winnipeg", "Montreal"], ["Toronto", "Calgary"], ["Fargo", "Winnipeg"]]);
//   assert.strictEqual(routes5, "Spokane, Toronto, Calgary, Fargo, Winnipeg, Montreal");
//   var routes6 = findRoutes([["BRA", "KSA"], ["USA", "BRA"], ["JPN", "PHL"], ["KSA", "UAE"], ["UAE", "JPN"]]);
//   assert.strictEqual(routes6, "USA, BRA, KSA, UAE, JPN, PHL");
//   var routes7 = findRoutes([["HQ", "SH"]]);
//   assert.strictEqual(routes7, "HQ, SH");
//   var routes8 = findRoutes([["San Policarpo", "Oras"], ["Balangiga", "Lawaan"], ["Borongan", "Maydolong"], ["Jipapad", "Maslog"], ["Balangkayan", "Llorente"], ["Mercedes", "Guiuan"], ["Taft", "Sulat"], ["Sulat", "San Julian"], ["Arteche", "San Policarpo"], ["Oras", "Dolores"], ["Dolores", "Can-avid"], ["Can-avid", "Taft"], ["San Julian", "Borongan"], ["Maydolong", "Balangkayan"], ["Llorente", "Hernani"], ["Hernani", "General MacArthur"], ["General MacArthur", "Giporlos"], ["Giporlos", "Balangiga"], ["Lawaan", "Salcedo"], ["Salcedo", "Mercedes"], ["Maslog", "Arteche"]]);
//   assert.strictEqual(routes8, "Jipapad, Maslog, Arteche, San Policarpo, Oras, Dolores, Can-avid, Taft, Sulat, San Julian, Borongan, Maydolong, Balangkayan, Llorente, Hernani, General MacArthur, Giporlos, Balangiga, Lawaan, Salcedo, Mercedes, Guiuan");
//   });
// });


// https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/typescript


// function smash (words: string[]): string {
//    return words.join(" ")
// };


// console.log(smash(["hello", "world"]))


// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/typescript

// function cockroachSpeed(s: number): number{
//   return Math.floor(s*100000/3600);
// }


// console.log(cockroachSpeed(1.08))


// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/typescript

// function sumMix(x: any[]): number {

//   return x.reduce((acc, item) => {
 
// return acc+Number(item)  }, 0)

// }

// console.log(sumMix([9, 3, '7', '3']))


// https://www.codewars.com/kata/56dec885c54a926dcd001095

// class Kata {
//   static opposite(n: number) {
//     return n * -1;
//   }
// }


// console.log(Kata.opposite(1))


// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba/train/typescript

// function nearestSq(n: number): number {

//   console.log('Math.sqrt(n):', Math.sqrt(n))
//   if (!Math.sqrt(n).toString().includes(".")) {
//     return n
//    }
//   return Math.round(Math.sqrt(n))**2
// }

// console.log(nearestSq(111));



// // https://www.codewars.com/kata/59342039eb450e39970000a6/train/typescript
// function oddCount(n: number){
//     // const arr = Array.from({ length: n-1 }, (item, index) => index + 1)
//     // console.log('arr:', arr)
//     // return arr.reduce((acc, item)=>item%2!==0? acc+1:acc,0)
//     // let count = 0;

//     // for (let i = 1; i < n; i++) {
//     //     if (i % 2 !== 0) {
//     //         count += 1
//     //         continue
//     //     }
//     //     continue
        
//     // }

//     // return count
    
//     return Math.ceil((n-1)/2)
// }


// console.log(oddCount(7))


// https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/typescript

// function checkExam(array1: string[], array2: string[]): number {

//     const res = array2.reduce((acc, item, index) => {
//         if (!item) {
//             return acc
//         }
//         if (item === array1[index]) {
//             return acc+4
//         }
//         return acc-1
//     }, 0)
    
//     return res<0? 0:res
//  // good luck
// }


// console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))

// https://www.codewars.com/kata/59e49b2afc3c494d5d00002a/train/typescript

// // const vowels=["a", "e", "i", "o","u"]

// // function sortVowels(str?: number | string | null): string {
// //   if (typeof str !== "string") {
// //     return ""
// //   }

// //  return Array.from(str, item=>vowels.includes(item.toLowerCase())? "|"+item :item +"|").join("\n")
// // };


// // sortVowels('Codewars')

//
// function sortByValueAndIndex(array: number[]): number[] {
  
//   const resArr: number[] = []
//   const copyArr=[...array]
  
//   const arrayToIndex=array.map((item, index)=>item*(index+1))
//   console.log('arrayToIndex:', arrayToIndex)

//   while (copyArr.length > 0) {

//     let maxIndex=arrayToIndex.indexOf(Math.max(...arrayToIndex))
   
//     resArr.unshift(copyArr[maxIndex])
//     copyArr.splice(maxIndex, 1)
//     arrayToIndex.splice(maxIndex, 1)
//   }
 
//   console.log('resArr:', resArr)
//   return resArr.reverse()
// }

// console.log( sortByValueAndIndex([
//   -22, 6, -15, 23,
//   -10, 2,  -9, 10
// ]))


// const salaries={
// //    Manager: { salary: 1000, tax: "10%" },
// //    Designer: { salary: 600, tax: "30%" },
// //    Artist: { salary: 1500, tax: "15%" },}

// const team =  [
//    { name: "Misha", specialization: "Manager" },
//    { name: "Max", specialization: "Designer" },
//    { name: "Vova", specialization: "Designer"},
//    { name: "Leo", specialization: "Artist"},]



// function calculateTeamFinanceReport(salaries, team) {

//     const res = team.reduce((acc, item) => {
//         if (!Object.keys(salaries).includes(item.specialization)) {
//             return acc
//          }
//     return acc[`totalBudget${item.specialization}`] ? {
//             ...acc, totalBudgetTeam: acc.totalBudgetTeam+salaries[item.specialization].salary/((100-parseInt( salaries[item.specialization].tax))/100),[`totalBudget${item.specialization}`]: acc[`totalBudget${item.specialization}`] +
//                 salaries[item.specialization].salary/((100-parseInt( salaries[item.specialization].tax))/100)
//         } : {
//             ...acc, totalBudgetTeam: acc.totalBudgetTeam+salaries[item.specialization].salary/((100-parseInt( salaries[item.specialization].tax))/100),[`totalBudget${item.specialization}`]: 0 +
//                 salaries[item.specialization].salary/((100-parseInt( salaries[item.specialization].tax))/100)
//         }
//     }, {totalBudgetTeam:0})
// ;

// for (const key in res) {
//     if (Object.prototype.hasOwnProperty.call(res, key)) {
//       res[key]=Math.floor(res[key]);
//     }
//     continue
// }

  
//     return res
// }

/* see in console
{
   "totalBudgetTeam":4590, // total budget does not match the sum of specializations due to truncation of the fractional part
   "totalBudgetManager":1111,
   "totalBudgetDesigner":1714,
   "totalBudgetArtist":1764,
}
*/


// //  console.log(JSON.stringify( calculateTeamFinanceReport(salaries, team)))



// // const salaries2 = {
// //    TeamLead: { salary: 1000, tax: "99%" },
// //    Architect: { salary: 9000, tax: "34%" },}
// // const team2 = [
// //    { name: "Alexander", specialization: "TeamLead" },
// //    { name: "Gaudi", specialization: "Architect" },
// //    { name: "Koolhas", specialization: "Architect" },
// //    { name: "Foster", specialization: "Architect" },
// //     { name: "Napoleon", specialization: "General" },]
   
// // console.log(calculateTeamFinanceReport(salaries2, team2))
     
// {"totalBudgetTeam":140909,"totalBudgetTeamLead":100000,"totalBudgetArchitect":40909}


// function showThis() {
//     console.log("This is", this)
// }

// console.log(showThis())

// const user = {
//     name: "Petro",
   
// }

// user.showContext=showThis


// user.showContext()


// class User{
//     constructor(name) {
//         this.name=name
//     }

    
// }

// const mango=new User("Mykola")
// console.log('mango:', mango)


// class User {
//     #email
//     constructor({name, email}) {
//         this.name=name
//         this.#email=email
//     }


//     get email() {
//         return this.#email
//     }

// }

// const newUser = new User({ name: "Mykola", email: "nnv2006@ukr.net", })

// newUser.email
// console.log('newUser.email:', newUser.email)




// let x = 1
// console.log(x++ + x)

// const test = 3
// console.log('test:', test)


// const num=Math.random()
// console.log('num:', num)


// new Date()


// const getUsers = async () => {
//   const users = await fetch("https://jsonplaceholder.typicode.com/users")
//   const usersTest= await users.json()
//   console.log('usersTest:', usersTest)
//   return usersTest
//  }


// const users = getUsers()
// console.log('users:', users)


// https://www.codewars.com/kata/64fc03a318692c1333ebc04c/train/typescript

// // function bestFriend(txt: string, a: string, b: string): boolean {

//   for (let i = 0; i < txt.length; i++) {
//     if (txt[i] === a && txt[i + 1] !== b) {
//       return false
//     }
    
//   }
   
//   return true;
// }



// console.log(bestFriend('he headed to the store', 'h', 'e'))


// https://www.codewars.com/kata/5302d846be2a9189af0001e4/train/typescript

// 'Hello, John Smith! Welcome to Phoenix, Arizona!'

// const sayHello = (name: string[], city: string, state: string):string => {
//   return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
// }

// console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'))

// https://www.codewars.com/kata/573c91c5eaffa3bd350000b0/train/typescript

// function gematria(str: string): number {
   
// const values: Record<string, number> = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   e: 5,
//   f: 6,
//   g: 7,
//   h: 8,
//   i: 9,
//   j: 600,
//   k: 10,
//   l: 20,
//   m: 30,
//   n: 40,
//   o: 50,
//   p: 60,
//   q: 70,
//   r: 80,
//   s: 90,
//   t: 100,
//   u: 200,
//   v: 700,
//   w: 900,
//   x: 300,
//   y: 400,
//   z: 500
//    };
   
// return [...str.replaceAll(" ","")].reduce((acc, item) => acc + values[item.toLocaleLowerCase()], 0);
// }

// console.log('gematria("love"):', gematria("Coding is fun"))

// https://www.codewars.com/kata/5a7778790136a132a00000c1/train/typescript

// function singleDigit(n: number): number {
//    if (n < 10) {
//       return n
//    }
//    let res=binarySum(n)
//    console.log('res:', res)
//    if (res >= 10) {
//       return singleDigit(res)
//    }
//    return res
// }

// function binarySum(numb: number): number {
//    const arr:number[] = [];
//    while (numb > 0) {
//       arr.push(numb % 2);
//       numb = Math.floor(numb / 2);
//    }
//    return arr.reduce((acc, item) => acc+item)
//    }




// console.log(singleDigit(4868872))https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/typescript

// function findEvenIndex(arr: number[]): number
// {

//    for (let i = 0; i < arr.length; i++) {
//       if (leftSideSumm(arr.slice(0, i)) === rightSideSumm(arr.slice(i + 1))) {
//          return i;
//       }
//    }
//    return -1
// }

// function leftSideSumm(arr: number[]): number{
//    console.log(arr)
//    let sum = 0;
//    for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//    }
//    return sum;
// }

// function rightSideSumm(arr: number[]): number {
//    console.log(arr)
//     let sum = 0;
//    for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//    }
//    return sum;
//  }


// console.log(findEvenIndex([20,10,-80,10,10,15,35]))



// https://www.codewars.com/kata/51fc3beb41ecc97ee20000c3/train/typescript

// function makeLooper(str: string): () => string {
//    let numb = 0;
//    return () => { if (numb > str.length-1) {
//       numb = 0;
//    }
//       numb += 1;
//    return str[numb-1]};
// }


// const abc = makeLooper("abc");
 
// console.log(abc())
// console.log(abc())
// console.log(abc())
// console.log(abc())
// console.log(abc())
// console.log(abc())
// console.log(abc())
// console.log(abc())
// console.log(abc())
// console.log(abc())
// console.log(abc())
// console.log(abc())


// function counter(): ()=>number {
//    let count = 0;
   
//    return () => {
//       count += 1;
//       return count;
//    }
// }

// const test=counter()

// console.log(test())
// console.log(test())
// console.log(test())
// console.log(test())
// console.log(test())





// const key = "GA-DE-RY-PO-LU-KI"

// type Key = {
//    [key: string]: string;
// }

// function encode(str: string): string {
//    const keyObj=keyObject(key)
   
// let encodedStr = ""
//    for (let i = 0; i < str.length; i++) {
//       if (keyObj[str[i]]) {
//          encodedStr += keyObj[str[i]]
//       } else {
//          encodedStr += str[i]
//       }
//    }
   
//    return encodedStr;
// }

// function decode(str: string): string {
//    const keyObj = keyObject(key)
//    let decodedStr = ""
//     for (let i = 0; i < str.length; i++) {
//       if (keyObj[str[i]]) {
//          decodedStr += keyObj[str[i]]
//       } else {
//          decodedStr += str[i]
//       }
//    }

//    return decodedStr;
// }

// const keyObject = (key: string): Key => {
//    return key.split("-").reduce((acc, item) => { return {...acc,[item[0]]:item[1],[item[1]]:item[0],[item[0].toLowerCase()]:item[1].toLowerCase(),[item[1]]:item[0],[item[1].toLowerCase()]:item[0].toLowerCase(),[item[0]]:item[1]} },{})
  
// }


// console.log(encode("Ala has a cat"))

// console.log( decode("Gug hgs g cgt"))



// https://www.codewars.com/kata/593a061b942a27ac940000a7/train/typescript

// // function gettingMad(array: number[]): number {
// //    const diffArray:number[] = []
// //    for (let i = 0; i < array.length; i++) {
// //       for (let j = 0; j < array.length; j++) {
// //          if (i !== j) {
// //             diffArray.push(Math.abs(array[i] - array[j]))
// //          }
// //       }
// //     }

//     return Math.min(...diffArray);
// }

// // console.log(gettingMad(([-10, 0, -3, 1])))
// // console.log(gettingMad((([0,0,0,0,0]))))


// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/typescript

// function findUniq(arr: number[]): number {
//     let res = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.lastIndexOf(arr[i])=== arr.indexOf(arr[i]) ) {
//             res = arr[i]
//             break
//         }
//         continue
//     }
//     return res
// }

// console.log(findUniq([
//   8, 8, 8, 8,
//   8, 8, 8, 7
// ]))

// https://www.codewars.com/kata/55466989aeecab5aac00003e/train/typescript


// const sqInRect = (l: number, w: number): null | number[] => {
//    const resArray:number[]=[]
//    if (l === w) return null;

//    if (l < w) {
//       [l,w]=[w,l]
//     }
   
//     // while (l >= w) {
//     //    resArray.push(w)
//     //    l = l - w;
//     //    [l,w]=[w,l]
//     // }
    
    


    


//     return resArray
// }


// console.log(sqInRect(20, 14))


//   testing(5, 5, null);
//         testing(5, 3, [3, 2, 1, 1]);
//         testing(3, 5, [3, 2, 1, 1]);
//         testing(20, 14, [14, 6, 6, 2, 2, 2]);
//         testing(14, 20, [14, 6, 6, 2, 2, 2]);


// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/typescript

// function order(words: string): string{
    
//     if (!words) { return "" }

//     const wordsArray = words.split(" ").sort((a, b) => {
//         const aNumber:number = Number([...a].reduce((acc, item) => parseInt(item)?acc+item:acc,""))
//         const bNumber:number = Number([...b].reduce((acc, item) => parseInt(item)?acc+item:acc,""))
        
//         return aNumber-bNumber
//     });

//     return wordsArray.join(" ")
// }

// console.log(order("is2 Thi1s T41est 3a"))



// https://www.codewars.com/kata/541c8630095125aba6000c00/train/typescript


// const digitalRoot = (n: number): number => {

//    if (n < 10) {
//       return n;
//    }

//    const sum = n.toString().split("").reduce((acc, item) => acc + Number(item), 0);
 
//    return sum<10?sum :digitalRoot(sum)
//  };



// console.log('digitalRoot(16):', digitalRoot(456))



// https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/typescript
// interface CharCount {
//  [key: string]: number;
// }
// function longestRepetition(text: string): [string, number] {
//    if (!text) { return ["",0]}
//    const res=[]
// interface CharCount {
//  [key: string]: number;
// }
// function longestRepetition(text: string): [string, number] {
//    if (!text) { return ["",0]}
//    const res=[]
   

// // // Використовуємо цей інтерфейс для типізації об'єкта
// // const obj: CharCount = Array.from(text).reduce<CharCount>((acc, item) => {
// //   if (acc[item]) {
// //     acc[item] = acc[item] + 1;
// //   } else {
// //     acc[item] = 1;
// //   }
// //   return acc;
// // }, {} as CharCount);

// //    const max= Math.max(...Object.values(obj))
// //    const maxKey:string = Object.keys(obj).find(key => obj[key] === max) ||""
   
// //   return [maxKey,max]
// // }


// // console.log(longestRepetition('aaabbbb'))

// =========

// type Dog = {
//     bark:()=>void
// }

// type Cat = {
//     meow: () => {}
// }



// function isDog(animal: Dog | Cat): animal is Dog{ 
//     return "bark" in animal   
// }


// function letAnimalTalk(animal: Dog | Cat) { 
//     if (isDog(animal)) {
//         animal.bark()
//     } else { 
//         animal.meow()
//     }
// }



function identity<T>(arg: T): T{
    return arg
}
 
identity<string>("Hello")



// console.log("Hello world!");

// const a = 1

// const b = 2;

// const c = a + b;

// const d = c;

// Homeworks GoIt
// Task 1 

let age:number = 50;
let nameTest:string = 'Max';
let toggle:boolean = true;
let empty:null = null;
let notInitialize:any;
let callback = (a: number): number => { return 100 + a };

// Task 2
let anything:any = -20;
anything = 'Text';
anything = {};

// Task 3

let some:unknown;
some = 'Text';
let str: string;
if (typeof some === "string") { str = some };

// Task 4 

let person: [string, number] = ['Max', 21];

// Task 5
// Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)?
let variable: string | number
// І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable'(literal type) ?
let varTest:'enable' | 'disable'


// Task 6
function showMessage(message):void {
  console.log(message);
}

function calc(num1:number, num2:number):number {
  return num1 + num2;
}

function customError():never {
  throw new Error('Error');
}

// Task 7
// Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
// і повертає boolean значення, що вказує, чи це день робочий чи вихідний.

enum weekDays {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}


const isWeekend = (day: weekDays): boolean => day === weekDays.SATURDAY || day === weekDays.SUNDAY 

console.log(isWeekend(weekDays.MONDAY))

// Task 8

/* Створіть тип "Gender", використовуючи union type,
який може містити значення "male", "female".Створіть змінну myGender цього типу. */

type Gender = 'male' | 'female'

const myGender: Gender = 'male'

// Task 9

// type Page = {
//    title: string,
//   likes: number,
//   accounts: string[],
//    status: "open" | "close",
//     details?: {
//     createAt:  Date,
//     updateAt: Date,
//   }
// }

// const page1:Page = {
//   title: 'The awesome page',
//   likes: 100,
//   accounts: ['Max', 'Anton', 'Nikita'],
//   status: 'open',
//   details: {
//     createAt: new Date('2021-01-01'),
//     updateAt: new Date('2021-05-01'),
//   }
// }

// const page2:Page = {
//   title: 'Python or Js',
//   likes: 5,
//   accounts: ['Alex'],
//   status: 'close',
// }

// Generic

// Task 1

// Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа.Доповніть цю функцію,
// використовуючи generics, щоб вона повертала правильний тип.

function getPromise ():Promise<[string,number]> {
  return new Promise((resolve) => {
    resolve(['Text', 50]);
  });
}

getPromise()
.then((data) => {
  console.log(data);
});

// Task 2
/* У вас є тип AllType.Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
Ваше завдання – використовувати Pick та generics для вказівки,
що поля цих об'єктів належать AllType. Функція compare повинна повертати AllType.

 */

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare (top:Pick<AllType,"name"|"color">, bottom:Pick<AllType, "position"|"weight" >): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

// Task 3
// У вас є функція merge, яка поєднує два об'єкти.
// Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.

function merge<T extends object, U extends object> (objA:T, objB:U) {
  return Object.assign(objA, objB);
}

// Task 4

// Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:


// interface IProps {
//   title: string;
// }


// class Component<T extends IProps> {
//   constructor (public props:T) {

//   }
// }

// class Page extends Component<IProps> {
//   pageInfo ():void {
//     console.log(this.props.title);
//   }
// }


// interface IPerson {
//   name: string;
//   age: number
// }

// interface IPilot extends IPerson {
//   greet():void;
// }

// class Pilot implements IPilot{
//   public greet;
//   constructor(public age: number, public name: string) {
//       if(age<28) {
//         console.log('Nooooo');
         
//     }
//     this.greet=()=>{ console.log("Hello") };
//   }

 
  
 
// }

// const pilot = new Pilot(27, "Mykola");
// const pilot2 = new Pilot(29, "Mykola");

// console.log(pilot)
// console.log(pilot2)


// Task 5

// Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ - значення.
// Використовуйте generics, щоб цей інтерфейс міг працювати з будь - якими типами ключів та значень.

// interface KeyValuePair<T, U> {
//   key:T;
//   value:U;
// }


// Task 6

// type User1 = {
//   name?: string;
//   surname?: string;
//   email: string;
//   password: string;
// }

// function createOrUpdateUser(initialValues: User1) {
//   // Оновлення користувача
// }

// createOrUpdateUser({ email: 'user@mail.com', password: 'password123' });


// Task 7

// У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку.
// Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.

// export enum UserRole {
//   admin = 'admin',
//   editor = 'editor',
//   guest = 'guest',
// }


// // Замініть наступний код на версію за допомогою Record
// const RoleDescription:Record<UserRole, string> = {
//   [UserRole.admin]: 'Admin User',
//   editor: 'Editor User',
//   guest: 'Guest User',
// };

// Task 8

// У вас є тип Form, який містить інформацію про форму, включаючи поле errors.
// Ви хочете створити новий тип Params, який включає всі поля з Form, крім errors.

// type Errors = {
//   email?: string[];
//   firstName?: string[];
//   lastName?: string[];
//   phone?: string[];
// };

// type Form = {
//   email: string | null;
//   firstName: string | null;
//   lastName: string | null;
//   phone: string | null;
//   errors: Errors;
// };

// Реалізуйте Params так, щоб унеможливити поле 'errors' з типу Form
// type Params = Omit<Form,"errors">;


// ООП
// class MyClass {
//   private protectedMethod() {
//     return 'Something';
//   }

//   public myPublicMethod() {
//     return this.protectedMethod();
//   }
// }

// const test = new MyClass();

// console.log(test.myPublicMethod());

// ====Поліморфізм====
// class Animal {
 
//   public say() {
//     console.log("Animal")
    
//   }
// }

// class Cat extends Animal {
//   public say() {
//     console.log("Cat")
//   }
// }

// class Dog extends Animal {
//   public say() {
//       console.log("Dog")
//   }
// }

// const cat = new Cat();
// const dog = new Dog();

// dog.say();

// cat.say();

// ===================

// interface Shape {
//   calculateArea(): number
// }

// class Rectangle implements Shape {
//   constructor(public width: number, public height: number) {
//     this.width = width;
//     this.height = height;
//   }
//   calculateArea(): number {
//     return this.width * this.height;
//   }
// }

// class Circle  implements Shape {
//   constructor(public radius: number) {
//     this.radius = radius;
//   }

//   calculateArea(): number {
//     return Math.PI * this.radius * this.radius;
//   }
// }


// class AreaCalculator {
//   public calculate(shape: Shape): number {
//     return shape.calculateArea();
//   }
// }

// const areaCalculator = new AreaCalculator();
// const rectangle=new Rectangle(10,10)
// const area=areaCalculator.calculate(rectangle)


// LSP (Liskov substitution principle)

// abstract class Vehicle {
//   abstract startEngine(): void;
//   abstract accelerate(): void;

// }

// class Car extends Vehicle {
//   startEngine(): void {
//     this.engageIgnition();
//     console.log("Car engine started")
//   }

//   accelerate(): void {
//     console.log("Car is accelerating")
//   }

//   private engageIgnition(): void {
//      console.log("Engaging car ignition");
//    }
// }

// class ElectricBus extends Vehicle {
//   startEngine(): void {
//     console.log("Electric bus engine started");
//   }

//   accelerate(): void {
//     this.increaseVoltage();
//     this.connectIndividualEngines();
//     console.log("Electric bus is accelerating");
    
//   }

//   private increaseVoltage() {
//     // Electric logic
//     console.log("Increasing electric bus voltage");
//   }

//   private connectIndividualEngines() {
//     // Connection logic
//     console.log("Connecting individual electric bus engines");

//   }
// }


// class Driver {
//   go(vehicle: Vehicle) {
//     vehicle.startEngine();
//     vehicle.accelerate();

//   }
// }

// let car = new Car();
// let bus = new ElectricBus();


// interface FoodProvider {
//   getFood(): void
// }

// class Feeder implements FoodProvider {
//   getFood(): void {
//     console.log("Feeding the animal");
//   }
// }

// class Animal {
//   private foodProvider: FoodProvider;
  
//   constructor(foodProvider: FoodProvider) {
//     this.foodProvider = foodProvider;
//   }
  
//   eat(): void {
//     this.foodProvider.getFood();

//   }

//  }
 

// Abstract classes

// abstract class Plane {
//   protected pilotInCabin = false;

//   public abstract startEngine(): boolean;

// }

// class Maize extends Plane {
//   public startEngine(): boolean {
//   //  запускаємо гвинти двигуна
//     return true;
//   }
// }


// class Boeing extends Plane {
//   public startEngine(): boolean {
//   //  розігріваємо гвинти двигуна
//     return true;
//   }
// }

// Інтерфейси в TypeScript

interface IPerson { 
  name: string;
  age: number;
  greet(phrase: string):void
}


let user: IPerson;

user = {
  name: 'Max',
  age: 30,
  greet(phrase: string) {
    console.log(phrase +' ' + this.name);
  }
}

interface IPilot { 
  flyMessage(): void;
}

class Pilot implements IPerson, IPilot { 
  constructor(public name: string, public age: number) {
    if (this.age < 28) { 
      throw new Error('Pilot must be at least 28 years old');
    }


  }
  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
  

  flyMessage(): void {
    console.log("I am flying");
  }

  setAutopilot(): void { 
    console.log("Aotopilot has been set")
  }

}

// const pilot = new Pilot("Antony", 32)

// pilot.greet("I am a capitan of the plane")
// pilot.flyMessage()
// pilot.setAutopilot()


abstract class Plane { 
  protected pilot: IPilot

  public setInPlane(pilot: IPilot): void {
    this.pilot = pilot;
  }

  public abstract startEngine(): boolean;
}

class Boeing extends Plane { 
  public startEngine(): boolean {
    if (!this.pilot) {
      throw new Error("Pilot is not set");
    }
    
    console.log("Starting engine...");
    this.pilot.flyMessage()
    return true;
  }
}

const boeing = new Boeing();
const pilot = new Pilot("Antony", 32)

boeing.setInPlane(pilot);

boeing.startEngine();
