class search
{
        constructor(recipes)
        {
            this.searchValue ='';
            this.renderMessage();
        }
//hides message
hideMessage()
{
    document.getElementById('message').style.display = 'none';
    document.getElementById('recipes').style.display = 'flex';
}
   
//listener based on input search

listen()
{
    document.getElementById('searchBar').addEventListener('input', (e) =>
    {
        list.filtered = list.all;
        this.searchValue = e.target.value.toLowercase();

        if(this.searchValue.length>= 3)
        {
            this.hideMessage()
            list.filtered = this.search();
        }

        list.build(list.filtered)

        if(list.filtered.length === 0)
        {
            this.showMessage();
        }
        
    }
}

}