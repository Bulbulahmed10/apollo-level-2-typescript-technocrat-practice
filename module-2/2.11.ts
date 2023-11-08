{
  // utility types

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };
  // pick
  type NameAge = Pick<Person, "name" | "age">;

  // Omit
  type ContactInfo = Omit<Person, "name" | "age">;

  // required
  type PersonRequired = Required<Person>;

  // partial
  type PersonPartial = Partial<Person>;

  // readonly

  type PersonReadonly = Readonly<Person>;

  const person1: PersonReadonly = {
    name: "John",
    age: 54,
    contactNo: "546545456",
  };

  // Record

  //   type MyObj = {
  //     a: string,
  //     b: string
  //   }

  type MyObj = Record<string, string>;
  const EmptyObj: Record<string, unknown> = {};
  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "5",
  };
}
