import Meal from "../../mealsModel";

export const RECENTLY_CREATED_DESSERTS = [
  new Meal(
    "1",
    "Apple Crumble",
    "https://media.istockphoto.com/id/175227596/photo/close-up-of-apple-crisps-in-a-white-bowl-and-a-single-spoon.webp?a=1&b=1&s=612x612&w=0&k=20&c=-s1ZAAwvezOAOuCiXBr7lTCUnJtVxBSKzxUaQC4Uivk=",
    45, // Duration in minutes
    6, // Serves 6
    ["apples", "flour", "sugar", "butter", "cinnamon"], // Ingredient IDs
    ["6 large", "1 cup", "3/4 cup", "1/2 cup", "1 tsp"], // Ingredient quantities
    ["mixing-bowl", "baking-dish", "oven"], // Cookware needed
    [
      "Preheat the oven to 375°F (190°C).",
      "Peel and slice apples, then mix with sugar and cinnamon.",
      "Prepare the crumble topping by mixing flour, sugar, and butter until crumbly.",
      "Place the apple mixture in a baking dish and top with the crumble.",
      "Bake for 35-40 minutes or until golden brown.",
    ], // Instructions
    false, // Not Pro-only
    "Dessert", // Meal category
    "A warm and comforting dessert made with baked apples and a buttery topping.", // Description
    ["Comfort Food", "Sweet", "Baked"], // Tags
  ),
  new Meal(
    "2",
    "Strawberry Shortcake",
    "https://media.istockphoto.com/id/1307762217/photo/japanese-strawberry-shortcake.webp?a=1&b=1&s=612x612&w=0&k=20&c=YbLr_-BiVDfs5udAmHMhJlkrHIrjDIAN4fAyXdi5S0s=",
    30, // Duration in minutes
    4, // Serves 4
    ["strawberries", "sugar", "flour", "butter", "whipped-cream"], // Ingredient IDs
    ["1 lb", "1/2 cup", "2 cups", "1/4 cup", "1 cup"], // Ingredient quantities
    ["mixing-bowl", "baking-sheet", "oven"], // Cookware needed
    [
      "Preheat the oven to 350°F (175°C).",
      "Prepare biscuits using flour, sugar, and butter.",
      "Bake biscuits for 15 minutes or until golden brown.",
      "Slice strawberries and mix with sugar to macerate.",
      "Assemble by layering biscuits, strawberries, and whipped cream.",
    ], // Instructions
    false, // Not Pro-only
    "Dessert", // Meal category
    "Fluffy biscuits topped with fresh strawberries and whipped cream.", // Description
    ["Fruit", "Sweet", "Layered"], // Tags
  ),
  new Meal(
    "3",
    "Panna Cotta",
    "https://media.istockphoto.com/id/1783548195/photo/macro-spoon-with-piece-of-panna-cotta-with-natural-vanilla-pod-mango-syrup-and-mint-selective.webp?a=1&b=1&s=612x612&w=0&k=20&c=maOq-UDeNWT2D8yET7DRx9q5r7knLHOD8lucOu3sGUQ=",
    20, // Duration in minutes (excluding chilling time)
    4, // Serves 4
    ["heavy-cream", "sugar", "vanilla-extract", "gelatin", "fruit-topping"], // Ingredient IDs
    ["2 cups", "1/3 cup", "1 tsp", "1 packet", "1/2 cup"], // Ingredient quantities
    ["saucepan", "mixing-bowl", "refrigerator"], // Cookware needed
    [
      "Heat heavy cream and sugar in a saucepan until sugar dissolves.",
      "Add vanilla extract and gelatin dissolved in water.",
      "Pour mixture into molds and refrigerate for at least 4 hours.",
      "Serve with your favorite fruit topping.",
    ], // Instructions
    true, // Pro-only
    "Dessert", // Meal category
    "A creamy Italian dessert served with a fruit topping.", // Description
    ["Elegant", "Creamy", "Chilled"], // Tags
  ),
];
