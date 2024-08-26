const RomanNumeralDecoder = (number) => {
  const romanValues = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let romanNumber = "";

  for (let key in romanValues) {
    while (number >= romanValues[key]) {
      romanNumber += key;
      number -= romanValues[key];
    }
  }
  return romanNumber;
};

console.log(RomanNumeralDecoder(1666));
