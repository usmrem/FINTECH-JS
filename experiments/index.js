/* let fruits = ["apple", "Orange", "Banana"];

let addedMandarin = fruits.push("Mandarin");
console.log(fruits);
let RemoveFruits = fruits.splice(1);
console.log(fruits); */


/* let friends = [
  { name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16] },
  { name: "Dave", age: 5, luckyNumbers: [3, 9, 40] },
  { name: "Kate", age: 9, luckyNumbers: [1, 2, 3] }
];


for (let i = 0; i < friends.length; i++) {
  console.log(friends[i].name + " has " + friends[i].luckyNumbers.length + " lucky numbers");
}
*/

let movies = {
  "Finding Nemo": {
    releaseDate: 2003,
    duration: 100,
    actors:["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
    format: "DVD"
  },

  "Star Wars: Episode VI - Return of the Jedi": {
    releaseDate: 1983,
    duration: 134,
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    format: "DVD"
  },

  "Harry Potter and the Goblet of Fire": {
    releaseDate: 2005,
    duration: 157,
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    format: "Blu-ray"
  }
}

console.log(movies["Finding Nemo"].duration);
console.log(movies["Star Wars: Episode VI - Return of the Jedi"].actors[0]);
console.log(movies["Harry Potter and the Goblet of Fire"].format);
console.log(movies["Star Wars: Episode VI - Return of the Jedi"].releaseDate);

function printMovieInfo(title) {
  let movie = movies[title];

  if (movie === undefined) {
    console.log("Movie not found");
  } else {
    console.log(
      `${title} (${movie.releaseDate}) - ${movie.duration} min, ${movie.format}`
    );
  }
}

for (let key in movies) {
  let movie = movies[key];
  console.log(`${key} - ${movie.duration} min, ${movie.format}`);
}

let homeworkDone = true;

if (homeworkDone) {
  console.log("You get ice cream 🍦");
} else {
  console.log("No ice cream 😢");
}

for (let i = 0; i <= 5; i++) {
  console.log("Step " + i);
}
 let age = 10;

 if (age > 18) {
  console.log("adult");
 } else if (age === 18) {
  console.log("Just turned adult")
 } else {
  console.log("Not adult");
 }

 let score = 90;

 if (score >= 90) {
  console.log("Excellent");
 } else if (score >= 70) {
  console.log("Good")
 } else {
  console.log("Try again");
 }


 let lemonChicken = false;
 let beefWithBlackBean = true;
 let sweetAndSourPork = true;

 if (lemonChicken) {
  console.log("Great! I'm having lemon chicken!");
 } else if (beefWithBlackBean) {
  console.log("I'm having the beef.")
 } else if (sweetAndSourPork) {
  console.log("OK, I'll have the pork.")
 } else {
  console.log("Well, I guess I'll have rice then.")
 }

 let password = "1234567890";

 if (password.length < 6) {
  console.log("Too short");
 } else if (password.length <= 10) {
  console.log("Normal");
 } else {
  console.log("Strong");
 }


let alphabet = "abcdefghijklmnopqrstuvwxyz";
let randomString = "";

while (randomString.length < 6) {
  let randomIndex = Math.floor(Math.random() * alphabet.length);
  randomString += alphabet[randomIndex];
}

console.log(randomString);


let word = "Hello";
let result = "";

for (let i = word.length - 1; i >= 0; i--) {
  result += word[i];
}

console.log(result);


const name = prompt("What's your name ?");
console.log("Hello" + name);