// Initialize an array to store favorite items
let favorites = [];

// Add event listener for the form submission
$(document).on("submit", "#favoriteForm", function (e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Get the value of the input field
    const favoriteItem = $("#favoriteItem").val();

    // Add the item to the favorites array and update local storage
    if (favoriteItem) {
        favorites.push(favoriteItem);
        localStorage.setItem("favorites", JSON.stringify(favorites));

        // Clear the input field and provide feedback
        $("#favoriteItem").val("");
        alert("Favorite item added successfully!");
    }
});

// Populate the favorites list dynamically on pages that display it
$(document).on("pagebeforeshow", "#favorites, #list", function () {
    // Retrieve favorites from local storage
    favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Populate the list element
    const $list = $(this).find("ul");
    $list.empty(); // Clear any existing items
    if (favorites.length === 0) {
        $list.append("<li>No favorites yet.</li>");
    } else {
        favorites.forEach((item) => {
            $list.append(`<li>${item}</li>`);
        });
    }

    // Refresh the listview to apply jQuery Mobile styles
    $list.listview("refresh");
});
