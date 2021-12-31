class FilterByIngredient extends Filters
{
    constructor()
    {
        super('ingredients');
    }
    
    //-- Récupère la collecte de données ingredients
    collect(recipes)
    {
        let list = new Set();
        recipes.forEach(recipe => {
            recipe.ingredients.forEach(item => {
                list.add(item.ingredient.toLowerCase());
            })
        });
        return list;
    }
