// src/index.ts
import express from "express";
import { Energetics, drinkCategories } from "./constants/constant.js";
import { addCocktail, addDrink, addEnergetic, deleteCocktail, deleteDrink, deleteEnergetic, putCocktail, putDrink, putEnergetic } from "./users/admin.js";

const app = express();
const port = 4000;

//cocktails
app.get("/api/drinks/cocktails", (req, res) => {
  const cocktails = drinkCategories.find(category => category.name === 'Cocktails');
  res.send(cocktails.drinks);
});
app.post("/api/cocktails/", addCocktail);
app.post("api/coctails/:coctailID", deleteCocktail);
app.post("api/cocktails/:coctailID", putCocktail);
//energetics
app.get("/api/drinks/energetics", (req, res) => {
  const energetics = drinkCategories.find(category => category.name === 'Energetics');
  res.send(energetics.drinks);
});
app.post("/api/energetics/", addEnergetic);
app.post("api/energeticks/:energeticsID", deleteEnergetic);
app.post("api/energeticks/:energeticsID", putEnergetic);
//drinks
app.get("/api/drinks", (req, res) => {
  res.send(drinkCategories);
});
app.post("/api/drinks",addDrink);
app.delete("api/drinks/:drinkID",deleteDrink);
app.put("api/drinks/:drinkID",putDrink);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
