document.addEventListener("DOMContentLoaded", function () { // /Waits for page to load
  // Navigation bar toggle
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (menuButton && nav) {
    menuButton.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Contact form
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  if (form && successMessage) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent page reload
      form.style.display = "none";
      successMessage.style.display = "block";
    });
  }
});

// Shopping cart
let cart = [];

function addToCart(name, price) {
  const item = cart.find(product => product.name === name);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCart();
}

function removeFromCart(name) {
  cart = cart.filter(product => product.name !== name);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(product => {
    const li = document.createElement('li');
    li.textContent = `${product.name} - €${product.price} x ${product.quantity}`;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => removeFromCart(product.name);
    li.appendChild(removeButton);
    cartItems.appendChild(li);
    total += product.price * product.quantity;
  });
  cartTotal.textContent = total;

  updateCheckoutButton();
}

function goToCheckout() {
  window.location.href = "checkout.html";
}

// Enable checkout button when cart has items 
function updateCheckoutButton() {
  const cartItems = document.getElementById("cart-items");
  const checkoutBtn = document.getElementById("checkoutBtn");

  checkoutBtn.disabled = cartItems.children.length === 0;
}

// Automatic image carousel 
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("automaticSlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) { slideIndex = 1 }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}