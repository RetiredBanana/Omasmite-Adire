const cartButtons = document.querySelectorAll(".add-to-cart");

cartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const productName = button.dataset.product;

        button.textContent = "Added ✓";
        button.disabled = true;

        setTimeout(() => {
            button.textContent = "Add to Cart";
            button.disabled = false;
        }, 1500);

        alert(productName + " has been added to your cart.");
    });
});