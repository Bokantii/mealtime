class Meal {
  constructor(
    id,
    categoryIds,
    title,
    imageUrl,
    duration,
    numOfServings,
    ingredientsId,
    ingredientQtyId,
    cookware,
    instructions,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
    isPro,
    mealCategory,
    description, 
    tags 
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.numOfServings = numOfServings;
    this.ingredientsId = ingredientsId;
    this.ingredientQtyId = ingredientQtyId;
    this.cookware = cookware;
    this.instructions = instructions;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
    this.isPro = isPro;
    this.mealCategory = mealCategory;
    this.description = description; // Short description for UI display
    this.tags = tags; // Array of tags for filtering
  }
}


export default Meal;


