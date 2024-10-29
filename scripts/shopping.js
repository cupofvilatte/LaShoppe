let cart = [];


// local storage implementation
function loadCart() {
    const savedCart = localStorage.getItem("cart");
    // instance of conditional branching
    if (savedCart) {
        cart = JSON.parse(savedCart);
        displayCart();
    }
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}


function fetchAndDisplay() {
    fetch('./data/listings.json')
        .then(response => response.json())
        .then(data => {
            displayClothingItems(data.clothingItems);
        })
        .catch(error => console.error("Error fetching JSON data:", error));
}

// instance of DOM interaction
function displayClothingItems(items) {
    const section = document.querySelector("section");
    section.innerHTML = "";

    items.forEach(item => {
        const itemDiv = document.createElement("div");

        // instance of a template literal
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

// instance of DOM interaction
function addToCart(item) {
    // instance of array method
    cart.push(item);
    saveCart();

    const cartMessage = document.getElementById("cart-message");
    cartMessage.innerText = `Item has been added to cart!`;
    cartMessage.style.display = "block";

    setTimeout(() => {
        cartMessage.style.display = "none";
    }, 2000);

    displayCart();
}

function displayCart() {
    const cartItemsList = document.getElementById("cart-items");
    cartItemsList.innerHTML = "";

    cart.forEach(cartItem => {
        const li = document.createElement("li");
        li.textContent = `${cartItem.name} - $${cartItem.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
    });
}

function toggleCartModal() {
    const cartModal = document.getElementById("cart-modal");
    cartModal.style.display = cartModal.style.display === "block" ? "none" : "block";
}

// instances of DOM interaction

document.getElementById("close-modal").addEventListener("click", toggleCartModal);

document.getElementById("cart-button").addEventListener("click", () => {
    displayCart();
    toggleCartModal();
});

window.addEventListener("click", (event) => {
    const cartModal = document.getElementById("cart-modal");
    if (event.target === cartModal) {
        cartModal.style.display = "none";
    }
});

loadCart();

// Call the function to display the shopping items
fetchAndDisplay();