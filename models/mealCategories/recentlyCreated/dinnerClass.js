import Meal from "../../mealsModel";

export const RECENTLY_CREATED_DINNER = [
  new Meal(
    "1",
    "Stuffed Chicken Breast with Spinach and Feta",
    "https://media.istockphoto.com/id/118313946/photo/chicken-breasts-stuffed-with-spinach-and-feta.webp?a=1&b=1&s=612x612&w=0&k=20&c=LGIS4gJOxvTFtanLCtyn302uDgOIlK3SPhWXwWK41GY=",
    45, // Duration in minutes
    4, // Serves 4
    ["chicken-breasts", "spinach", "feta-cheese", "garlic", "olive-oil"], // Ingredient IDs
    ["4 pieces", "1 cup", "1/2 cup", "2 cloves", "2 tbsp"], // Ingredient quantities
    ["mixing-bowl", "baking-dish", "oven"], // Cookware needed
    [
      "Preheat oven to 375°F (190°C).",
      "In a mixing bowl, combine spinach, feta, and minced garlic.",
      "Cut a pocket in each chicken breast and stuff with the spinach mixture.",
      "Heat olive oil in a pan over medium heat and sear the chicken on both sides until golden.",
      "Transfer the chicken to a baking dish and bake for 25-30 minutes until fully cooked.",
    ], // Instructions
    false, // Not Pro-only
    "Dinner", // Meal category
    "Juicy chicken breasts filled with a cheesy spinach mixture.", // Description
    ["Savory", "High Protein", "Healthy"], // Tags
  ),
  new Meal(
    "2",
    "Moist Turkey and Spinach Meatloaf",
    "https://media.istockphoto.com/id/1425220140/photo/moist-turkey-and-spinach-meatloaf.webp?a=1&b=1&s=612x612&w=0&k=20&c=3mubH5ePSt2vqQGY685jsrZFLtY-uptwMliy85MtIqY=",
    60, // Duration in minutes
    6, // Serves 6
    ["ground-turkey", "spinach", "breadcrumbs", "egg", "ketchup"], // Ingredient IDs
    ["1 lb", "1 cup", "1/2 cup", "1", "1/4 cup"], // Ingredient quantities
    ["mixing-bowl", "loaf-pan", "oven"], // Cookware needed
    [
      "Preheat oven to 375°F (190°C).",
      "In a mixing bowl, combine ground turkey, chopped spinach, breadcrumbs, egg, and half the ketchup.",
      "Press the mixture into a loaf pan.",
      "Spread the remaining ketchup evenly on top.",
      "Bake for 50-60 minutes until the meatloaf is cooked through.",
    ], // Instructions
    false, // Not Pro-only
    "Dinner", // Meal category
    "A comfort food favorite with a savory glaze.", // Description
    ["Comfort Food", "High Protein", "Glazed"], // Tags
  ),
  new Meal(
    "3",
    "Vegetable Curry with Rice",
    "https://media.istockphoto.com/id/1227497005/photo/summer-curry-with-lots-of-vegetables.jpg?s=612x612&w=0&k=20&c=yU8ds5d8MBYI0OSLg-YxMnvBDs4Qp3cYRQqdVHweWLo=",
    35, // Duration in minutes
    4, // Serves 4
    ["mixed-vegetables", "coconut-milk", "curry-powder", "rice", "garlic"], // Ingredient IDs
    ["3 cups", "1 can", "2 tbsp", "2 cups", "2 cloves"], // Ingredient quantities
    ["saucepan", "pot", "mixing-spoon"], // Cookware needed
    [
      "Cook rice in a pot according to package instructions and set aside.",
      "Heat oil in a saucepan over medium heat and sauté minced garlic until fragrant.",
      "Add mixed vegetables and cook for 5 minutes, stirring occasionally.",
      "Sprinkle curry powder over the vegetables and stir to coat evenly.",
      "Pour in coconut milk and simmer for 15 minutes, stirring occasionally.",
      "Serve the curry hot over the cooked rice.",
    ], // Instructions
    false, // Not Pro-only
    "Dinner", // Meal category
    "A creamy and aromatic Indian-inspired dish.", // Description
    ["Vegan", "Gluten-Free", "Comfort Food"], // Tags
  ),
];
