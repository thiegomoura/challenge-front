const cart = document.getElementById("cart");
const cartIcon = document.getElementById("cart-icon");
const menuToggle = document.getElementById("menu-toggle");
const iconMenuToggle = document.getElementById("icon-menu-toggle");
let carVisible = true;
let menuVisible = true;

function openMenu() {
    cartIcon.classList.toggle("select")
    cart.classList.toggle("open", carVisible)
    carVisible = !carVisible
}

function closeMenu() {
    cartIcon.classList.remove("select")
    cart.classList.remove("open")
    carVisible = !carVisible
}

function openCart() {
    menuToggle.classList.toggle("open", menuVisible)
    menuVisible = !menuVisible
}

function closeCart() {
    menuToggle.classList.remove("open");
    menuVisible = !menuVisible
}

cartIcon.addEventListener("click", () => {
    if (!menuVisible) {
        closeCart()
    }
    openCart()
})

iconMenuToggle.addEventListener("click", () => {
    if (!carVisible) {
        closeMenu
    }
    openMenu()
})