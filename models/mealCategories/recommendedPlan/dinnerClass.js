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
    9, // Updated number of instructions
    ["mixing-bowl", "rolling-pin", "oven"], // Cookware needed
    [
      "Preheat the oven to 375°F (190°C).",
      "In a saucepan, melt butter over medium heat. Once melted, add flour and whisk continuously for 1-2 minutes to form a roux.",
      "Gradually add cream while stirring constantly until the sauce thickens and becomes smooth.",
      "Add cooked, shredded chicken and mixed vegetables to the sauce, stirring well to combine.",
      "Roll out the pie crust and place it into a greased baking dish. Trim any excess dough.",
      "Fill the crust with the creamy chicken and vegetable mixture, spreading evenly.",
      "Cover with the top pie crust, pressing the edges together to seal. Cut small slits on top to allow steam to escape.",
      "Bake for 35-40 minutes or until the crust turns golden brown.",
      "Let the pie cool for at least 10 minutes before slicing and serving."
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
    8, // Updated number of instructions
    ["wok", "spatula"], // Cookware needed
    [
      "Thinly slice the beef into bite-sized strips and season with a pinch of salt and pepper.",
      "In a small bowl, mix soy sauce and cornstarch with 1/4 cup water to create a slurry.",
      "Heat oil in a wok over high heat and stir-fry the beef slices for 2-3 minutes until browned. Remove from wok and set aside.",
      "In the same wok, add more oil if needed and stir-fry minced garlic and grated ginger for 30 seconds until fragrant.",
      "Add the broccoli florets and stir-fry for another 2-3 minutes until they are slightly tender but still bright green.",
      "Return the cooked beef to the wok and pour the soy sauce-cornstarch slurry over the mixture.",
      "Stir constantly for 2-3 minutes until the sauce thickens and evenly coats the beef and broccoli.",
      "Serve hot over steamed rice or noodles for a complete meal."
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
    8, // Updated number of instructions
    ["saucepan", "mixing-bowl"], // Cookware needed
    [
      "Bring a large pot of salted water to a boil and cook the gnocchi according to the package instructions. Drain and set aside.",
      "In a saucepan, melt butter over medium heat. Add minced garlic and sauté for 30 seconds until fragrant.",
      "Add fresh spinach to the pan and cook until wilted, about 2 minutes.",
      "Reduce heat to low and pour in the cream, stirring gently to combine with the spinach.",
      "Slowly add grated parmesan cheese while stirring continuously, allowing the sauce to thicken slightly.",
      "Gently fold in the cooked gnocchi, ensuring each piece is well coated with the creamy spinach sauce.",
      "Cook for another 2-3 minutes, stirring occasionally, until the dish is heated through and the sauce reaches the desired consistency.",
      "Serve warm, garnished with extra parmesan and freshly ground black pepper if desired."
    ], // Instructions
    true, // Pro-only
    "Dinner", // Meal category
    "A soft pasta dish with a rich, creamy sauce.", // Description
    ["Rich", "Comfort Food", "Vegetarian"] // Tags
  ),
];
