let list = new List();

FileList.hydrate(recipes);
FileList.display(list.all);

let ingredientFilter = new FilterByIngredient();
let applianceFilter = new FilterByAppliance();
let ustensilFilter = new FilterByUstensils();

list.addFilter(ingredientFilter);
list.addFilter(applianceFilter);
list.addfilter(ustensilFilter);

list.search = new Search();
list.search.listen();