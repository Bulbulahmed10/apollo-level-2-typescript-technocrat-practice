{
  // ternary operator || optional chaining || nullish coalescing operator

  const age: number = 15;

  // if(age >= 18) {
  //     console.log("adult");
  // }else {
  //     console.log("not adult");
  // }

  const isAdult = age >= 18 ? "Adult" : "Not Adult";
  console.log({ isAdult });

  // nullish coalescing operator
  // null / undefined ---> decision making

  const isAuthenticated = "";
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 });
  console.log({ result2 });

  // optional chaining operator
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Bulbul Ahmed",
    address: {
      city: "Dhaka",
      road: "Awesome road",
      presentAddress: "Gopalganj",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No PermanentAddress";
  console.log({ permanentAddress });
}
