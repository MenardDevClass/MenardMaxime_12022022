class List
{
    constructor()
    {
        this.all = [];
        this.filtered = [];
        this.filters = [];
        this.searchValue = '';
        this.selected = [];
    }
       //-- Ajoute recettes
       add(recipe)
       {
           this.all.push(recipe)
       }
       

       //-- Ajoute filtres // pour une seule action TODO:
       addFilter(filter) 
    
    build(recipes) // repasse les actions multiples
    //quand la liste se reconstruit TODO:


     //-- Affiche recettes
     display(recipes)
     {
         document.getElementById('recipes').innerHTML = "";
         recipes.forEach(recipe =>
         {
             document.getElementById('recipes').innerHTML += recipe.render();
         }) 
         
     }

      //-- Introduit les données
    hydrate(recipes)
    {
        recipes.forEach((item) => 
        {
            let recipe = new Recipe(item);
            this.all.push(recipe);
        })
        this.filtered = this.all;
    }

    
    
}