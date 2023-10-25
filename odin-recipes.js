// Get the list items and recipe details element
const recipeListItems = document.querySelectorAll("#recipeList li");
const recipeDetails = document.getElementById("recipeDetails");

// Recipe data for display
const recipes = {
    shrimp: {
        name: "Creamy Shrimp",
        details: "A delicious creamy shrimp recipe..."
    },
    roast: {
        name: "Classic Pot Roast",
        details: "A hearty classic pot roast..."
    },
    cookie: {
        name: "Oatmeal Raisin Cookies",
        details: "Homemade oatmeal raisin cookies..."
    }
};

// Function to display recipe details
function displayRecipeDetails(recipe) {
    const recipeData = recipes[recipe];
    if (recipeData) {
        recipeDetails.innerHTML = `
            <h2>${recipeData.name}</h2>
            <p>${recipeData.details}</p>
        `;
    }
}

// Add click event listeners to list items
recipeListItems.forEach((item) => {
    item.addEventListener("click", () => {
        // Remove active class from all list items
        recipeListItems.forEach((li) => li.classList.remove("active"));

        // Add active class to the clicked item
        item.classList.add("active");

        // Get the recipe class (e.g., 'shrimp', 'roast', 'cookie')
        const recipe = item.classList[0];
        
        // Display recipe details
        displayRecipeDetails(recipe);
    });
});
