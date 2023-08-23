export function toRomanLazy(num) {
  let output = "";

  const romanNumeralToArabic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const romanNumeralPriorityOrder = ["M", "D", "C", "L", "X", "V", "I"];

  for (let romanNumeral of romanNumeralPriorityOrder) {
    const arabicNum = romanNumeralToArabic[romanNumeral];
    const numRoman = Math.floor(num / arabicNum);

    for (let i = 0; i < numRoman; i++) {
      output += romanNumeral;
      num -= arabicNum;
    }
  }

  return output;
}

export function toRoman(num) {
  let output = "";

  const romanNumeralToArabic = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  const romanNumeralPriorityOrder = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  for (let romanNumeral of romanNumeralPriorityOrder) {
    const arabicNum = romanNumeralToArabic[romanNumeral];
    const numRoman = Math.floor(num / arabicNum);

    for (let i = 0; i < numRoman; i++) {
      output += romanNumeral;
      num -= arabicNum;
    }
  }

  return output;
}
