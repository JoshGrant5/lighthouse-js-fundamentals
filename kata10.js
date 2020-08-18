// Determine which recipes match the ingredients that both bakeries have in stock ([ingredients in Bakery A], [ingredients in Bakery B], [recipe objects])
// Return name of correct recipe 
// There will only be a single correct answer with no special cases
const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let both = bakeryA.concat(bakeryB);
  let match = ''; // placeholder for recipe they can make

  for (let recipe of recipes) {
    // test conditions for having both required ingredients
    check1 = false;
    check2 = false;
    for (let items of both) {
      if (recipe["ingredients"][0] === items) {
        check1 = true;
      } else if (recipe["ingredients"][1] === items) {
        check2 = true;
      }
      if (check1 && check2) {
        match = recipe["name"];
        return match;
      }
    }
  }

};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));