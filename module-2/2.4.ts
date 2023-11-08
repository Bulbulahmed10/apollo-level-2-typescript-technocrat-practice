{
  // interface ----> generic

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  interface SamsungWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }

  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Bulbul",
    computer: {
      brand: "Asus",
      model: "X-443URE",
      releaseYear: 2023,
    },
    smartWatch: {
      brand: "Emilab",
      model: "KWT0",
      display: "OLED",
    },
  };
  const richDeveloper: Developer<SamsungWatch, YamahaBike> = {
    name: "Rich Dev",
    computer: {
      brand: "HP",
      model: "471DFD",
      releaseYear: 2023,
    },
    smartWatch: {
      brand: "Samsung",
      model: "DFJ7343",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "100cc",
    },
  };
}
