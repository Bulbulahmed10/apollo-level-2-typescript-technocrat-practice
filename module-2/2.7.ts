{
  // constraint using keyof
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually
  type Owner2 = keyof Vehicle;

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Mr. Bulbul ahmed",
    age: 25,
    address: "Gopalganj",
  };
  const car = {
    model: "Toyota",
    year: 200,
  };

  const result1 = getPropertyValue(car, "model");
}
