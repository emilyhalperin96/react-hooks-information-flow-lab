import React from "react";

function Filter({selectedCategory, setSelectedCategory, handleCategoryChange}) {

   //const [selectedCategory, setSelectedCategory] = useState("All");
    // function handleCategoryChange(event) {
    //     setSelectedCategory(event.target.value);
    //   }
    
    //   const itemsToDisplay = items.filter((item) => {
    //     if (selectedCategory === "All") return true;
    
    //     return item.category === selectedCategory;
    //   });
    return(
    <div className="Filter">
        <select 
        name="filter" 
        onChange={handleCategoryChange}>
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
        </select>
    </div>
    )
}

export default Filter;

