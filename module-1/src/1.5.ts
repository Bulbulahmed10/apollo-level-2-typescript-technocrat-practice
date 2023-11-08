// reference type ---> object

const user: {
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
  readonly company: string; // type --> literal types
} = {
  firstName: "Bulbul",
  lastName: "Ahmed",
  isMarried: false,
  company: "Risosi",
};


