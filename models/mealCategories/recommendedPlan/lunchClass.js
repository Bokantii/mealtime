import Meal from "../../mealsModel";

export const LUNCH_OPTIONS = [
  new Meal(
    "1",
    "Turkey Avocado Club Sandwich",
    "https://media.istockphoto.com/id/1396261182/photo/fresh-and-healthy-avocado-turkey-sandwich-with-swiss-cheese.webp?a=1&b=1&s=612x612&w=0&k=20&c=ndpIiXF1rTWw4dgoUKZCSPgHCNbIy2-3Ow8G7CdiAdQ=",
    15,
    2,
    ["turkey", "avocado", "bacon", "lettuce", "tomato", "mayo", "bread"],
    ["100g", "1 avocado", "2 slices", "2 leaves", "2 slices", "1 tbsp", "2 slices"],
    6, // Updated number of instructions
    ["knife", "toaster"],
    [
      "Toast the bread slices in a toaster or on a pan until golden brown and crisp.",
      "While the bread toasts, cook the bacon in a pan over medium heat until crispy. Drain excess grease on a paper towel.",
      "Spread mayonnaise evenly on one side of each bread slice.",
      "Slice the avocado in half, remove the pit, and cut into thin slices.",
      "Layer turkey, avocado slices, crispy bacon, lettuce, and tomato between the toasted bread slices.",
      "Press gently, slice diagonally, and serve immediately."
    ],
    false,
    "Lunch",
    "A hearty sandwich stacked with turkey slices, avocado, crispy bacon, lettuce, and tomato.",
    ["Quick", "Healthy", "Filling"]
  ),
  new Meal(
    "2",
    "Grilled Vegetable Panini",
    "https://media.istockphoto.com/id/1412389223/photo/grilled-sandwich-with-vegetables-and-mozzarella-on-wooden-board.webp?a=1&b=1&s=612x612&w=0&k=20&c=d7JOrHyyBKbeRGYYHbkA1BVhwiaPHbkpeLGMhf4Bszw=",
    20,
    2,
    ["zucchini", "bell peppers", "eggplant", "mozzarella", "panini bread"],
    ["1 cup", "1 cup", "1 cup", "100g", "2 slices"],
    6, // Updated number of instructions
    ["panini press", "knife"],
    [
      "Preheat the panini press to medium-high heat.",
      "Slice zucchini, bell peppers, and eggplant into thin strips.",
      "Grill the vegetables in the panini press or a grill pan until tender and slightly charred.",
      "Assemble the panini by layering mozzarella and grilled vegetables between the bread slices.",
      "Place the sandwich in the panini press and grill until the bread is crispy and the cheese is melted.",
      "Slice and serve hot."
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
    25,
    4,
    ["shrimp", "taco shells", "cabbage", "lime", "sour cream", "spices"],
    ["250g", "4 shells", "1 cup shredded", "1 lime", "2 tbsp", "To taste"],
    6, // Updated number of instructions
    ["skillet", "knife"],
    [
      "Pat the shrimp dry and season with salt, pepper, and your preferred spices.",
      "Heat a skillet over medium heat and sauté shrimp for 3-4 minutes until pink and fully cooked.",
      "In a bowl, mix shredded cabbage with fresh lime juice for a zesty slaw.",
      "Warm the taco shells in a dry pan or oven until soft.",
      "Assemble each taco by adding shrimp, cabbage slaw, and a drizzle of sour cream.",
      "Serve immediately with extra lime wedges."
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
    30,
    4,
    ["lentils", "carrots", "celery", "onions", "tomatoes", "bread"],
    ["1 cup", "2 diced", "2 stalks", "1 diced", "1 can", "4 slices"],
    7, // Updated number of instructions
    ["pot", "knife"],
    [
      "Rinse the lentils under cold water and drain.",
      "In a large pot, heat oil over medium heat and sauté diced onions, carrots, and celery until softened.",
      "Add minced garlic and cook for another minute until fragrant.",
      "Pour in canned tomatoes, lentils, and enough water to cover everything. Bring to a boil.",
      "Reduce heat to low, cover, and simmer for 20 minutes or until the lentils are tender.",
      "Season with salt and pepper to taste, and stir well.",
      "Serve hot with crusty bread on the side."
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
    15,
    2,
    ["quinoa", "cherry tomatoes", "cucumbers", "olives", "feta", "olive oil", "lemon"],
    ["1 cup cooked", "1/2 cup halved", "1/2 cup diced", "1/4 cup", "50g", "2 tbsp", "1"],
    6, // Updated number of instructions
    ["knife", "mixing bowl"],
    [
      "Cook quinoa according to package instructions and allow it to cool completely.",
      "Halve the cherry tomatoes and dice the cucumbers into small pieces.",
      "Slice olives into thin rounds and crumble the feta cheese.",
      "In a mixing bowl, combine the quinoa, tomatoes, cucumbers, olives, and feta.",
      "Drizzle with olive oil and squeeze fresh lemon juice over the mixture.",
      "Toss gently to combine, then serve chilled or at room temperature."
    ],
    false,
    "Lunch",
    "A fresh salad made with quinoa, cherry tomatoes, cucumbers, olives, and feta cheese.",
    ["Healthy", "Fresh", "Light"]
  )
];
