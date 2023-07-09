// function Logger(constructor: Function) {
//   console.log("Logging...");
//   console.log(constructor);
// }

// @Logger
// class Controller {
//   public id = 1;
// }

// function Logger(logString: string) {
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// @Logger("LOGGING-CONTROLLER")
// class Controller {
//   public id = 1;
// }

// function Logger(logString: string) {
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function addProperty() {
//   return function (constructor: Function) {
//     console.log("Modify");
//     constructor.prototype.modify = true;
//   };
// }

// @Logger("LOGGING-CONTROLLER")
// @addProperty()
// class Controller {
//   public id = 1;
//   public modify?: boolean;
// }

// const controller = new Controller();

// console.log("Modified classes", controller.modify);

// function Logger(logString: string) {
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }
// function AddProperty() {
//   return function (constructor: Function) {
//     console.log("Add property");
//     constructor.prototype.modify = true;
//   };
// }

// @Logger("LOGGING CONTROLLER")
// @AddProperty()
// class Controller {
//   public ID = 1;
//   public modify?: boolean;
// }

// const controller = new Controller();

// console.log("Is modify?", controller.modify);

// interface IDecoration {
//   parent: string;
//   template: string;
// }

// function ControllerDecoration(config: IDecoration) {
//   return function <T extends { new (...arg: any[]): { content: string } }>(
//     originalConstructor: T
//   ) {
//     return class extends originalConstructor {
//       private element: HTMLElement;
//       private parent: HTMLElement;
//       constructor(...args: any[]) {
//         super(...args);
//         this.parent = document.getElementById(config.parent)!;
//         this.element = document.createElement(config.template);

//         this.element.innerHTML = this.content;
//         this.parent.appendChild(this.element);
//       }
//     };
//   };
// }

// @ControllerDecoration({ parent: "app", template: "H1" })
// class Controller {
//   public content = "My controller";
// }

// const controller = new Controller();

// interface IDecoration {
//   parent: string;
//   template: string;
// }

// function ControllerDecoration(config: IDecoration) {
//   return function <T extends { new (...args: any[]): { content: string } }>(
//     originalConstructor: T
//   ) {
//     return class extends originalConstructor {
//       private element: HTMLElement;
//       private parent: HTMLElement;

//       constructor(...args: any[]) {
//         super(...args);
//         this.parent = document.getElementById(config.parent)!;
//         this.element = document.createElement(config.template);

//         this.element.innerHTML = this.content;
//         this.parent.appendChild(this.element);
//       }
//     };
//   };
// }

// @ControllerDecoration({ parent: "app", template: "h1" })
// class Controller {
//   public content = "This is my custom text";
// }

// const controller = new Controller();
// const controller1 = new Controller();
// const controller2 = new Controller();
// const controller3 = new Controller();

// Декоратори методів
// function ShowParams(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log("target:", target);
//   console.log("name:", name);
//   console.log("descriptor:", descriptor);
// }

// function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
//   const method = descriptor.value as Function;
//   return {
//     configurable: true,
//     enumerable: false,
//     get() {
//       return method.bind(this);
//     },
//   };
// }

// class Notifier {
//   public content = "Message in class";
//   @ShowParams
//   @AutoBind
//   showMessage() {
//     console.log(this.content);
//   }
// }

// const notifier = new Notifier();

// const showMessage = notifier.showMessage;

// notifier.showMessage();
// showMessage();

// function AddTax(taxPersent: number) {
//   return function (_: any, _2: string, descriptor: PropertyDescriptor) {
//     const method = descriptor.value as Function;
//     return {
//       configurable: true,
//       enumerable: false,
//       get() {
//         return (...args: any) => {
//           const result = method.apply(this, args);

//           return result + (result / 100) * taxPersent;
//         };
//       },
//     };
//   };
// }

// class Payment {
//   @AddTax(20)
//   pay(money: number) {
//     return money;
//   }
// }

// const payment = new Payment();

// console.log(payment.pay(100));

// // Декоратори параметрів

// function CheckEmail(target: any, nameMethod: string, position: number) {
//   if (!target[nameMethod].validation) {
//     target[nameMethod].validation = {};
//   }

//   Object.assign(target[nameMethod].validation, {
//     [position]: (value: string) => {
//       if (value.includes("@")) {
//         return value;
//       }

//       throw new Error("Not valid email");
//     },
//   });
// }

// function Validation(_: any, _2: string, descriptor: PropertyDescriptor) {
//   const method = descriptor.value;

//   return {
//     configurable: true,
//     enumerable: false,
//     get() {
//       return (...args: any[]) => {
//         if (method.validation) {
//           args.forEach((item, index) => {
//             if (method.validation[index]) {
//               args[index] = method.validation[index](item);
//             }
//           });
//         }
//         return method.apply(this, args);
//       };
//     },
//   };
// }

// class Person {
//   @Validation
//   setEmail(
//     @CheckEmail
//     email: string
//   ) {
//     console.log(email);
//   }
// }

// const person = new Person();

// person.setEmail("testtest.com");

// ====Декоратори властичвостей =====

interface ValidationConfig {
  [prop: string]: {
    [validationProp: string]: string[];
  };
}

const registeredValidation: ValidationConfig = {};

function Required(target: any, propName: string) {
  registeredValidation[target.constructor.name] = {
    ...registeredValidation[target.constructor.name],
    [propName]: ["required"],
  };
}
function PositiveNumber(target: any, propName: string) {
  registeredValidation[target.constructor.name] = {
    ...registeredValidation[target.constructor.name],
    [propName]: ["positive"],
  };
}

function validation(obj: any) {
  const objectValidation = registeredValidation[obj.constructor.name];

  if (!objectValidation) {
    return true;
  }

  let isValid = true;

  for (const prop in objectValidation) {
    for (const validProp of objectValidation[prop]) {
      switch (validProp) {
        case "required":
          isValid = isValid && !!obj[prop];

          break;

        case "positive":
          isValid = isValid && obj[prop] > 0;

          break;

        default:
          break;
      }
    }
  }

  return isValid;
}

class Person {
  @Required
  public name: string;
  @PositiveNumber
  public age: number;
  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}

const person = new Person("Max", 21);

if (!validation(person)) {
  console.log("Not Valid");
} else console.log("valid");
