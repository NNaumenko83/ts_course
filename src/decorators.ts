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

interface IDecoration {
  parent: string;
  template: string;
}

function ControllerDecoration(config: IDecoration) {
  return function <T extends { new (...arg: any[]): { content: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      private element: HTMLElement;
      private parent: HTMLElement;
      constructor(...args: any[]) {
        super(...args);
        this.parent = document.getElementById(config.parent)!;
        this.element = document.createElement(config.template);

        this.element.innerHTML = this.content;
        this.parent.appendChild(this.element);
      }
    };
  };
}

@ControllerDecoration({ parent: "app", template: "H1" })
class Controller {
  public content = "My controller";
}

const controller = new Controller();
