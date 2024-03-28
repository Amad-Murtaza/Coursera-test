<script>
function loadRandomCategoryMenu() {
    // Array of possible category short_names
    var categories = ["LUNCH", "DINNER", "SUSHI", "DESSERTS", "DRINKS"]; // Add more categories as needed

    // Generate a random index within the range of categories array length
    var randomIndex = Math.floor(Math.random() * categories.length);

    // Get the randomly selected category short_name
    var randomCategoryShortName = categories[randomIndex];

    // Call loadMenuItems with the randomly selected category short_name
    $dc.loadMenuItems(randomCategoryShortName);
}
</script>
