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

class House {
  street: string;

  constructor(n: string) {
    this.street = n;
  }

  showAdress(this: House): void {
    console.log("Adress: " + this.street);
  }
}

const house = new House("Middle-earth");

house.showAdress();

const copyHouse = { showAdress: house.showAdress, street: "Mykola street" };

copyHouse.showAdress();
