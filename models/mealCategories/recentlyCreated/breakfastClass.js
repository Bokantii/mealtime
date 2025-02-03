import Meal from "../../mealsModel";

export const RECENTLY_CREATED_BREAKFAST = [
  new Meal(
    "1",
    "Blueberry Muffins",
    "https://media.istockphoto.com/id/478095157/photo/blueberry-muffins.webp?a=1&b=1&s=612x612&w=0&k=20&c=3M-6ofmD7BlqrZ3qDEV5_NYzGMG54BmMpMkNH8shA28=",
    30,
    12,
    ["all-purpose flour", "sugar", "baking powder", "salt", "butter", "eggs", "milk", "blueberries"],
    ["2 cups", "1 cup", "2 tsp", "1/2 tsp", "1/2 cup", "2", "1/2 cup", "1 cup"],
    6, // Number of instructions
    ["mixing bowl", "oven", "muffin tin"],
    [
      "Preheat oven to 375°F (190°C).",
      "Mix dry ingredients in a bowl.",
      "Combine wet ingredients in another bowl.",
      "Fold blueberries into the batter.",
      "Spoon batter into muffin tins.",
      "Bake for 20-25 minutes or until golden."
    ],
    false,
    "Breakfast",
    "Soft and fluffy blueberry muffins perfect for breakfast or a snack.",
    ["Baking", "Sweet", "Quick"]
  ),
  new Meal(
    "2",
    "Oatmeal with Brown Sugar",
    "https://media.istockphoto.com/id/119131170/photo/bowls-of-oatmeal-sitting-on-white-detailed-tablecloth.webp?a=1&b=1&s=612x612&w=0&k=20&c=qC2rHP6X_aQLhkl5nQgSRjYSUN044519kg0TQR7uKPo=",
    10,
    1,
    ["rolled oats", "milk", "salt", "brown sugar", "raisins"],
    ["1 cup", "2 cups", "1/4 tsp", "2 tbsp", "1/4 cup"],
    4, // Number of instructions
    ["saucepan", "bowl"],
    [
      "Boil water or milk in a saucepan.",
      "Stir in oats and salt.",
      "Cook on low heat for 5-7 minutes.",
      "Serve topped with brown sugar and raisins."
    ],
    false,
    "Breakfast",
    "Warm and comforting oatmeal sweetened with brown sugar.",
    ["Healthy", "Quick", "Comfort Food"]
  ),
  new Meal(
    "3",
    "Sausage and Egg Wrap",
    "https://media.istockphoto.com/id/1443991803/photo/breakfast-burrito-with-sausage-eggs-hashbrown-and-cheese.webp?a=1&b=1&s=612x612&w=0&k=20&c=AsnnETYZ-eMA3gxjQlhv6VpgyUCY6S_y8YO_6oITdfY=",
    15,
    1,
    ["eggs", "sausages", "tortilla wrap", "shredded cheese", "salt", "pepper"],
    ["2", "2", "1", "1/4 cup", "to taste", "to taste"],
    5, // Number of instructions
    ["skillet", "spatula"],
    [
      "Cook sausages in a skillet.",
      "Scramble eggs with salt and pepper.",
      "Place sausage and eggs in a tortilla.",
      "Top with shredded cheese.",
      "Roll tightly and serve warm."
    ],
    false,
    "Breakfast",
    "A hearty and protein-packed breakfast wrap with sausage and eggs.",
    ["Quick", "Protein", "Comfort Food"]
  ),
  new Meal(
    "4",
    "Ham and Cheese Croissant",
    "https://media.istockphoto.com/id/1363138181/photo/croissant-with-ham-and-cheese.webp?a=1&b=1&s=612x612&w=0&k=20&c=uE0YJSFvpWAH-D5lX4R7TKVufkTfrSXEktoDN_v95xw=",
    15,
    1,
    ["croissant", "ham", "cheese", "butter"],
    ["1", "2 slices", "1 slice", "1 tbsp"],
    5, // Number of instructions
    ["oven", "knife"],
    [
      "Preheat oven to 350°F (175°C).",
      "Slice croissant in half.",
      "Layer ham and cheese inside.",
      "Spread butter on the outside.",
      "Bake until cheese is melted."
    ],
    false,
    "Breakfast",
    "Flaky croissant stuffed with ham and melted cheese.",
    ["Savory", "Quick", "Classic"]
  ),
  new Meal(
    "5",
    "Spinach and Feta Wrap",
    "https://media.istockphoto.com/id/1498782062/photo/delicious-tortilla-wrap-with-tuna-on-wooden-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=BzTbS0ms-1FJDu_Bsb81azJhDSbaQ8oYbF0OCD6xX2k=",
    10,
    1,
    ["tortilla wrap", "spinach", "feta cheese", "olive oil"],
    ["1", "1/2 cup", "1/4 cup", "1 tbsp"],
    4, // Number of instructions
    ["skillet", "spatula"],
    [
      "Heat tortilla in a skillet.",
      "Layer spinach and feta in the center.",
      "Drizzle with olive oil.",
      "Fold wrap and serve warm."
    ],
    false,
    "Breakfast",
    "A nutritious and flavorful wrap with spinach and feta.",
    ["Vegetarian", "Healthy", "Quick"]
  ),
  new Meal(
    "6",
    "Waffles with Strawberries",
    "https://media.istockphoto.com/id/172971417/photo/a-stack-of-waffles-with-strawberries.webp?a=1&b=1&s=612x612&w=0&k=20&c=JMQV4QEONQElR5y4NQ1U_o2FXkHQXPxfDsYh-u0Ho18=",
    5,
    1,
    ["waffle", "strawberries", "whipped cream"],
    ["1", "1/2 cup", "2 tbsp"],
    3, // Number of instructions
    ["toaster", "knife"],
    [
      "Toast waffle until golden.",
      "Top with sliced strawberries.",
      "Add whipped cream and serve."
    ],
    false,
    "Breakfast",
    "Crispy waffle topped with fresh strawberries and whipped cream.",
    ["Sweet", "Quick", "Comfort Food"]
  ),
  new Meal(
    "7",
    "Fried Plantains and Eggs",
    "https://media.istockphoto.com/id/2177437192/photo/photo-of-fried-eggs-and-plantain-in-two-dishes-on-the-table-food-photography-indoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZbPrsbC9AgmN-c4i53nUHQNr-NkYuckB1e287IfVM7E=",
    10,
    1,
    ["plantains", "eggs", "vegetable oil", "salt", "pepper"],
    ["1", "2", "1 tbsp", "to taste", "to taste"],
    4, // Number of instructions
    ["skillet", "knife"],
    [
      "Peel and slice plantains.",
      "Fry plantains until golden.",
      "Scramble eggs with salt and pepper.",
      "Serve eggs with fried plantains."
    ],
    false,
    "Breakfast",
    "Sweet fried plantains paired with fluffy scrambled eggs.",
    ["Quick", "Savory", "Comfort Food"]
  )
];
