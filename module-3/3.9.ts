{
  //!!! abstraction in OOP

  // abstraction : 1. interface 2. abstract

  //! interface
  // idea
  interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // real implementation
  class Car implements Vehicle {
    startEngine(): void {
      console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`I am stopping the car engine`);
    }
    move(): void {
      console.log(`I am moving the car`);
    }
    test() {
      console.log(`I am just testing the car`);
    }
  }

  const toyotaCar = new Car();
  toyotaCar.startEngine();

  //! abstract class

  // idea
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log(`I am just testing the car`);
    }
  }

  class RollRoyceCar extends Car2 {
    startEngine(): void {
      console.log("I am starting the car engine...");
    }
    stopEngine(): void {
      console.log("I am stopping the car engine...");
    }
    move(): void {
      console.log(`I am moving the car`);
    }
  }
}
