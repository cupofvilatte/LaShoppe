let cart = [];

import { fetchAndDisplay, displayClothingItems } from './displayListing.mjs';

function addToCart(item) {
    cart.push(item);

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

// Call the function to display the shopping items
fetchAndDisplay();