import { faker } from "@faker-js/faker";
import { drinkCategories } from "../constants/constant.js";

export const admin = {
  login: "admin444@gmail.com",
  password: "111444",
};

export function addDrink(req, res) {
  if (admin.login === "admin444@gmail.com" && admin.password === "111444") {
    const drink = {
      id: faker.string.uuid(),
      ...req.body,
    };

    drinkCategories.unshift(drink);
    res.send({
      data: drink,
      message: `Succesfully created drink`,
      success: true,
    });
  } else {
    return;
  }
}

export function deleteDrink(req, res) {
  if (admin.login === "admin444@gmail.com" && admin.password === "111444") {
    const { drinkID } = req.params;

    const drinksIdx = drinkCategories.findIndex(
      (drink) => drink.id === drinkID
    );

    if (drinksIdx === -1)
      return res.status(404).send({
        data: null,
        message: `note found drink with id  ${drinkID}`,
        success: false,
      });

    const [deletedDrink] = drinkCategories.splice(drinksIdx, 1);
    res.send({ data: deletedDrink, message: null, success: true });
  } else {
    return;
  }
}

export function putDrink(req, res) {
  if (admin.login === "admin444@gmail.com" && admin.password === "111444") {
    const { drinkID } = req.params;

    const drinksIdx = drinkCategories.findIndex(
      (drink) => drink.id === drinkID
    );

    if (drinksIdx)
      return res.status(404).send({
        data: null,
        message: `note found drink with id  ${drinkID}`,
        success: false,
      });

    drinkCategories[drinksIdx] = { ...drinkCategories[drinksIdx], ...req.body };
    res.send({
      data: drinkCategories[drinksIdx],
      message: "Successfully updated drink",
      success: true,
    });
  } else {
    return;
  }
}



export function addCocktail(req, res) {
  if (admin.login === "admin444@gmail.com" && admin.password === "111444") {
    const cocktail = {
      id: faker.string.uuid(),
      ...req.body,
    };

    drinkCategories[0].drinks.unshift(cocktail); 
    res.send({
      data: cocktail,
      message: `Successfully created cocktail`,
      success: true,
    });
  } else {
    return;
  }
}

export function deleteCocktail(req, res) {
  if (admin.login === "admin444@gmail.com" && admin.password === "111444") {
    const { cocktailID } = req.params;

    const cocktailsIdx = drinkCategories[0].drinks.findIndex(
      (cocktail) => cocktail.id === cocktailID
    );

    if (cocktailsIdx === -1)
      return res.status(404).send({
        data: null,
        message: `Not found cocktail with id ${cocktailID}`,
        success: false,
      });

    const [deletedCocktail] = drinkCategories[0].drinks.splice(cocktailsIdx, 1);
    res.send({ data: deletedCocktail, message: null, success: true });
  } else {
    return;
  }
}

export function putCocktail(req, res) {
  if (admin.login === "admin444@gmail.com" && admin.password === "111444") {
    const { cocktailID } = req.params;

    const cocktailsIdx = drinkCategories[0].drinks.findIndex(
      (cocktail) => cocktail.id === cocktailID
    );

    if (cocktailsIdx === -1)
      return res.status(404).send({
        data: null,
        message: `Not found cocktail with id ${cocktailID}`,
        success: false,
      });

    drinkCategories[0].drinks[cocktailsIdx] = {
      ...drinkCategories[0].drinks[cocktailsIdx],
      ...req.body,
    };
    res.send({
      data: drinkCategories[0].drinks[cocktailsIdx],
      message: "Successfully updated cocktail",
      success: true,
    });
  } else {
    return;
  }
}
export function addEnergetic(req, res) {
  if (admin.login === "admin444@gmail.com" && admin.password === "111444") {
    const energetic = {
      id: faker.string.uuid(),
      ...req.body,
    };

    drinkCategories[1].drinks.unshift(energetic); 
    res.send({
      data: energetic,
      message: `Successfully created energetic drink`,
      success: true,
    });
  } else {
    return;
  }
}
export function deleteEnergetic(req, res) {
  if (admin.login === "admin444@gmail.com" && admin.password === "111444") {
    const { energeticID } = req.params;

    const energeticsIdx = drinkCategories[1].drinks.findIndex(
      (energetic) => energetic.id === energeticID
    );

    if (energeticsIdx === -1)
      return res.status(404).send({
        data: null,
        message: `Not found energetic drink with id ${energeticID}`,
        success: false,
      });

    const [deletedEnergetic] = drinkCategories[1].drinks.splice(energeticsIdx, 1);
    res.send({ data: deletedEnergetic, message: null, success: true });
  } else {
    return;
  }
}
export function putEnergetic(req, res) {
  if (admin.login === "admin444@gmail.com" && admin.password === "111444") {
    const { energeticID } = req.params;

    const energeticsIdx = drinkCategories[1].drinks.findIndex(
      (energetic) => energetic.id === energeticID
    );

    if (energeticsIdx === -1)
      return res.status(404).send({
        data: null,
        message: `Not found energetic drink with id ${energeticID}`,
        success: false,
      });

    drinkCategories[1].drinks[energeticsIdx] = {
      ...drinkCategories[1].drinks[energeticsIdx],
      ...req.body,
    };
    res.send({
      data: drinkCategories[1].drinks[energeticsIdx],
      message: "Successfully updated energetic drink",
      success: true,
    });
  } else {
    return;
  }
}
