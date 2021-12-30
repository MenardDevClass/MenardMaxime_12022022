class Filters
{
    constructor(type)
    {
        this.all = new Set();
        this.filtered = new Set();
        this.selected = new Set();
        this.searchValue = '';
        this.type = type;
        this.renderDropdown();
    }

    //-- construit le HTML 
    build() 
    {
        this.render();
        this.listenForSelection(); 
        this.listenForUnselect();
    }

    //-- Dropdown: ouverture
    closeDropdown()
    {
        document.querySelector('body').addEventListener('click', (e) => {
            let parent = e.target.closest(`.dropdown-wrapper[data-type="${this.type}"]`)
            if (!parent)
            {
                document.getElementById(`dropdown-${this.type}`).style.width = "8rem";             
                document.getElementById(`menu-${this.type}`).style.display = "none"; 
            }

            this.searchValue = '';
            document.getElementById(`${this.type}`).value = '';
            this.filtered = this.all;
            let tags = document.querySelectorAll(`.list-${this.type}`);

            tags.forEach((tag) => {
                tag.style.display = "block"; 
            })
            document.getElementById(`${this.type}`).focus();
        });
    } 


    //--TAGS : affiche tags sélectionnés
    displayTags()
    {
        let html = '';
        this.selected.forEach(tag => 
        {
            html += `<span class="selected-tag-${this.type} tag" data-filter="${tag}">${tag}
                        <i class="far fa-times-circle closed-${this.type}" role="button"></i>
                    </span>
                    `;
        })
        document.getElementById(`tag-${this.type}`).innerHTML = html;
    }

    
    //-- Dropdown Input: Recherche écrite
    filterByInput()
    {
        let tags = document.querySelectorAll(`.list-${this.type}`);
        tags.forEach((tag) => 
        {
            let name = tag.getAttribute("data-filter");
            if (!name.toLowerCase().includes(this.searchValue.toLowerCase())) {
                tag.style.display = "none";
            
            } else {
                tag.style.display = "block";
            }
        }) 
    }


    //-- Dropdown Input: Recherche écrite
    listenForInputSearch() 
    {
        document.getElementById(`${this.type}`).addEventListener("input", (e) => {
            this.searchValue = e.target.value;
            this.filterByInput();
        })
    }
    

    //-- Listener Tags : selection du tag  ///
    listenForSelection()
    {
        document.querySelectorAll(`.list-${this.type}`).forEach(tag =>
        {   
            tag.addEventListener('click', (e) =>
            {
                let tag = e.target.getAttribute('data-filter');
                this.selected.add(tag);
                this.displayTags();
                list.filtered = this.filter(list.filtered);
                list.build(list.filtered); 
                
            })
        })
    }
// TODO: FAIRE LE  Listener Tags : fermer le tag selectionné par la croix,  Dropdown: ouverture/fermeture,
 //Dropdown: fermeture, Affiche HTML : liste des datas dans le dropdown, Affiche HTML : les dropdowns

 