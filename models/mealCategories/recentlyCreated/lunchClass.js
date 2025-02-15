import Meal from "../../mealsModel";

export const RECENTLY_CREATED_LUNCH = [
  new Meal(
    "1",
    "Chicken Gyro",
    "https://media.istockphoto.com/id/1347230397/photo/chicken-gyros-with-vegetables-french-fries-and-tzatziki-sauce-on-plate-greek-food-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=x6waJUbOLyQRd2jXqxeTpymSj4SxPjzSvOppuzXYwds=",
    30,
    4,
    ["chicken-thighs", "pita-bread", "tzatziki-sauce", "lettuce", "tomatoes"],
    ["500g", "4 pieces", "1 cup", "1 cup", "2 medium"],
    7, // Updated number of instructions
    ["grill", "mixing-bowl", "knife"],
    [
      "Season the chicken thighs with salt, pepper, and your choice of Greek seasoning.",
      "Preheat the grill to medium heat and cook the chicken for 6-8 minutes per side until fully cooked.",
      "While the chicken cooks, wash and slice the lettuce and tomatoes into thin strips.",
      "Once the chicken is done, let it rest for 5 minutes, then slice it into thin strips.",
      "Warm the pita bread on the grill or in a pan for about 30 seconds per side.",
      "Assemble the gyro by spreading tzatziki sauce inside the pita, then adding the sliced chicken, lettuce, and tomatoes.",
      "Fold and serve immediately with extra tzatziki sauce on the side."
    ],
    false,
    "Lunch",
    "A flavorful and filling Greek-inspired dish.",
    ["Mediterranean", "Quick", "Healthy"]
  ),
  new Meal(
    "2",
    "BBQ Ribs with Cornbread",
    "https://media.istockphoto.com/id/1477943238/photo/ribs-and-cornbread-dinner.webp?a=1&b=1&s=612x612&w=0&k=20&c=x1LqJF2fQQXyN8_vVoDMZHSHxadLTwYRf2dtJhtP7Oc=",
    90,
    6,
    ["pork-ribs", "bbq-sauce", "cornmeal", "buttermilk", "eggs"],
    ["1.5kg", "1 cup", "1 cup", "1 cup", "2"],
    8, // Updated number of instructions
    ["oven", "mixing-bowl", "baking-pan"],
    [
      "Preheat the oven to 350°F (175°C).",
      "Rub the ribs generously with salt, pepper, and your favorite BBQ seasoning.",
      "Coat the ribs with BBQ sauce and place them on a foil-lined baking pan.",
      "Cover the ribs with foil and bake for 1.5 hours, basting with more BBQ sauce every 30 minutes.",
      "While the ribs bake, prepare the cornbread by mixing cornmeal, buttermilk, and eggs in a bowl.",
      "Pour the cornbread batter into a greased baking pan and bake for 25 minutes or until golden brown.",
      "Once the ribs are tender, remove the foil and broil for 5 minutes to caramelize the BBQ sauce.",
      "Serve the ribs hot with a slice of warm cornbread on the side."
    ],
    true,
    "Lunch",
    "Tender BBQ ribs paired with warm cornbread.",
    ["Comfort Food", "BBQ", "Savory"]
  ),
  new Meal(
    "3",
    "Avocado Chicken Salad",
    "https://media.istockphoto.com/id/1226733438/photo/salad-with-grilled-chicken-breast-avocado-pomegranate-seeds-and-tomato-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=PNYQVX94OLE15FICz3YmOrW37ojc-njMxG4YY1XnhdA=",
    20,
    2,
    ["chicken-breast", "avocado", "lettuce", "pomegranate-seeds", "olive-oil"],
    ["2 pieces", "1 large", "2 cups", "1/4 cup", "2 tbsp"],
    6, // Updated number of instructions
    ["grill", "mixing-bowl", "knife"],
    [
      "Season the chicken breasts with salt, pepper, and a drizzle of olive oil.",
      "Grill the chicken over medium heat for 5-7 minutes per side until fully cooked.",
      "Allow the grilled chicken to rest for 5 minutes, then slice into thin strips.",
      "Cut the avocado in half, remove the pit, and slice into thin wedges.",
      "In a large bowl, combine the lettuce, pomegranate seeds, sliced avocado, and grilled chicken.",
      "Drizzle with olive oil, toss gently, and serve immediately."
    ],
    false,
    "Lunch",
    "A fresh and nutritious salad packed with flavors.",
    ["Healthy", "Low Carb", "Quick"]
  ),
  new Meal(
    "4",
    "Pasta Salad with Grilled Shrimp",
    "https://media.istockphoto.com/id/1493262781/photo/mediterranean-orzo-and-shrimp-salad-with-baby-spinach.webp?a=1&b=1&s=612x612&w=0&k=20&c=J1dJ66WRs-Un6HqU0z_zgkM57tG3_aFBZCRK2retJl0=",
    25,
    4,
    ["pasta", "shrimp", "olive-oil", "spinach", "cherry-tomatoes"],
    ["2 cups", "300g", "2 tbsp", "2 cups", "1 cup"],
    7, // Updated number of instructions
    ["pot", "grill", "mixing-bowl"],
    [
      "Bring a pot of salted water to a boil and cook the pasta according to the package instructions. Drain and let cool.",
      "Meanwhile, peel and devein the shrimp if necessary.",
      "Drizzle the shrimp with olive oil and season with salt, pepper, and a dash of garlic powder.",
      "Grill the shrimp over medium heat for 2-3 minutes per side until pink and opaque.",
      "In a large mixing bowl, combine the cooked pasta, fresh spinach, and cherry tomatoes.",
      "Add the grilled shrimp and drizzle with extra olive oil.",
      "Toss everything gently and serve the pasta salad chilled or at room temperature."
    ],
    false,
    "Lunch",
    "A refreshing and hearty pasta salad with shrimp.",
    ["Seafood", "Mediterranean", "Healthy"]
  )
];
