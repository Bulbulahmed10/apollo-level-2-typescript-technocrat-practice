{
  // type alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  type UserName = string;
  type IsAdmin = boolean;
  type Add = (num1: number, num2: number) => number
  const student1: Student = {
    name: "Bulbul ahmed",
    age: 43,
    gender: "male",
    contactNo: "454564",
    address: "Dhaka",
  };

  const userName: UserName = "Bulbul Ahmed";
  const isAdmin: IsAdmin = true;

  const add: Add = (num1, num2) => num1 + num2
}
