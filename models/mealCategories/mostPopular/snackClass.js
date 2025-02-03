import Meal from "../../mealsModel";

export const MOST_POPULAR_SNACKS = [
  new Meal(
    "1",
    "Classic Popcorn",
    "https://media.istockphoto.com/id/2068529080/photo/popcorn.webp?a=1&b=1&s=612x612&w=0&k=20&c=9DP_pDK62cJxJ9XoaBgewFX_u1exI3dSkUQ4NVlo6Yk=",
    5,
    2,
    ["popcorn-kernels", "butter", "salt"],
    ["1/2 cup", "2 tbsp", "1 tsp"],
    3, // Number of instructions
    ["stovetop", "pot", "spoon"],
    [
      "Heat the butter in a large pot over medium heat until melted.",
      "Add the popcorn kernels and cover the pot with a lid. Shake the pot occasionally to prevent burning.",
      "Once the popping slows, remove from heat and season with salt. Serve immediately."
    ],
    false,
    "Snacks",
    "Freshly popped corn with a hint of butter.",
    ["Quick", "Gluten-Free", "Comfort Food"]
  ),
  new Meal(
    "2",
    "Nachos with Cheese Dip",
    "https://media.istockphoto.com/id/1003817180/photo/chili-cheese-dip.webp?a=1&b=1&s=612x612&w=0&k=20&c=u3zO5XVFPYxlDcMvrZ8DwM8l8eOdVEtDAgR3H2ORp3c=",
    10,
    4,
    ["tortilla-chips", "cheese", "milk", "jalapenos"],
    ["200g", "100g", "1/4 cup", "2 tbsp"],
    3, // Number of instructions
    ["microwave", "bowl"],
    [
      "Place the cheese and milk in a microwave-safe bowl and microwave for 30-second intervals, stirring in between until smooth.",
      "Slice the jalapenos thinly and mix them into the cheese dip.",
      "Serve the cheese dip warm alongside tortilla chips for dipping."
    ],
    false,
    "Snacks",
    "Crispy nachos with a creamy cheese dip.",
    ["Quick", "Cheesy", "Party"]
  ),
  new Meal(
    "3",
    "Chocolate Chip Cookies",
    "https://media.istockphoto.com/id/1265001647/photo/chocolate-chip-cookies.webp?a=1&b=1&s=612x612&w=0&k=20&c=OYE2AnTuQ5G91zv0gm0EFevfuceZnJ6dQ6DwUdaEHEg=",
    20,
    12,
    ["flour", "butter", "sugar", "chocolate-chips", "eggs"],
    ["2 cups", "1/2 cup", "1 cup", "1 cup", "1"],
    4, // Number of instructions
    ["mixing-bowl", "oven", "spoon"],
    [
      "Preheat the oven to 350°F (175°C).",
      "In a mixing bowl, cream together the butter and sugar until light and fluffy. Add the egg and mix well.",
      "Gradually stir in the flour and chocolate chips. Drop spoonfuls of the dough onto a baking tray.",
      "Bake for 10-12 minutes until golden. Let cool before serving."
    ],
    true,
    "Snacks",
    "Soft and chewy cookies with gooey chocolate chips.",
    ["Baking", "Sweet", "Comfort Food"]
  ),
  new Meal(
    "4",
    "Trail Mix",
    "https://media.istockphoto.com/id/483585729/photo/trail-mix-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=SuGgFUVTwlaFtUSL8pdJbqjYg71h_xZbLZbGbtLtWaA=",
    5,
    4,
    ["nuts", "dried-fruits", "seeds", "chocolate-chips"],
    ["1 cup", "1 cup", "1/2 cup", "1/4 cup"],
    3, // Number of instructions
    ["bowl", "spoon"],
    [
      "Combine the nuts, dried fruits, seeds, and chocolate chips in a large bowl.",
      "Mix thoroughly to distribute all the ingredients evenly.",
      "Store in an airtight container for a quick and healthy snack."
    ],
    false,
    "Snacks",
    "A healthy mix of nuts, dried fruits, and seeds.",
    ["Healthy", "Gluten-Free", "Quick"]
  ),
  new Meal(
    "5",
    "Fruit Salad",
    "https://media.istockphoto.com/id/1225981808/photo/healthy-homemade-fruit-salad-bowl-shot-from-above.webp?a=1&b=1&s=612x612&w=0&k=20&c=llSU8kL67h7yEoznAwgbtRxw3VyS3K6wAPK7Q9LwO8Y=",
    10,
    2,
    ["apple", "banana", "orange", "berries"],
    ["1", "1", "1", "1/2 cup"],
    3, // Number of instructions
    ["knife", "bowl"],
    [
      "Wash and peel the fruits as needed. Cut them into bite-sized pieces.",
      "Combine all the chopped fruits in a large bowl.",
      "Mix gently and serve fresh. Optionally, add a drizzle of honey or a squeeze of lemon juice."
    ],
    false,
    "Snacks",
    "A refreshing mix of seasonal fruits.",
    ["Healthy", "Vegan", "Quick"]
  ),
  new Meal(
    "6",
    "Veggie Sticks with Hummus",
    "https://media.istockphoto.com/id/1400924594/photo/plain-hummus-and-veggie-tray-with-pita.webp?a=1&b=1&s=612x612&w=0&k=20&c=XYte_HlF8Ik5H5JgC1Z9UT1fMngLeSDHfjucq0t5OO4=",
    10,
    2,
    ["carrots", "cucumbers", "hummus"],
    ["1 cup", "1 cup", "1/2 cup"],
    3, // Number of instructions
    ["knife", "bowl"],
    [
      "Wash and peel the carrots and cucumbers. Slice them into sticks.",
      "Arrange the veggie sticks neatly on a plate.",
      "Serve with hummus in a small bowl for dipping."
    ],
    false,
    "Snacks",
    "Crunchy veggie sticks served with creamy hummus.",
    ["Healthy", "Vegan", "Quick"]
  )
];
