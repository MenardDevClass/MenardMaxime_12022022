class Search 
{
    constructor(recipes)
    {
        this.searchValue = '';
        this.renderMessage();
    }


    //-- Message disparait
    hideMessage()
    {
        document.getElementById('message').style.display = 'none';
        document.getElementById('recipes').style.display = 'flex';
    }

    //-- Listener sur la recherche Input
    listen()
    {
        document.getElementById('searchBar').addEventListener('input', (e) => {
            list.filtered = list.all;
        
            this.searchValue = e.target.value.toLowerCase();

            if(this.searchValue.length >= 3) 
            {
                this.hideMessage()
                list.filtered = this.search();
            } 

            list.build(list.filtered)

            if(list.filtered.length === 0)
            {
                this.showMessage();
            }

            if(this.searchValue == '')
            {
                list.filtered = list.all;
                this.hideMessage();
            }
        })
    }

    //-- Construction du Message Html
    renderMessage()
    {
        document.getElementById('message').innerHTML +=
        `
            <h2>Aucune recette ne correspond à votre critère...</h2>
            <p>Vous pouvez chercher d'autres mots-clés comme «<span>tarte aux pommes</span>», «<span>poisson</span>», <br />ou découvrez de nouvelles recettes à l'aide de nos
                <span>filtres de recherche</span>.
            </p>
            <img src="img/sad.jpg" alt="Enfant triste à table qui ne veut pas manger ses légumes.">
        `
    }

    //-- Paramètre de la recherche par terme
    search()
    {
        console.time("monTimer2"); // timer début performance

        let items = [];
        list.filtered.forEach(recipe => {

            let hasBeenAdded = false;

            recipe.terms.forEach(term =>
            {
                if(term.indexOf(this.searchValue) > -1)
                {
                    hasBeenAdded = true;
                }
            });

            if(hasBeenAdded)
            {
                items.push(recipe);
            }
        });
        console.timeEnd("monTimer2"); // timer fin  performance
        return items; 
    }

    //-- Message s'affiche
    showMessage()
    {
        document.getElementById('message').style.display = 'flex';
        document.getElementById('recipes').style.display = 'none';
    }
}