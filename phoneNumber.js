const phoneNumberGen = (Ary) => {
  let sectionOne = "" + Ary[0] + Ary[1] + Ary[2];
  let sectionTwo = "" + Ary[3] + Ary[4] + Ary[5];
  let sectionThree = "" + Ary[6] + Ary[7] + Ary[8] + Ary[9];
  let completeNumber = `(${sectionOne}) ${sectionTwo}-${sectionThree}`;
  return completeNumber;
};

console.log(phoneNumberGen([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
