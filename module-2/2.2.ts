{
  // interface
  interface User2 {
    name: string;
    age: number;
  }
  // type
  type User1 = {
    name: string;
    age: number;
  };
  type UserWithRole1 = User1 & { role: string };
  interface UserWithRole2 extends User1 {
    role: string
  }


  const user1: UserWithRole2 = {
    name: "Bulbul",
    age: 20,
    role: "admin",
  };


  type Roll = number []
  interface Roll2 {
    [index: number]: number
  }
  const classOne: Roll2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



  type Add = (num1: number, num2: number) => number
  interface Add1 {
    (num1: number, num2: number): number
  }
  const add: Add1 = (num1, num2) => num1 + num2;


}
