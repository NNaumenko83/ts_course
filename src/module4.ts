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