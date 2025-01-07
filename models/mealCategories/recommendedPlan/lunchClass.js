import Meal from "../../mealsModel";

export const LUNCH_OPTIONS = [
  new Meal(
    "1",
    "Turkey Avocado Club Sandwich",
    "https://media.istockphoto.com/id/1396261182/photo/fresh-and-healthy-avocado-turkey-sandwich-with-swiss-cheese.webp?a=1&b=1&s=612x612&w=0&k=20&c=ndpIiXF1rTWw4dgoUKZCSPgHCNbIy2-3Ow8G7CdiAdQ=",
    15, // Duration in minutes
    2, // Serves 2
    ["turkey", "avocado", "bacon", "lettuce", "tomato", "mayo", "bread"],
    ["100g", "1 avocado", "2 slices", "2 leaves", "2 slices", "1 tbsp", "2 slices"],
    ["knife", "toaster"],
    [
      "Toast the bread slices until golden brown.",
      "Spread mayonnaise evenly on each slice of bread.",
      "Layer turkey, avocado slices, bacon, lettuce, and tomato.",
      "Assemble the sandwich and serve immediately."
    ],
    false, // Not Pro-only
    "Lunch",
    "A hearty sandwich stacked with turkey slices, avocado, crispy bacon, lettuce, and tomato.",
    ["Quick", "Healthy", "Filling"]
  ),
  new Meal(
    "2",
    "Grilled Vegetable Panini",
    "https://media.istockphoto.com/id/1412389223/photo/grilled-sandwich-with-vegetables-and-mozzarella-on-wooden-board.webp?a=1&b=1&s=612x612&w=0&k=20&c=d7JOrHyyBKbeRGYYHbkA1BVhwiaPHbkpeLGMhf4Bszw=",
    20, // Duration in minutes
    2, // Serves 2
    ["zucchini", "bell peppers", "eggplant", "mozzarella", "panini bread"],
    ["1 cup", "1 cup", "1 cup", "100g", "2 slices"],
    ["panini press", "knife"],
    [
      "Preheat the panini press.",
      "Grill zucchini, bell peppers, and eggplant until tender.",
      "Assemble the panini with mozzarella and grilled vegetables.",
      "Press in the panini maker until golden and cheese is melted.",
      "Serve hot."
    ],
    false,
    "Lunch",
    "A warm panini filled with grilled zucchini, bell peppers, eggplant, and melted mozzarella cheese.",
    ["Vegetarian", "Grilled", "Italian"]
  ),
  new Meal(
    "3",
    "Shrimp Tacos",
    "https://media.istockphoto.com/id/1200136076/photo/shrimp-street-tacos.webp?a=1&b=1&s=612x612&w=0&k=20&c=PRcOz2N_Nog2Cd8rToGhEjMHKiOy_e8PUAX2fnGAIVA=",
    25, // Duration in minutes
    4, // Serves 4
    ["shrimp", "taco shells", "cabbage", "lime", "sour cream", "spices"],
    ["250g", "4 shells", "1 cup shredded", "1 lime", "2 tbsp", "To taste"],
    ["skillet", "knife"],
    [
      "Season the shrimp with your preferred spices.",
      "Sauté shrimp in a skillet until cooked through.",
      "Prepare a cabbage slaw by mixing shredded cabbage with lime juice.",
      "Assemble tacos by layering shrimp, slaw, and a dollop of lime crema.",
      "Serve and enjoy."
    ],
    false,
    "Lunch",
    "Soft tacos stuffed with spiced shrimp, shredded cabbage, and a zesty lime crema.",
    ["Seafood", "Quick", "Mexican-Inspired"]
  ),
  new Meal(
    "4",
    "Lentil Soup with Crusty Bread",
    "https://media.istockphoto.com/id/2175399273/photo/top-view-of-pumpkin-soup-with-bread-and-herbs.webp?a=1&b=1&s=612x612&w=0&k=20&c=EedxMxhWyzkqclS7CoiUBBA5atToLtcC0tlgv_hbnkE=",
    30, // Duration in minutes
    4, // Serves 4
    ["lentils", "carrots", "celery", "onions", "tomatoes", "bread"],
    ["1 cup", "2 diced", "2 stalks", "1 diced", "1 can", "4 slices"],
    ["pot", "knife"],
    [
      "Sauté diced onions, carrots, and celery in a pot until softened.",
      "Add lentils, canned tomatoes, and water. Bring to a boil.",
      "Reduce heat and simmer until lentils are tender, about 20 minutes.",
      "Season with salt and pepper to taste.",
      "Serve with crusty bread on the side."
    ],
    false,
    "Lunch",
    "A hearty lentil soup packed with vegetables and served with crusty bread on the side.",
    ["Hearty", "Warm", "Comfort Food"]
  ),
  new Meal(
    "5",
    "Mediterranean Quinoa Salad",
    "https://media.istockphoto.com/id/941131444/photo/healthy-vegan-quinoa-spinach-salad.webp?a=1&b=1&s=612x612&w=0&k=20&c=kEZ7MRVR-f4K8fF_Lij3k9Eg_MCZLgEvYb53E4eRRAk=",
    15, // Duration in minutes
    2, // Serves 2
    ["quinoa", "cherry tomatoes", "cucumbers", "olives", "feta", "olive oil", "lemon"],
    ["1 cup cooked", "1/2 cup halved", "1/2 cup diced", "1/4 cup", "50g", "2 tbsp", "1"],
    ["knife", "mixing bowl"],
    [
      "Cook quinoa according to package instructions and let cool.",
      "Combine quinoa with cherry tomatoes, diced cucumbers, olives, and feta cheese in a mixing bowl.",
      "Drizzle with olive oil and squeeze fresh lemon juice on top.",
      "Toss gently to combine and serve chilled or at room temperature."
    ],
    false,
    "Lunch",
    "A fresh salad made with quinoa, cherry tomatoes, cucumbers, olives, and feta cheese.",
    ["Healthy", "Fresh", "Light"]
  )
];
