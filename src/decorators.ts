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

function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function addProperty() {
  return function (constructor: Function) {
    console.log("Modify");
    constructor.prototype.modify = true;
  };
}

@Logger("LOGGING-CONTROLLER")
@addProperty()
class Controller {
  public id = 1;
  public modify?: boolean;
}

const controller = new Controller();

console.log("Modified classes", controller.modify);
