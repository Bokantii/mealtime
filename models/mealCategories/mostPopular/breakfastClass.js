import Meal from "../../mealsModel";

export const MOST_POPULAR_BREAKFAST = [
  new Meal(
    "1",
    "Pancakes with Maple Syrup",
    "https://media.istockphoto.com/id/109726917/photo/whole-wheat-pancakes-with-maple-syrup.webp?a=1&b=1&s=612x612&w=0&k=20&c=mtbFhZpHWg5sgYkdS6JGGppBiFn9MrdQBOXxwL8fGt0=",
    20,
    2,
    ["pancake-mix", "maple-syrup", "butter"],
    ["200g", "100ml", "1 tbsp"],
    4, // Number of instructions
    ["pan", "spatula", "mixing-bowl"],
    [
      "In a large mixing bowl, combine the pancake mix with water (follow the package instructions for the correct ratio) and whisk until the batter is smooth.",
      "Heat a non-stick pan over medium heat and lightly grease with butter.",
      "Pour a ladleful of the batter onto the pan and cook until bubbles form on the surface. Flip and cook the other side for another 2 minutes.",
      "Serve warm with maple syrup drizzled on top.",
    ],
    false,
    "Breakfast",
    "Fluffy pancakes with rich maple syrup.",
    ["Sweet", "Quick", "Comfort Food"]
  ),
  new Meal(
    "2",
    "Chicken and Waffles",
    "https://media.istockphoto.com/id/1325150602/photo/waffles-with-fried-chicken.webp?a=1&b=1&s=612x612&w=0&k=20&c=9VAOtT-wdRuwOowO6fxXzkfMjh2skjoBfZ4ZTSQzykw=",
    30,
    2,
    ["chicken", "waffle-batter", "maple-syrup"],
    ["200g", "150g", "50ml"],
    4, // Number of instructions
    ["waffle-maker", "frying-pan"],
    [
      "Preheat your waffle maker. Prepare the waffle batter according to the package instructions and set aside.",
      "Heat a frying pan with enough oil to shallow-fry the chicken. Season the chicken with salt, pepper, and optional spices, then fry until golden brown and cooked through.",
      "Pour the waffle batter into the waffle maker and cook until golden and crisp.",
      "Serve the fried chicken on top of the waffles and drizzle with maple syrup.",
    ],
    true,
    "Breakfast",
    "Crispy fried chicken served on golden waffles.",
    ["Sweet", "Savory", "American"]
  ),
  new Meal(
    "3",
    "Vegetarian Omelette",
    "https://media.istockphoto.com/id/1430574902/photo/omelet-with-fried-mushrooms-and-fresh-herbs-in-a-plate-on-a-concrete-background-delicious.webp?a=1&b=1&s=612x612&w=0&k=20&c=RQVT2hbr9ailT3TQtOAC4DWQiZP6E2HUxjrCkmywyqk=",
    15,
    1,
    ["eggs", "mushrooms", "cheese", "spinach"],
    ["3", "50g", "30g", "20g"],
    4, // Number of instructions
    ["pan", "whisk", "knife"],
    [
      "Crack the eggs into a bowl, add a pinch of salt and pepper, and whisk until fully mixed.",
      "Slice the mushrooms and sauté them in a non-stick pan over medium heat until tender.",
      "Pour the whisked eggs over the mushrooms and sprinkle spinach and grated cheese on top.",
      "Cook until the omelette is set, then fold in half and serve immediately.",
    ],
    false,
    "Breakfast",
    "Healthy omelette loaded with fresh vegetables.",
    ["Vegetarian", "Quick", "Protein"]
  ),
  new Meal(
    "4",
    "Avocado Toast with Poached Egg",
    "https://media.istockphoto.com/id/2163788896/photo/poached-eggs-on-toasted-bread-eggs-benedict-with-spinach-delicious-fresh-benedict-eggs.webp?a=1&b=1&s=612x612&w=0&k=20&c=_f1eeez4FvrDKFRPe3G5Gce4FyWKgdvWiQSUJ968SpM=",
    10,
    1,
    ["bread", "avocado", "egg", "lemon"],
    ["2 slices", "1", "1", "1/2"],
    4, // Number of instructions
    ["toaster", "pot", "knife"],
    [
      "Toast the bread slices in a toaster until golden brown.",
      "Slice the avocado in half, remove the pit, and mash the flesh in a bowl with a squeeze of lemon juice.",
      "Bring a pot of water to a gentle simmer, crack an egg into a small cup, and carefully slide it into the water. Cook for 3-4 minutes until the whites are set.",
      "Spread the mashed avocado onto the toasted bread, top with the poached egg, and serve immediately.",
    ],
    false,
    "Breakfast",
    "Creamy avocado on toast topped with a perfectly poached egg.",
    ["Healthy", "Quick", "Trendy"]
  ),
  new Meal(
    "5",
    "Egg and Cheese Bagel Sandwich",
    "https://media.istockphoto.com/id/2178718682/photo/bagel-sandwich-withmacon-and-fried-egg.webp?a=1&b=1&s=612x612&w=0&k=20&c=qIBGA6Q_7cN3Rl_nH4YgrWdbkdwemKoCcY6v6RTkQfE=",
    15,
    1,
    ["bagel", "egg", "cheese"],
    ["1", "1", "1 slice"],
    3, // Number of instructions
    ["pan", "toaster"],
    [
      "Toast the bagel slices in a toaster until golden brown.",
      "Cook an egg in a frying pan to your desired consistency (fried or scrambled).",
      "Assemble the sandwich by layering the egg and cheese on the toasted bagel.",
      "Serve warm.",
    ],
    false,
    "Breakfast",
    "Hearty bagel sandwich with egg and melted cheese.",
    ["Quick", "Savory", "Comfort Food"]
  ),
  new Meal(
    "6",
    "Smoked Salmon on Rye Bread",
    "https://media.istockphoto.com/id/1222564135/photo/bruschetta-with-salmon-curd-cheese-and-cucumber-on-toast-in-high-key-style-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=sSDWoADrZ_TXXSYAuPg6ZxzIcnFCW20BQydigriEAF8=",
    10,
    1,
    ["rye-bread", "smoked-salmon", "cream-cheese"],
    ["2 slices", "50g", "20g"],
    3, // Number of instructions
    ["knife", "toaster"],
    [
      "Toast the rye bread slices until golden brown.",
      "Spread cream cheese evenly on each slice of bread.",
      "Top with smoked salmon and serve immediately.",
    ],
    true,
    "Breakfast",
    "Elegant smoked salmon served on rye bread.",
    ["Savory", "Quick", "Protein"]
  ),
];
