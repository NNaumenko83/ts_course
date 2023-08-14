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

const towerBuilder = (nFloors: number): string[] => {
  const arr = Array.from({ length: nFloors }, (_, index) =>
    Array.from({ length: 3 }, (_, ind) => {
      if (ind === 0 || ind === 2) {
        console.log(nFloors - 1 - index);

        return Array(nFloors - 1 - index)
          .fill(" ")
          .join("");
      }
      return Array.from({ length: 2 * index + 1 }, () => "*").join("");
    }).join("")
  );

  console.log(arr);
  return arr;
};

towerBuilder(4);
