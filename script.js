const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// Get an array of all names ------------
const names = characters.map(({ name }) => name);

// Get an array of all heights -------------
const heights = characters.map(({ height }) => height);

// Get an array of objects with just name and height properties--------
const nameAndHeight = characters.map(({ name, height }) => ({ name, height }));

// Get an array of all first names -------------
const firstName = characters.map(({ name }) => {
  const splitted = name.split(" ");
  return splitted[0];
});

// Get the total mass of all characters --------------
const totalMass = characters.reduce((total, value) => {
  return total + parseInt(value.mass);
}, 0);

// Get the total height of all characters ----------------
const totalHeight = characters.reduce((total, value) => {
  return total + parseInt(value.height);
}, 0);

// Get the total number of characters in all the character names ----------
const totalNameCharacters = characters.reduce((total, currentValue) => {
  return total + currentValue.name.length;
}, 0);

// Get the total number of characters by eye color (hint. a map of eye color to count)----
const eyeColorCount = characters.reduce(
  (total, { eye_color }) => {
    if (eye_color === "blue") {
      total.blue++;
    } else if (eye_color === "yellow") {
      total.yellow++;
    } else if (eye_color === "brown") {
      total.brown++;
    }
    return total;
  },
  { blue: 0, brown: 0, yellow: 0 }
);

// Get characters with mass greater than 100 -------
const filterByMass = characters.filter(({ mass }) => {
  return mass > 100;
});

// Get characters with height less than 200 -------
const filterByHeight = characters.filter(({ height }) => {
  return height < 200;
});

// Get all male characters ----
const getMaleCharacters = characters.filter((el) => {
  if (el.gender === "male") return el;
});

// Get all female characters ----------
const getFemaleCharacters = characters.filter((el) => {
  if (el.gender === "female") return el;
});

// Sort by name ----------------
const sortByName = characters.sort((a, b) => a.name.localeCompare(b.name));

// Sort by mass -------------
const sortByMass = characters.sort((a, b) => b.mass - a.mass);

// Sort by height ------------
const sortByHeight = characters.sort((a, b) => b.height - a.height);

// Sort by gender ---------------
const sortByGender = characters.sort((a, b) =>
  a.gender.localeCompare(b.gender)
);

// Does every character have blue eyes? -------------
const isEveryBlue = characters.every(({ eye_color }) => eye_color === "blue");

// Does every character have mass more than 40? ----------------
const isEveryMass = characters.every(({ mass }) => mass > 40);

// Is every character shorter than 200? ------------
const isEveryHeight = characters.every(({ height }) => height < 200);

// Is every character male? -------------------
const isEveryMale = characters.every(({ gender }) => gender === "male");

// Is there at least one male character? -----------------
const isSomeMale = characters.some(({ gender }) => gender === "male");

// Is there at least one character with blue eyes? ---------------
const isSomeEyeColor = characters.some(({ eye_color }) => eye_color === "blue");

// Is there at least one character taller than 200? -----------------
const isSomeHeight = characters.some(({ height }) => height > 200);

// Is there at least one character that has mass less than 50? -----------
const isSomeMass = characters.some(({ mass }) => mass < 50);

//--------------------------------- ARRAY LAST METHOD ---------------------

Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  } else {
    return this[this.length - 1];
  }
};

const test = characters.last();

// ----------------------PROMISE + FETCH------------------

//1. შევქმნათ ფრომისი. იმის შანსი რომ ფრომისი ან დარეზოლვდება ან დარეჯექთდება უნდა იყოს 50/50.
//ანუ ზოგიერთ გამოძახებაზე უნდა დარეჯექთდეს.

// could not understand the question

//2. დავწეროთ ფუნქცია რომელიც წამოიღებს მონაცემებს https://jsonplaceholder.typicode.com/users დან
//და დაბრუნებს ამ მონაცემებს

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) => console.log(users))
  .catch((err) => console.log(err));

//3. დავწეროთ ფუნქცია რომელიც ეცდება წამოიღოს მონაცემები
//https://jsonplaceholde.typicode.com (ლინკი სპეციალურად რასწორია) დან.
//წარუმატებელი რექუესთის შემთხვევაში ხელახლა ცადოს წამოღება 5_ჯერ

function tryAgain(count) {
  const fetchUsers = fetch("https://jsonplaceholde.typicode.com")
    .then((res) => res.json())
    .then((users) => console.log(users))
    .catch((err) => {
      if (count === 0) {
        return err;
      }
      return tryAgain(count - 1);
    });
}

tryAgain(5);

//4. დავწეროთ ფუნქცია რომელიც ეცდება წმოიღოს მონაცემები https://dummyjson.com/users დან და https://jsonplaceholder.typicode.com/users დან.
// ფუნქციამ უნდა დაგვიბრუნოს ის ლისთი რომელის ცატვირთვაც უფრო მალე მოხდება.

function fetchFastest() {
  const fakeAPI1 = fetch("https://dummyjson.com/users");
  const fakeAPI2 = fetch("https://jsonplaceholder.typicode.com/users");

  Promise.race([fakeAPI1, fakeAPI2])
    .then((res) => res.json())
    .then((data) => console.log(data));
}

fetchFastest();
