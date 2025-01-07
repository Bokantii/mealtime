import Meal from "../../mealsModel";

export const MOST_POPULAR_DINNER = [
  new Meal(
    "1",
    "Grilled Lemon Herb Chicken with Vegetables",
    "https://media.istockphoto.com/id/157336239/photo/grilled-chicken-breast.webp?a=1&b=1&s=612x612&w=0&k=20&c=ITrCRJqnmfU2Ks6PtLluBHl2hHt4MxN6OLfLylVs5AA=",
    40,
    4,
    ["chicken-breast", "lemon", "herbs", "vegetables"],
    ["500g", "1", "2 tbsp", "300g"],
    ["grill-pan", "knife", "cutting-board"],
    [
      "In a mixing bowl, combine lemon juice, herbs, and a pinch of salt and pepper. Marinate the chicken breasts in the mixture for at least 20 minutes.",
      "Preheat a grill pan over medium heat and grill the chicken breasts for 6-8 minutes on each side, or until fully cooked.",
      "While the chicken cooks, chop the vegetables and lightly grill them. Serve the chicken hot with the vegetables on the side."
    ],
    false,
    "Dinner",
    "Juicy chicken with fresh herbs and veggies.",
    ["Healthy", "Grilled", "Low-carb"]
  ),
  new Meal(
    "2",
    "Spaghetti Bolognese",
    "https://media.istockphoto.com/id/1471612291/photo/spaghetti-with-bolognese-sauce-on-wooden-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZdFmb-TxaiOSk_DaNJo22xbeBI6e9BfXdZR68oUG44Y=",
    50,
    4,
    ["spaghetti", "ground-beef", "tomato-sauce", "onion", "garlic"],
    ["400g", "500g", "200ml", "1", "2 cloves"],
    ["pot", "pan", "strainer"],
    [
      "Boil a large pot of salted water and cook the spaghetti until al dente. Drain and set aside.",
      "In a pan, heat oil and sauté finely chopped onion and garlic until fragrant. Add the ground beef and cook until browned.",
      "Pour in the tomato sauce and let it simmer for 10-15 minutes. Season with salt, pepper, and herbs if desired.",
      "Combine the sauce with the spaghetti and toss well before serving."
    ],
    false,
    "Dinner",
    "Classic Italian pasta dish with rich meat sauce.",
    ["Italian", "Comfort Food", "Pasta"]
  ),
  new Meal(
    "3",
    "Beef Stroganoff",
    "https://media.istockphoto.com/id/487537715/photo/beef-stroganoff.webp?a=1&b=1&s=612x612&w=0&k=20&c=FiNJWl9FQaN3aCokz7zCWcB1yLzgGRf_Y9fwZbzcx9M=",
    45,
    4,
    ["beef", "mushrooms", "sour-cream", "onion", "butter"],
    ["500g", "200g", "150ml", "1", "2 tbsp"],
    ["pan", "knife", "spoon"],
    [
      "Slice the beef into thin strips and season with salt and pepper.",
      "In a pan, melt butter and cook the beef until browned. Remove and set aside.",
      "In the same pan, sauté sliced mushrooms and chopped onion until tender. Add the beef back in.",
      "Stir in sour cream and let it simmer for 5-7 minutes. Serve hot over rice or pasta."
    ],
    true,
    "Dinner",
    "Creamy beef dish with mushrooms and sour cream.",
    ["Russian", "Creamy", "Comfort Food"]
  ),
  new Meal(
    "4",
    "Vegetarian Stir-Fried Noodles",
    "https://media.istockphoto.com/id/1156141303/photo/asian-vegetarian-food-udon-noodles-with-baby-bok-choy-shiitake-mushrooms-sesame-and-pepper.webp?a=1&b=1&s=612x612&w=0&k=20&c=1U4kysvA3uS3N0oON9kxxQKIEN8_TTQ1v9KS4cnCZL8=",
    25,
    3,
    ["noodles", "bok-choy", "mushrooms", "soy-sauce", "sesame-oil"],
    ["300g", "2 cups", "1 cup", "2 tbsp", "1 tbsp"],
    ["wok", "spatula", "knife"],
    [
      "Cook the noodles according to package instructions and set aside.",
      "In a wok, heat sesame oil and stir-fry chopped bok choy and mushrooms for 3-5 minutes.",
      "Add the cooked noodles and soy sauce to the wok. Stir-fry for another 2-3 minutes until everything is well combined and heated through. Serve hot."
    ],
    false,
    "Dinner",
    "Quick stir-fried noodles with fresh vegetables.",
    ["Vegetarian", "Asian", "Quick"]
  ),
  new Meal(
    "5",
    "Baked Salmon with Garlic Butter",
    "https://media.istockphoto.com/id/1064442674/photo/trout-fish-with-garlic-lemon-butter-sauce-parsley-close-up-in-a-copper-frying-pan-horizontal.jpg?s=612x612&w=0&k=20&c=5bvIO8eSGhXDjKraWrhaa-ftvFKLXm9_TF4vXn3iUG8=",
    30,
    2,
    ["salmon-fillet", "butter", "garlic", "lemon", "parsley"],
    ["2 fillets", "3 tbsp", "2 cloves", "1", "1 tbsp"],
    ["oven", "baking-dish", "knife"],
    [
      "Preheat your oven to 375°F (190°C). Melt the butter in a small saucepan and mix with minced garlic and lemon juice.",
      "Place the salmon fillets in a baking dish and pour the garlic butter mixture over them.",
      "Bake for 15-20 minutes or until the salmon is cooked through. Garnish with parsley before serving."
    ],
    true,
    "Dinner",
    "Delicious salmon baked with garlic and butter.",
    ["Healthy", "Seafood", "Quick"]
  ),
  new Meal(
    "6",
    "Classic Meatloaf with Mashed Potatoes",
    "https://media.istockphoto.com/id/1456907397/photo/meatloaf-portion-on-a-plate-served-with-mashed-potatoes.webp?a=1&b=1&s=612x612&w=0&k=20&c=F1_BX9nO6BTnp2k7ldasPzzbQvulV5Dsl7KZBW2mbGQ=",
    70,
    6,
    ["ground-beef", "breadcrumbs", "egg", "potatoes", "milk", "butter"],
    ["500g", "1 cup", "1", "1kg", "100ml", "3 tbsp"],
    ["oven", "mixing-bowl", "potato-masher"],
    [
      "Preheat your oven to 350°F (175°C). In a mixing bowl, combine ground beef, breadcrumbs, and egg. Mix well and shape into a loaf.",
      "Place the loaf in a baking dish and bake for 45-50 minutes.",
      "Meanwhile, boil potatoes until soft, then mash with butter and milk. Serve the meatloaf sliced with mashed potatoes on the side."
    ],
    false,
    "Dinner",
    "Hearty meatloaf served with creamy mashed potatoes.",
    ["Comfort Food", "Classic", "Family"]
  )
];
