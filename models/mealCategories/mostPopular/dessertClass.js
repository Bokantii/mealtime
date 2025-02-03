import Meal from "../../mealsModel";

export const MOST_POPULAR_DESSERTS = [
  new Meal(
    "1",
    "Chocolate Cake",
    "https://media.istockphoto.com/id/1370520449/photo/slice-of-chocolate-cake-with-glaze.webp?a=1&b=1&s=612x612&w=0&k=20&c=xg_o4YRW7gWJdeoNv5PEQrgz5WKrZaM9YOJEAmeSZPA=",
    60,
    8,
    ["flour", "cocoa-powder", "eggs", "butter", "sugar"],
    ["2 cups", "1 cup", "3", "200g", "1.5 cups"],
    5, 
    ["oven", "mixing-bowl", "cake-pan"],
    [
      "Preheat your oven to 350°F (175°C) and grease a cake pan.",
      "In a mixing bowl, combine flour, cocoa powder, and sugar. In another bowl, whisk together melted butter and eggs.",
      "Gradually add the wet ingredients to the dry ingredients, mixing until smooth.",
      "Pour the batter into the prepared cake pan and bake for 40-50 minutes or until a toothpick inserted into the center comes out clean.",
      "Let the cake cool completely before frosting and serving."
    ],
    false,
    "Dessert",
    "Rich, moist chocolate cake perfect for any occasion.",
    ["Sweet", "Chocolate", "Baking"]
  ),
  new Meal(
    "2",
    "Tiramisu",
    "https://media.istockphoto.com/id/1248489319/photo/tiramisu-cake-with-mint.webp?a=1&b=1&s=612x612&w=0&k=20&c=HQw2d5WJmwH0D2Ndrp3Rc9-eWGsyLshWngqX89E__OY=",
    30,
    6,
    ["ladyfingers", "mascarpone", "coffee", "cocoa-powder", "sugar"],
    ["200g", "250g", "1 cup", "2 tbsp", "1/2 cup"],
    4, 
    ["mixing-bowl", "whisk", "serving-dish"],
    [
      "Brew a cup of strong coffee and let it cool. Dip the ladyfingers into the coffee, making sure they are moist but not soggy.",
      "In a mixing bowl, whisk together mascarpone cheese and sugar until smooth.",
      "Layer the coffee-soaked ladyfingers at the bottom of a serving dish, spread a layer of the mascarpone mixture on top, and repeat the layers.",
      "Dust the top with cocoa powder and refrigerate for at least 2 hours before serving."
    ],
    true,
    "Dessert",
    "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone.",
    ["Italian", "Coffee", "No-Bake"]
  ),
  new Meal(
    "3",
    "Apple Pie",
    "https://media.istockphoto.com/id/450752471/photo/homemade-organic-apple-pie-dessert.webp?a=1&b=1&s=612x612&w=0&k=20&c=cjIJEZNVoSriVHRfHvIUk_kxrSE72zup8rmZ3YUy00U=",
    90,
    6,
    ["apples", "flour", "butter", "sugar", "cinnamon"],
    ["5", "2 cups", "200g", "1 cup", "1 tsp"],
    4, 
    ["oven", "rolling-pin", "pie-dish"],
    [
      "Preheat your oven to 375°F (190°C). Peel and slice the apples, then toss them with sugar and cinnamon in a mixing bowl.",
      "Prepare the pie crust by rolling out the dough and fitting it into a pie dish. Add the apple filling and cover with another layer of dough, crimping the edges to seal.",
      "Cut small slits in the top crust to allow steam to escape. Bake in the oven for 45-50 minutes or until the crust is golden brown.",
      "Let the pie cool slightly before slicing and serving."
    ],
    false,
    "Dessert",
    "Traditional apple pie with a flaky crust and cinnamon-spiced apples.",
    ["American", "Comfort Food", "Baking"]
  ),
  new Meal(
    "4",
    "Cheesecake",
    "https://media.istockphoto.com/id/2152360017/photo/strawberry-cheesecake.webp?a=1&b=1&s=612x612&w=0&k=20&c=P_pt225W_iES0FX6PnYYG77fk0Se89u77kAXObV7yzE=",
    70,
    8,
    ["cream-cheese", "sugar", "eggs", "graham-crackers", "butter"],
    ["500g", "1 cup", "3", "1 cup", "100g"],
    4, 
    ["springform-pan", "oven", "mixing-bowl"],
    [
      "Preheat your oven to 325°F (160°C). Crush graham crackers into fine crumbs and mix with melted butter to form the crust.",
      "Press the crust mixture into the bottom of a springform pan and bake for 10 minutes. Let it cool.",
      "In a mixing bowl, beat cream cheese, sugar, and eggs until smooth. Pour the mixture over the crust.",
      "Bake for 50-60 minutes until the center is set. Cool completely, then refrigerate for at least 4 hours before serving."
    ],
    true,
    "Dessert",
    "Creamy cheesecake with a buttery graham cracker crust.",
    ["Sweet", "Baking", "Classic"]
  ),
  new Meal(
    "5",
    "Panna Cotta",
    "https://media.istockphoto.com/id/1494396649/photo/panacotta-with-red-fruit-sauce.webp?a=1&b=1&s=612x612&w=0&k=20&c=y_0PxsWWQ1ZLJtxtKF7HMRdxABJR4n0MEzt9QtIvKAc=",
    20,
    4,
    ["cream", "gelatin", "sugar", "vanilla"],
    ["2 cups", "1 packet", "1/2 cup", "1 tsp"],
    4, 
    ["saucepan", "molds", "spoon"],
    [
      "In a saucepan, heat the cream, sugar, and vanilla over medium heat, stirring occasionally until the sugar dissolves. Do not let it boil.",
      "Dissolve the gelatin in a small amount of cold water and add it to the cream mixture, stirring until fully dissolved.",
      "Pour the mixture into molds and refrigerate for at least 4 hours until set.",
      "Serve chilled, optionally topped with fruit or sauce."
    ],
    true,
    "Dessert",
    "Silky smooth Italian dessert with a creamy texture.",
    ["Italian", "No-Bake", "Elegant"]
  ),
  new Meal(
    "6",
    "Banoffee Pie",
    "https://media.istockphoto.com/id/2172960519/photo/banoffee-pie-on-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=EyAGhQluPCl3GsvZXgnBGBHo7ZE68wo43hyFoidUNN8=",
    25,
    6,
    ["bananas", "caramel", "whipped-cream", "graham-crackers"],
    ["3", "1 cup", "1 cup", "1.5 cups"],
    3, 
    ["mixing-bowl", "spoon", "pie-dish"],
    [
      "Crush the graham crackers into crumbs and mix with melted butter to form the crust. Press into a pie dish and refrigerate for 10 minutes.",
      "Slice the bananas and layer them on the crust. Spread the caramel over the bananas.",
      "Top with whipped cream and refrigerate for at least 1 hour before serving."
    ],
    false,
    "Dessert",
    "Decadent no-bake pie with bananas and caramel.",
    ["Sweet", "No-Bake", "Quick"]
  )
];
