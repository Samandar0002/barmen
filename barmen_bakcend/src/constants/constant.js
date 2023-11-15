import { faker } from "@faker-js/faker";

// Small: 0.25; Medium: 0.5; Large: 0.75

function getRandomNumber(min = 2, max = 10) {
  if (min < 0 || max < 0 || min > max) {
    throw new Error(
      "Invalid input: min and max must be non-negative, and min must be less than or equal to max."
    );
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const Energetics = [
  {
    id: 1,
    size: "Small",
    image: "./assets/monster.jpg",
    name: "Monster | Energy",
    type: "Energetics",
    brand: "Monster",
    color: ["#d3f355ff", "#2AE8FD", "#c41727ff"],
    price: faker.commerce.price({ min: 2, max: 9, dec: 1, symbol: "$" }),
    stock: getRandomNumber(),
  },
  {
    id: 2,
    size: "Medium",
    image: "./assets/monster_blue.jpg",
    name: "Monster Blue | Energy | Zero Sugar",
    type: "Energetics",
    brand: "Monster",
    color: ["#d3f355ff", "#2AE8FD", "#c41727ff"],
    price: faker.commerce.price({ min: 2, max: 10, dec: 1, symbol: "$" }),
    stock: getRandomNumber(),
  },
  {
    id: 3,
    size: "Large",
    image: "./assets/monster_red.jpg",
    name: "Monster Red | Energy | Ultra Red",
    type: "Energetics",
    brand: "Monster",
    color: ["#d3f355ff", "#2AE8FD", "#c41727ff"],
    price: faker.commerce.price({ min: 2, max: 10, dec: 1, symbol: "$" }),
    stock: getRandomNumber(),
  },
  {
    id: 4,
    size: "Medium",
    image: "./assets/fuel_blue.jpg",
    name: "Black Rock | Fuel | Blue",
    type: "Energetics",
    brand: "FUEL",
    color: ["#489ea7ff", "#121212ff", "#d1d1d1ff"],
    price: faker.commerce.price({ min: 2, max: 5, dec: 1, symbol: "$" }),
    stock: getRandomNumber(),
  },
  {
    id: 5,
    size: "Medium",
    image: "./assets/fuel_white.jpg",
    name: "Red Rock | Fuel | White",
    type: "Energetics",
    brand: "FUEL",
    color: ["#489ea7ff", "#121212ff", "#d1d1d1ff"],
    price: faker.commerce.price({ min: 2, max: 5, dec: 1, symbol: "$" }),
    stock: getRandomNumber(),
  },
  {
    id: 6,
    size: "Large",
    image: "./assets/fuel.jpg",
    name: "Black Rock | Fuel | Black",
    type: "Energetics",
    brand: "FUEL",
    color: ["#489ea7ff", "#121212ff", "#d1d1d1ff"],
    price: faker.commerce.price({ min: 2, max: 5, dec: 1, symbol: "$" }),
    stock: getRandomNumber(),
  },
];

export const Cocktails = [
  {
    id: 1,
    name: "Purple Rain",
    image: "./assets/purple_cocktail.jpg",
    ingredients: ["Gin ", "Blue Curaçao", "Lime juice", "Salt"],
    glassType: "Margarita glass",
    garnish: "Rosemary",
  },
  {
    id: 2,
    name: "Magic Galaxy",
    image: "./assets/magic_galaxy.jpg",
    ingredients: ["Butterfly Pea", "Flower Tea", "Rosella Tea", "Lemon Soda"],
    glassType: "Martini glass",
    garnish: "Lemon twist",
  },
  {
    id: 3,
    name: "Cantarito Tequila",
    image: "./assets/cantarito_tequila.jpg",
    ingredients: ["Coarse Salt", "Ounces Tequila", "Lime Juice", "Lemon Soda"],
    glassType: "Martini glass",
    garnish: "Lemon twist",
  },
];

export const drinkCategories = [
  {
    id: 1,
    name: "Cocktails",
    drinks: [],
  },
  {
    id: 2,
    name: "Energetics",
    drinks: Energetics,
  },
  {
    id: 3,
    name: "Soft drinks",
    drinks: [],
  },
  {
    id: 4,
    name: "Healthy drinks",
    drinks: [],
  },
  {
    id: 5,
    name: "Water",
    drinks: [],
  },
  {
    id: 6,
    name: "Fuzzy drinks",
    drinks: [],
  },
  {
    id: 7,
    name: "Coffee",
    drinks: [],
  },
  {
    id: 8,
    name: "Cold drinks",
    drinks: [],
  },
  {
    id: 9,
    name: "Tea",
    drinks: [],
  },
  {
    id: 10,
    name: "Juice",
    drinks: [],
  },
];
