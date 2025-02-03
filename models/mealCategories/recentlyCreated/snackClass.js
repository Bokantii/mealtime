import Meal from "../../mealsModel";

export const RECENTLY_CREATED_SNACKS = [
  new Meal(
    "1",
    "Stuffed Cabbage Rolls",
    "https://media.istockphoto.com/id/1739398162/photo/stuffed-cabbage-rolls.jpg?s=612x612&w=0&k=20&c=d_gYMVLE-Jc6tAQ3Boj2TwRShQ6ieXd4Kko7i35ukG4=",
    60,
    4,
    ["cabbage", "ground-beef", "rice", "tomato-sauce", "onion", "garlic"],
    ["1 large", "300g", "1 cup", "2 cups", "1 medium", "2 cloves"],
    5, // Number of instructions
    ["pot", "mixing-bowl", "oven"],
    [
      "Boil the cabbage leaves in salted water until soft, about 5-7 minutes. Drain and let cool.",
      "In a mixing bowl, combine ground beef, rice, finely chopped onion, and minced garlic.",
      "Place a portion of the meat mixture on each cabbage leaf and roll tightly, tucking in the sides.",
      "Arrange the rolls in a baking dish and pour tomato sauce over them.",
      "Cover with foil and bake at 350°F (175°C) for 45 minutes. Remove foil and bake for an additional 10 minutes.",
    ],
    false,
    "Snacks",
    "Savory cabbage rolls filled with a mixture of rice and meat.",
    ["Hearty", "Comfort Food", "Savory"]
  ),
  new Meal(
    "2",
    "Vegetarian Lasagna",
    "https://media.istockphoto.com/id/1303741768/photo/italian-lasagna-with-tomato-sauce-and-cheese-served-with-tomatoes-and-spinach-light-concrete.jpg?s=612x612&w=0&k=20&c=bhXJi5_c3GTohG7BTu2pxLAanHqnw2FGeWSquuSsvwM=",
    75,
    6,
    ["lasagna-noodles", "ricotta-cheese", "spinach", "zucchini", "marinara-sauce", "parmesan-cheese"],
    ["12 pieces", "1 cup", "2 cups", "1 cup", "3 cups", "1/2 cup"],
    6, // Number of instructions
    ["baking-dish", "oven", "mixing-bowl"],
    [
      "Preheat oven to 375°F (190°C).",
      "In a baking dish, spread a thin layer of marinara sauce.",
      "Layer lasagna noodles, ricotta cheese, spinach, zucchini slices, and marinara sauce.",
      "Repeat the layering process, finishing with a layer of marinara sauce on top.",
      "Sprinkle parmesan cheese generously over the top layer.",
      "Bake for 45 minutes or until golden and bubbly. Let cool slightly before serving.",
    ],
    true,
    "Snacks",
    "A hearty dish layered with ricotta, vegetables, and marinara sauce.",
    ["Vegetarian", "Comfort Food", "Hearty"]
  ),
  new Meal(
    "3",
    "Lentil and Spinach Stew",
    "https://media.istockphoto.com/id/1979470278/photo/fresh-vegetable-soup-with-lentil-on-wooden-table.jpg?s=612x612&w=0&k=20&c=kscJMpmWv-R9yMDXqpHjaYneb8Idtp2CV_RduX-DEio=",
    40,
    4,
    ["lentils", "spinach", "onion", "garlic", "vegetable-broth", "cumin"],
    ["1 cup", "2 cups", "1 medium", "2 cloves", "4 cups", "1 tsp"],
    5, // Number of instructions
    ["pot", "stirring-spoon", "knife"],
    [
      "Heat a pot over medium heat and sauté finely chopped onion and minced garlic until fragrant.",
      "Add lentils, vegetable broth, and cumin. Stir well and bring to a boil.",
      "Lower the heat and let simmer for 25 minutes, stirring occasionally.",
      "Add spinach to the pot and cook for another 5 minutes until wilted.",
      "Season with salt and pepper to taste. Serve hot with crusty bread or rice if desired.",
    ],
    false,
    "Snacks",
    "A hearty vegan option, loaded with protein and iron.",
    ["Vegan", "Protein-Rich", "Hearty"]
  ),
];
