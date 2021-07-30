const cart = document.getElementById("cart");
const cartIcon = document.getElementById("cart-icon")
let isVisible = true;


cartIcon.addEventListener("click", () => {
    cartIcon?.classList.toggle("select");
    cart?.classList.toggle("open", isVisible)
    isVisible = !isVisible;
})