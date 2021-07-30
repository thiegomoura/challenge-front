const cart = document.getElementById("cart");
const cartIcon = document.getElementById("cart-icon");
const menuToggle = document.getElementById("menu-toggle");
const iconMenuToggle = document.getElementById("icon-menu-toggle");
let carVisible = true;
let menuVisible = true;

cartIcon.addEventListener("click", () => {
    cartIcon?.classList.toggle("select");
    cart?.classList.toggle("open", carVisible)
    carVisible = !carVisible
})

iconMenuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open", menuVisible)
    menuVisible = !menuVisible
})
