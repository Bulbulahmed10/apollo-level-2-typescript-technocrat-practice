{
  // constrains

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 4545,
    name: "Mr.x",
    email: "x@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    id: 546546,
    name: "Mr.y",
    email: "y@gmail.com",
    hasWatch: "Apple watch",
  });

  const student3 = addCourseToStudent({
    id: 4465464,
    name: "mr.Z",
    email: "z@gmail.com",
  });
}
