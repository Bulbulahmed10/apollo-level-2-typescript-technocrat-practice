{
  // function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const res2 = createArrayWithGeneric<string>("Bangladesh");

  type User = { id: number; name: string };

  const resGenericObj = createArrayWithGeneric<User>({
    id: 56565,
    name: "Mr. Pashan",
  });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res3 = createArrayWithTuple("Bangladesh", 420);
  const res4 = createArrayWithTuple<string, object>("Bangladesh", {
    capital: "Dhaka",
  });

  type User3 = { id: number; name: string };

  const resGenericObj2 = createArrayWithTuple<User, string>(
    {
      id: 56565,
      name: "Mr. Pashan",
    },
    "Gopalaganj"
  );

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Mr.x",
    email: "x@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    name: "Mr.y",
    email: "y@gmail.com",
    hasWatch: "Apple watch",
  });
}
