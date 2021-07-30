const cart = document.getElementById("cart");
const cartIcon = document.getElementById("cart-icon");
const menuToggle = document.getElementById("menu-toggle");
const iconMenuToggle = document.getElementById("icon-menu-toggle");
let carVisible = true;
let menuVisible = true;

function openMenu() {
    menuToggle.classList.toggle("open", menuVisible)
    menuVisible = !menuVisible

}

function closeMenu() {
    menuToggle.classList.remove("open");
    menuVisible = !menuVisible
}

function openCart() {
    cartIcon.classList.toggle("select")
    cart.classList.toggle("open", carVisible)
    carVisible = !carVisible
}

function closeCart() {
    cartIcon.classList.remove("select")
    cart.classList.remove("open")
    carVisible = !carVisible
}

cartIcon.addEventListener("click", () => {
    if (!menuVisible) {
        closeMenu()
    }
    openCart()
})

iconMenuToggle.addEventListener("click", () => {
    if (!carVisible) {
        closeCart()
    }
    openMenu()
})