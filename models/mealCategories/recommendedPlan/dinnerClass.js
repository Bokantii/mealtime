import Meal from "../../mealsModel";

export const RECOMMENDED_DINNER = [
  new Meal(
    "1",
    "Chicken Pot Pie",
    "https://media.istockphoto.com/id/1307065945/photo/cast-iron-chicken-pot-pie.webp",
    60, // Duration in minutes
    4, // Serves 4
    ["chicken", "mixed-vegetables", "pie-crust", "cream", "butter", "flour"], // Ingredient IDs
    ["2 cups", "1 cup", "1 crust", "1 cup", "2 tbsp", "2 tbsp"], // Ingredient quantities
    ["mixing-bowl", "rolling-pin", "oven"], // Cookware needed
    [
      "Preheat the oven to 375°F (190°C).",
      "In a saucepan, melt butter and stir in flour to create a roux. Gradually add cream, stirring constantly until a thick sauce forms.",
      "Add cooked chicken and mixed vegetables to the sauce, mixing well.",
      "Roll out the pie crust and place it in a baking dish. Fill with the chicken mixture.",
      "Cover with the top crust, seal the edges, and cut small slits for ventilation.",
      "Bake for 35-40 minutes until the crust is golden brown.",
      "Let cool slightly before serving."
    ], // Instructions
    false, // Not Pro-only
    "Dinner", // Meal category
    "A flaky pastry crust filled with a creamy chicken and vegetable filling.", // Description
    ["Comfort Food", "Savory", "Classic"] // Tags
  ),
  new Meal(
    "2",
    "Beef and Broccoli Stir-Fry",
    "https://media.istockphoto.com/id/2164275085/photo/beef-and-broccoli-stir-fry.webp",
    25, // Duration in minutes
    4, // Serves 4
    ["beef-slices", "broccoli", "soy-sauce", "ginger", "garlic", "cornstarch"], // Ingredient IDs
    ["500g", "2 cups", "1/4 cup", "1 tsp", "2 cloves", "1 tbsp"], // Ingredient quantities
    ["wok", "spatula"], // Cookware needed
    [
      "Heat oil in a wok over high heat and cook beef slices until browned. Remove and set aside.",
      "In the same wok, stir-fry broccoli, garlic, and ginger for 2-3 minutes.",
      "Mix soy sauce and cornstarch with water to create a slurry.",
      "Return beef to the wok and pour the slurry over the mixture.",
      "Cook, stirring constantly, until the sauce thickens and coats the beef and broccoli.",
      "Serve hot over steamed rice or noodles."
    ], // Instructions
    false, // Not Pro-only
    "Dinner", // Meal category
    "A quick and savory Chinese-inspired dish.", // Description
    ["Quick", "Savory", "Healthy"] // Tags
  ),
  new Meal(
    "3",
    "Gnocchi with Spinach and White Sauce",
    "https://media.istockphoto.com/id/2125938071/photo/gnocchi-with-white-sauce-and-spinach.webp",
    30, // Duration in minutes
    4, // Serves 4
    ["gnocchi", "spinach", "cream", "parmesan-cheese", "butter", "garlic"], // Ingredient IDs
    ["500g", "2 cups", "1 cup", "1/2 cup", "2 tbsp", "2 cloves"], // Ingredient quantities
    ["saucepan", "mixing-bowl"], // Cookware needed
    [
      "Cook gnocchi in boiling water according to package instructions. Drain and set aside.",
      "In a saucepan, melt butter over medium heat and sauté minced garlic until fragrant.",
      "Add spinach and cook until wilted.",
      "Pour in cream and stir in parmesan cheese, allowing the sauce to thicken slightly.",
      "Add cooked gnocchi to the saucepan and stir to coat with the sauce.",
      "Cook for 2-3 minutes until heated through. Serve warm, garnished with additional parmesan if desired."
    ], // Instructions
    true, // Pro-only
    "Dinner", // Meal category
    "A soft pasta dish with a rich, creamy sauce.", // Description
    ["Rich", "Comfort Food", "Vegetarian"] // Tags
  ),
];
