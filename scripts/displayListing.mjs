// fetchAndDisplay.js
export function fetchAndDisplay() {
    fetch('./data/listings.json')
        .then(response => response.json())
        .then(data => {
            displayClothingItems(data.clothingItems);
        })
        .catch(error => console.error("Error fetching JSON data:", error));
}

export function displayClothingItems(items) {
    const section = document.querySelector("section");
    section.innerHTML = "";

    items.forEach(item => {
        const itemDiv = document.createElement("div");

        itemDiv.innerHTML = `
            <h2>${item.name}</h2>
            <img loading="lazy" src="${item.image}" alt="${item.name} photo">
            <p>$${item.price} USD</p>
            <p>${item.description}</p>
        `;

        itemDiv.addEventListener("click", () => addToCart(item));

        // Append the item to the section
        section.appendChild(itemDiv);
    });
}
