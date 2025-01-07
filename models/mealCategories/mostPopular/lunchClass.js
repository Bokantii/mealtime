import Meal from "../../mealsModel";

export const MOST_POPULAR_LUNCH = [
  new Meal(
    "1",
    "Club Sandwich with Fries",
    "https://media.istockphoto.com/id/534333618/photo/club-sandwiches-with-french-fries-on-side.webp?a=1&b=1&s=612x612&w=0&k=20&c=qAsLOOz6hd0AwtiqjLh8XXOlGqClorxIHu53HWDA3zc=",
    20,
    2,
    ["bread", "chicken", "lettuce", "tomato", "fries"],
    ["4 slices", "200g", "2 leaves", "1", "200g"],
    ["knife", "pan", "fryer"],
    [
      "Toast the slices of bread lightly until golden brown.",
      "Cook the chicken in a pan until fully cooked and no pink remains. Slice into strips.",
      "Assemble the sandwich by layering lettuce, tomato slices, and chicken between the bread slices.",
      "Fry the potatoes in hot oil until crispy and golden. Drain on a paper towel and serve alongside the sandwich."
    ],
    false,
    "Lunch",
    "A classic club sandwich served with crispy fries.",
    ["Comfort Food", "Quick", "Classic"]
  ),
  new Meal(
    "2",
    "Caesar Salad",
    "https://media.istockphoto.com/id/991861846/photo/homemade-cesar-salad-with-chicken-lettuce-and-parmesan.webp?a=1&b=1&s=612x612&w=0&k=20&c=lGzBXd30zY4RMPpD9JGG8XL8ii_2e2g2xzJqC71uzoY=",
    15,
    2,
    ["lettuce", "parmesan", "croutons", "caesar-dressing"],
    ["2 cups", "30g", "1/2 cup", "3 tbsp"],
    ["bowl", "knife"],
    [
      "Wash and chop the lettuce into bite-sized pieces and place in a large bowl.",
      "Add the Caesar dressing and toss well to coat the lettuce evenly.",
      "Top the salad with croutons and freshly grated Parmesan cheese before serving."
    ],
    false,
    "Lunch",
    "Crisp lettuce with creamy Caesar dressing and croutons.",
    ["Salad", "Quick", "Healthy"]
  ),
  new Meal(
    "3",
    "Turkey Avocado Wrap",
    "https://media.istockphoto.com/id/1347706240/photo/homemade-healthy-turkey-spinach-wraps.webp?a=1&b=1&s=612x612&w=0&k=20&c=9QC9ypnkvKUJJk3NvYI5d0qLRH0fEfeWZ_ukYENJue4=",
    10,
    1,
    ["tortilla", "turkey", "avocado", "lettuce"],
    ["1", "100g", "1/2", "1 leaf"],
    ["knife", "board"],
    [
      "Spread mashed avocado evenly across the tortilla.",
      "Layer the turkey slices and lettuce on top of the avocado.",
      "Roll the tortilla tightly into a wrap, slice in half, and serve."
    ],
    false,
    "Lunch",
    "Healthy wrap with turkey and creamy avocado.",
    ["Quick", "Healthy", "Low-carb"]
  ),
  new Meal(
    "4",
    "Grilled Chicken Salad",
    "https://media.istockphoto.com/id/1576364641/photo/grilled-chicken-cobb-salad.webp?a=1&b=1&s=612x612&w=0&k=20&c=vjyZNW2ni2-ANxMBywHDUcXH6hVWIZb2Natnu0O8sIc=",
    25,
    2,
    ["chicken", "lettuce", "tomatoes", "cucumber", "vinaigrette"],
    ["200g", "2 cups", "1", "1/2", "3 tbsp"],
    ["grill-pan", "knife", "bowl"],
    [
      "Season the chicken with salt and pepper, then grill it over medium heat until cooked through. Slice into strips.",
      "Wash and chop the lettuce, tomatoes, and cucumber into bite-sized pieces.",
      "Combine the vegetables in a large bowl, add the grilled chicken strips, and drizzle with vinaigrette before serving."
    ],
    false,
    "Lunch",
    "Fresh salad topped with grilled chicken.",
    ["Healthy", "Protein", "Gluten-Free"]
  ),
  new Meal(
    "5",
    "BLT Sandwich",
    "https://media.istockphoto.com/id/1263695727/photo/toasted-blt-sandwich.webp?a=1&b=1&s=612x612&w=0&k=20&c=rW97kJQLzUCBqgvYh6XmP-RCVY5JAIRLVEgiiK4Q6fY=",
    10,
    1,
    ["bread", "bacon", "lettuce", "tomato", "mayonnaise"],
    ["2 slices", "3 strips", "1 leaf", "1 slice", "1 tbsp"],
    ["pan", "knife"],
    [
      "Cook the bacon in a pan until crispy and set aside on a paper towel to drain.",
      "Toast the bread slices lightly.",
      "Spread mayonnaise on one side of each bread slice, then layer bacon, lettuce, and tomato. Close the sandwich and serve."
    ],
    false,
    "Lunch",
    "A classic BLT sandwich with crispy bacon.",
    ["Quick", "Comfort Food", "Classic"]
  ),
  new Meal(
    "6",
    "Caprese Panini",
    "https://media.istockphoto.com/id/930271208/photo/healthy-grilled-basil-mozzarella-caprese-panini.webp?a=1&b=1&s=612x612&w=0&k=20&c=VmKDUc-VfoSghQcIiuG5CT2GIsEcwqKvg5SFMPHv4zQ=",
    15,
    2,
    ["bread", "mozzarella", "tomato", "basil", "olive-oil"],
    ["2 slices", "100g", "1", "2 leaves", "1 tbsp"],
    ["panini-press", "knife"],
    [
      "Layer slices of mozzarella, tomato, and fresh basil leaves between the bread slices.",
      "Brush the outside of the bread with olive oil.",
      "Place the sandwich in a panini press or grill until the bread is crispy and the mozzarella is melted. Serve warm."
    ],
    true,
    "Lunch",
    "Melty mozzarella and fresh basil in a crispy panini.",
    ["Italian", "Vegetarian", "Quick"]
  )
];
