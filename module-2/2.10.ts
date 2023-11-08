{
  // mapped types
  const arrOfNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  //   const arrOfStrings: string[] = ["a1", "a2", "a3", "a4"];

  const arrOfStrings: string[] = arrOfNumbers.map((num) => num.toString());

  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; // lookup type

  //   type AreaString = {
  //     height: string;
  //     width: string
  //   }

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };
}
