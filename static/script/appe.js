let cart = [];

function addToCart(product, price) {
    cart.push({ name: product, price: price });
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}
const burger = document.querySelector('.burger'); 
 
burger.addEventListener('click', () => { 
  burger.classList.toggle('active'); 
});