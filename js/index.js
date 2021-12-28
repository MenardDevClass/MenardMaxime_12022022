let list = new List();

list.hydrate(recipes); // introducing data
list.display(list.all); // displays the list

let ingredientFilter = new FilterByIngredient();
let applianceFilter = new FilterByAppliance();
let ustensilFilter = new FilterByUstensils();

list.addFilter(ingredientFilter); // adds ingredients filter
list.addFilter(applianceFilter); // adds appliance filter
list.addFilter(ustensilFilter); // adds ustensils filter

list.search = new Search();
list.search.listen(); // filter for input search