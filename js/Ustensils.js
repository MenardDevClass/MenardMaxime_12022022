class FilterByUstensils extends Filters
{
    constructor()
    {
        super('ustensils');
    }

    //-- Récupère la collecte de données ustensils
    collect(recipes)
    {
        let list = new Set();
        recipes.forEach(recipe => 
        {
            recipe.ustensils.forEach(ust => {
                list.add(ust);
            })
        });
        return list;

    }