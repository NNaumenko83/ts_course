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

abstract class Plane {
  protected pilotInCabin = false;

  public sitInPlane() {
    this.pilotInCabin = true;
  }

  public abstract startEngine(): string;
}

class Meize extends Plane {
  public startEngine(): string {
    {
      return "ta-ta-ta";
    }
  }
}

class Boeing extends Plane {
  public startEngine(): string {
    return "Buuuuuuu";
  }
}

const maize = new Meize();
const boeing = new Boeing();

maize.sitInPlane();
boeing.sitInPlane();

console.log(maize.startEngine());
console.log(boeing.startEngine());
