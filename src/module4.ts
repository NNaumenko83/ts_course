// class A {
//   protected someProperty = "str";
// }

// class B extends A {
//   showPropery() {
//     console.log(this.showPropery);
//   }
// }

// const a = new A();
// const b = new B();

// b.showPropery();

// class House {
//   street: string;

//   constructor(n: string) {
//     this.street = n;
//   }

//   showAdress(this: House): void {
//     console.log("Adress: " + this.street);
//   }
// }

// const house = new House("Middle-earth");

// house.showAdress();

// const copyHouse = { showAdress: house.showAdress, street: "Mykola street" };

// copyHouse.showAdress();

// Модифікатори доступа

// class House {
//   private tetants: string[] = [];

//   constructor(protected street: string, public readonly type: string) {
//     this.street = street;
//   }

//   public showAdress(this: House, add: string) {
//     console.log("Adress " + this.street + add);
//   }

//   public addTenant(name: string) {
//     this.tetants.push(name);
//   }
//   public showTenants() {
//     console.log(this.tetants);
//   }

//   public showType() {
//     console.log(this.type);
//   }
// }

// const house = new House("Middle-earth", "wood");
// console.log("house:", house);

// house.showAdress("Hello");

// house.addTenant("Max");
// house.addTenant("Nikita");

// house.shoqTenants();

// house.showType();

// class StoneHouse extends House {
//   private chargeOfHouse: string;
//   constructor(street: string, general: string) {
//     super(street, "stone");

//     this.chargeOfHouse = general;
//   }

//   public showTenants() {
//     console.log("General:" + this.chargeOfHouse);
//     super.showTenants();
//   }

//   public showAdress(): void {
//     console.log("Adress " + this.street);
//   }
// }

// const stoneHouse = new StoneHouse("stone-word", "Max");

// stoneHouse.addTenant("Mykola");
// stoneHouse.addTenant("Varui");

// stoneHouse.showTenants();

// Статичні методи і властивості

// class UseStatic {
//   private static count = 0;

//   constructor() {
//     UseStatic.count += 1;
//   }

//   public static isStatic() {
//     console.log("Im static");
//   }

//   public showCount() {
//     console.log(UseStatic.count);
//   }
// }

// const obj1 = new UseStatic();
// const obj2 = new UseStatic();
// const obj3 = new UseStatic();

// obj1.showCount();
// obj2.showCount();
// obj3.showCount();

// UseStatic.isStatic();

// ===== Abstract clases =====

// abstract class Plane {
//   protected pilotInCabin = false;

//   public sitInPlane() {
//     this.pilotInCabin = true;
//   }

//   public abstract startEngine(): string;
// }

// class Meize extends Plane {
//   public startEngine(): string {
//     {
//       return "ta-ta-ta";
//     }
//   }
// }

// class Boeing extends Plane {
//   public startEngine(): string {
//     return "Buuuuuuu";
//   }
// }

// const maize = new Meize();
// const boeing = new Boeing();

// maize.sitInPlane();
// boeing.sitInPlane();

// console.log(maize.startEngine());
// console.log(boeing.startEngine());

// =====Інтерфейси обєктів======
// interface IPerson {
//   readonly name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// interface IPilot {
//   flyMesage(): void;
// }

// class Pilot implements IPerson, IPilot {
//   constructor(public readonly name: string, public age: number) {
//     this.checkAge();
//   }

//   private checkAge() {
//     if (this.age < 28) {
//       throw new Error("Pilot too young");
//     }
//   }

//   public greet(phrase: string): void {
//     console.log(phrase + " " + this.name);
//   }

//   public flyMesage(): void {
//     console.log("Літак набрав висоту приємного польоту");
//   }
// }

// abstract class Plane {
//   protected pilot?: IPilot;

//   public sitInPlane(pilot: IPilot) {
//     this.pilot = pilot;
//   }

//   public abstract startEngine(): boolean;
// }

// class Boeing extends Plane {
//   public startEngine(): boolean {
//     if (!this.pilot) {
//       throw new Error("No pilot in cabin");
//     }
//     console.log("Запуск турбін");
//     this.pilot.flyMesage();
//     return true;
//   }
// }

// const pilot = new Pilot("Max", 32);
// const boeing = new Boeing();

// pilot.greet("Вас вітає капітан корабля");
// boeing.sitInPlane(pilot);
// boeing.startEngine();

// ======== Інтерфейси як тип функції ========

// type AddFunc = (n1: number, n2: number) => number;

// interface AddFunc {
//   (n1: number, n2: number): number;
// }

// const foo: AddFunc = (n1: number, n2: number) => {
//   return n1 + n2;
// };

// ======ПРАКТИКА=======

// class Key {
//   private signature: number;

//   constructor() {
//     this.signature = Math.random();
//   }

//   public getSignature(): number {
//     return this.signature;
//   }
// }

// class Person {
//   constructor(private key: Key) {
//     this.key = key;
//   }

//   getKey(): Key {
//     return this.key;
//   }
// }

// abstract class House {
//   protected door = false;
//   private tenants: Person[] = [];

//   constructor(protected key: Key) {}

//   comeIn(person: Person): void {
//     if (!this.door) {
//       throw new Error("Door is close");
//     }
//     this.tenants.push(person);
//     console.log("Person inside");
//   }

//   abstract openDoor(key: Key): boolean;
// }

// class MyHouse extends House {
//   openDoor(key: Key) {
//     if (key.getSignature() !== this.key.getSignature()) {
//       throw new Error("Key to another door");
//     }

//     return (this.door = true);
//   }
// }

// const key = new Key();

// const house = new MyHouse(key);
// console.log("house:", house);

// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);

// Створюємо клас Key
// class Key {
//   private signature: number;

//   constructor() {
//     this.signature = Math.random();
//   }

//   // отримати підпис
//   getSignature(): number {
//     return this.signature;
//   }
// }

// class Person {
//   constructor(private key: Key) {
//     this.key = key;
//   }

//   getKey(): Key {
//     return this.key;
//   }
// }

// Створюємо абстрактний клас House
// abstract class House {
//   protected door = false;
//   protected tenants: Person[] = [];

//   constructor(protected key: Key) {}

//   comeIn(person: Person): void {
//     if (!this.door) {
//       throw new Error("The door is close");
//     }

//     this.tenants.push(person);
//     console.log("Person in house");
//   }

//   abstract openDoor(key: Key): void;
// }

// class MyHouse extends House {
//   openDoor(key: Key) {
//     console.log(key);
//     if (this.key.getSignature() !== key.getSignature()) {
//       throw new Error("THis door is closed");
//     }
//     this.door = true;
//   }
// }

// const key = new Key();
// const person = new Person(key);
// const house = new MyHouse(key);

// house.openDoor(person.getKey());
// house.comeIn(person);

// const userInput = null;

// const store = userInput ?? "DEFAULT";
// console.log("userInput:", !!userInput);

// console.log(store);

/*Write a function that takes an integer as input, and returns the number of bits that 
are equal to one in the binary representation of that number. 
You can guarantee that input is non-negative.
Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case */

// function countBits(n: number): number {
//   let bitsArray = [];
//   let tmp = n;

//   do {
//     tmp = Math.floor(n / 2);

//     bitsArray.unshift(n % 2);
//     n = tmp;
//   } while (tmp >= 1);

//   return bitsArray.filter((item) => item === 1).length;
// }

// console.log(countBits(1234));

// Vowel Count

/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/

// class Kata {
//   static vowels: string[] = ["a", "e", "i", "o", "u"];

//   static getCount(str: string): number {
//     const lettersArray: string[] = [...str];
//     let count = 0;

//     lettersArray.forEach((item: string) => {
//       if (this.vowels.includes(item)) {
//         count += 1;
//       }
//     });

//     return count;
//   }
// }

// const numbersVovels = Kata.getCount("abc");
// console.log("numbersVovels:", numbersVovels);

// Tribonacci Sequence
// function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
//   let array = [a, b, c];

//   if (n === 0) {
//     return [];
//   }
//   if (n <= 3) {
//     return array.splice(0, n);
//   }

//   do {
//     let tmp = 0;

//     for (let i = array.length - 1; i >= array.length - 3; i -= 1) {
//       tmp += array[i];
//     }

//     array.push(tmp);
//   } while (array.length < n);

//   return array;
// }

// console.log(tribonacci([3, 2, 1], 10));

// Beginner Series #3 Sum of Numbers
// function getSum(a: number, b: number): number {
//   if (a === b) {
//     return a;
//   }

//   if (a > b) {
//     [a, b] = [b, a];
//   }

//   let sum = 0;

//   for (let i = a; i <= b; i += 1) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(getSum(1, 2));

// Roman Numerals Decoder
// https://www.codewars.com/kata/51b6249c4612257ac0000005/train/typescript
// 'I'          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// function solution(roman: string): number {
//   interface RomanNumber {
//     [key: string]: number;
//   }

//   const romanObj: RomanNumber = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   const arr = [...roman];
//   console.log("arr:", arr);

//   let sum = 0;

//   for (let i = 0; i < arr.length; i += 1) {
//     if (romanObj[arr[i]] === 1 && i === arr.length - 1) {
//       sum += romanObj[arr[i]];
//       continue;
//     }

//     if (
//       romanObj[arr[i]] === 1 &&
//       i === arr.length - 2 &&
//       romanObj[arr[arr.length - 1]] !== 1
//     ) {
//       sum += romanObj[arr[i + 1]] - romanObj[arr[i]];
//       return sum;
//     }

//     sum += romanObj[arr[i]];
//   }
//   return sum;
// }

// console.log(solution("MMVIII"));

// Are they the "same"?
// function comp(a1: number[] | null, a2: number[] | null): boolean {
//   if (!a1 || !a2) {
//     return false;
//   }

//   const arr = a1.map((item) => Math.pow(item, 2));

//   for (const item of arr) {
//     if (
//       !a2.includes(item) ||
//       arr.filter((numb) => numb === item).length !==
//         a2.filter((numb) => numb === item).length
//     ) {
//       return false;
//     }
//   }

//   return true;
// }

// const a = [121, 144, 19, 161, 19, 144, 19, 11];

// const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
// console.log(comp(a, b));

// Bouncing Balls
//https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/typescript

// function bouncingBall(h: number, bounce: number, window: number): number {
//   if (bounce <= 0 || bounce >= 1 || window >= h) {
//     return -1;
//   }

//   let counter = 1;
//   let aftBounceHeigth = h * bounce;

//   do {
//     if (counter > 1) {
//       aftBounceHeigth = aftBounceHeigth * bounce;
//     }

//     if (aftBounceHeigth > window) {
//       counter += 2;
//     }
//   } while (aftBounceHeigth > window);

//   return counter;
// }

// console.log(bouncingBall(30, 0.75, 1.5));
