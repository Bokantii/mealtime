import Meal from "../../mealsModel";

export const RECOMMENDED_DESSERTS = [
  new Meal(
    "1",
    "Crème Brûlée",
    "https://media.istockphoto.com/id/1385407587/photo/delicouis-creme-brulee.webp?a=1&b=1&s=612x612&w=0&k=20&c=gmgvkBOudZQzFubLP3nHjiDQkq-4XFoLLobMl2f3k0Y=",
    60,
    4,
    ["heavy-cream", "sugar", "egg-yolks", "vanilla-extract", "sugar-topping"],
    ["2 cups", "1/2 cup", "4", "1 tsp", "2 tbsp"],
    10, // Number of instructions
    ["mixing-bowl", "ramekins", "blowtorch"],
    [
      "Preheat the oven to 325°F (160°C).",
      "Heat cream in a saucepan over medium heat until just before boiling. Remove from heat.",
      "In a mixing bowl, whisk egg yolks and sugar until pale and creamy.",
      "Slowly add the warm cream to the egg mixture, stirring constantly to combine.",
      "Stir in vanilla extract.",
      "Pour the custard mixture into ramekins and place them in a baking dish.",
      "Fill the dish with hot water until it reaches halfway up the ramekins.",
      "Bake for 40 minutes or until the custards are set but still slightly jiggly in the center.",
      "Cool to room temperature, then refrigerate for at least 2 hours.",
      "Before serving, sprinkle sugar evenly over the custards and caramelize with a blowtorch."
    ],
    true,
    "Dessert",
    "A creamy custard base topped with caramelized sugar.",
    ["Sweet", "Rich", "Classic"]
  ),
  new Meal(
    "2",
    "Banoffee Pie",
    "https://media.istockphoto.com/id/1412705375/photo/banoffee-cake-with-banana-and-caramel-sauce-filling-sprinkled-with-grated-dark-chocolate-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=NOLGjf8EmQIvxUyLsjue88-0UHCHNVlzO5NNaK-0Hbo=",
    30,
    6,
    ["bananas", "graham-cracker-crust", "caramel", "whipped-cream", "chocolate-shavings"],
    ["3", "1 crust", "1 cup", "1 cup", "Optional"],
    6, // Number of instructions
    ["mixing-bowl", "spatula"],
    [
      "Prepare the graham cracker crust if not pre-made and let it set.",
      "Spread a layer of caramel evenly over the crust.",
      "Slice bananas and layer them over the caramel.",
      "Top with whipped cream, spreading it evenly.",
      "Garnish with chocolate shavings if desired.",
      "Chill in the refrigerator for at least 1 hour before serving."
    ],
    false,
    "Dessert",
    "A sweet pie made with bananas, cream, and a caramel filling.",
    ["Sweet", "Quick", "No-Bake"]
  ),
  new Meal(
    "3",
    "Molten Chocolate Tart",
    "https://media.istockphoto.com/id/1134054813/photo/chocolate-tart.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZitoQnIcnAGouLeNKHs6gn9ofEsv239695FQe0SYrYA=",
    45,
    6,
    ["dark-chocolate", "butter", "sugar", "eggs", "flour", "pastry-shells"],
    ["200g", "1/2 cup", "1/2 cup", "3", "1/4 cup", "6 shells"],
    8, // Number of instructions
    ["mixing-bowl", "oven"],
    [
      "Preheat oven to 375°F (190°C).",
      "Melt chocolate and butter together in a heatproof bowl over simmering water or in the microwave. Stir until smooth.",
      "In a separate bowl, whisk eggs and sugar until pale and fluffy.",
      "Gently fold the melted chocolate mixture into the eggs.",
      "Sift in flour and mix until smooth.",
      "Fill pastry shells with the chocolate batter.",
      "Bake for 12-15 minutes or until the edges are set but the center remains molten.",
      "Serve warm with a dusting of powdered sugar or a scoop of ice cream."
    ],
    true,
    "Dessert",
    "A decadent dessert with a molten chocolate center.",
    ["Sweet", "Rich", "Decadent"]
  ),
];
