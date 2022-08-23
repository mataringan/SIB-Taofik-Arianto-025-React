// Object
// Object dengan function Expression
// Destructuring Object
const user = {};
user.name = "Taofik Arianto";
user.email = "taofikarianto@gmail.com";
user.location = "Ciamis, Jawa Barat";

// extraction
const name = user.name;
const email = user.email;
const location = user.location;
console.log(name, email, location);

// Object Literals
const mhs = {
  mhsName: "Mataringan",
  mhsEmail: "mataringan@gmail.com",
  mhsLocation: "Lakbok, Jawa Barat",
};

// const mhsName = mhs.name;
// const mhsEmail = mhs.email;
// const mhsLocation = mhs.location;
// console.log(mhsName, mhsEmail, mhsLocation);

// Extraction - Destructuring
const { mhsName, mhsEmail, mhsLocation } = mhs;
console.log(mhsName, mhsEmail, mhsLocation);

// Destructuring Function Result
const getUser = () => {
  return {
    namaUser: "Fikar",
    emailUser: "fikar@gmail.com",
    alamatUser: "Jawa Barat, Indonesia",
  };
};

// Extraction
const { namaUser, emailUser, alamatUser } = getUser();
console.log(namaUser, emailUser, alamatUser);
