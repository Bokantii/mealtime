

class Meal {
  constructor(
    id,
    title,
    imgUrl,
    duration,
    numOfServings,
    ingredientsId,
    ingredientQtyId,
    cookware,
    instructions,
    isPro,
    mealCategory,
    description,
    tags
  ) {
    this.id = id;
    this.title = title;
    this.imgUrl = imgUrl;
    this.duration = duration;
    this.numOfServings = numOfServings;
    this.ingredientsId = ingredientsId;
    this.ingredientQtyId = ingredientQtyId;
    this.cookware = cookware;
    this.instructions = instructions;
    this.isPro = isPro;
    this.mealCategory = mealCategory;
    this.description = description; // Short description for UI display
    this.tags = tags; // Array of tags for filtering
  }
}

export default Meal;
