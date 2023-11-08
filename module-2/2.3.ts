{
  // generics
  type GenericArray<T> = Array<T>;

  // const rollNumbers: number[] = [1, 2, 3, 4, 5, 6, 7]
  const rollNumbers: GenericArray<number> = [1, 2, 3, 4, 5, 6, 7];

  // const mentors: string[] = ["mr.X", "mr.Y", "mr.Z"]
  const mentors: GenericArray<string> = ["mr.X", "mr.Y", "mr.Z"];

  // const boolArray: boolean[] = [true, false, true]
  const boolArray: GenericArray<boolean> = [true, false, true];

  interface UserType {
    name: string;
    age: number;
  }

  const user: GenericArray<UserType> = [
    {
      name: "Bulbul ahmed",
      age: 100,
    },
    {
      name: "Jhankar Mahbub",
      age: 200,
    },
  ];

  // generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Mr.X", "Mr.Y"];

  const userWithID: GenericTuple<number, { name: string; email: string }> = 
  [
    12345,
    { name: "John", email: "example@gmail.com" },
  ];
}
