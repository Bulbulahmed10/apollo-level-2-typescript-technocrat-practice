{
  // nullable types / unknown types
  const searchName = (value: string | null) => {
    if (value) {
      console.log("searching");
    } else {
      console.log("There is nothing to search");
    }
  };

  searchName(null);

  // unknown types
  const getSpeedInfMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else {
      console.log("wrong input");
    }
  };
  getSpeedInfMeterPerSecond(`1000 kmh^-1`);

  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError("muskil se error hogaya");
}
