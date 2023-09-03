import { catalog } from "../catalog";

// Funcionalidades de mostrar e ocultar o carrinho
function openCart() {
  document.getElementById("cart").classList.add("right-[0px]");
  document.getElementById("cart").classList.remove("right-[-360px]");
}

function closeCart() {
  document.getElementById("cart").classList.remove("right-[0px]");
  document.getElementById("cart").classList.add("right-[-360px]");
}

export function initCart() {
  const buttonCloseCart = document.getElementById("close-cart");
  const buttonOpenCart = document.getElementById("open-cart");
  buttonCloseCart.addEventListener("click", closeCart);
  buttonOpenCart.addEventListener("click", openCart);
}

export function addToCart(idProduct) {
  const product = catalog.find((p) => p.id === idProduct)
  const containerProductcart = document.getElementById("products-cart");
  const cardProductCart = `<article class="flex bg-slate-200 rounded-lg p-1 relative">
  <button id="close-cart" class="absolute top-0 right-2">
    <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i>
  </button>
  <img class="h-24 rounded-lg" src="./assets/img/${product.fileImgName}" alt="Carrinho: ${product.name}">
  <div class="py-2">
    <p class="text-slate-900 text-sm">${product.name}</p>
    <p class="text-slate-400 text-xs">Tamanho: M</p>
    <p class="text-green-700 text-lg">R$ ${product.price}</p>
  </div>
</article>`;

  containerProductcart.innerHTML += cardProductCart;
}
