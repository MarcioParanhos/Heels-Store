import { catalog } from "./catalog";

const idProductCartQty = {};

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

//deleta o produto caso o contador seja 0
function removeToCart(idProduct) {
  delete idProductCartQty[idProduct];
  renderProductsCart(idProduct);
}

//função que adiciona +1 no produto caso ele ja exista no carrinho
function addQtyProduct(idProduct) {
  idProductCartQty[idProduct]++;
  actualizeInfoQty(idProduct);
}

//função que aremove -1 no produto caso ele ja exista no carrinho
function removeQtyProduct(idProduct) {
  if (idProductCartQty[idProduct] === 1) {
    removeToCart(idProduct);
    return;
  }
  idProductCartQty[idProduct]--;
  actualizeInfoQty(idProduct);
}
//Atualiza a quantidade do produto ja inserido no carrinho
function actualizeInfoQty(idProduct) {
  document.getElementById(`qty-${idProduct}`).innerText =
    idProductCartQty[idProduct];
}

//função que e complementar do html que é chamdo na função addToCart
function createProductToCart(idProduct) {
  const product = catalog.find((p) => p.id === idProduct);
  const containerProductcart = document.getElementById("products-cart");

  //cria um article (tag HTML) com suas classes
  const elementArticle = document.createElement("article");
  const articleClasses = [
    "flex",
    "bg-slate-200",
    "rounded-lg",
    "p-1",
    "relative",
  ];

  for (const articleClass of articleClasses) {
    elementArticle.classList.add(articleClass);
  }

  const cardProductCart = `<button id="delete-product-${product.id}" class="absolute top-0 right-2">
      <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i>
    </button>
    <img class="h-24 rounded-lg" src="./assets/img/${product.fileImgName}" alt="Carrinho: ${product.name}">
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">${product.name}</p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">R$ ${product.price}</p>
    </div>
    <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
      <button id="remove-product-${product.id}">-</button>
      <p id="qty-${product.id}" class="ml-2">${idProductCartQty[product.id]}</P>
      <button id="add-product-${product.id}" class="ml-2">+</button>
    </div>`;

  elementArticle.innerHTML = cardProductCart;
  containerProductcart.appendChild(elementArticle);

  //Se clicar no botão de + adiciona mais um
  document
    .getElementById(`remove-product-${product.id}`)
    .addEventListener("click", () => removeQtyProduct(product.id));

  //Se clicar no botão de - diminui mais um
  document
    .getElementById(`add-product-${product.id}`)
    .addEventListener("click", () => addQtyProduct(product.id));

  // Se clicar no botão de X remove o produto
  document
    .getElementById(`delete-product-${product.id}`)
    .addEventListener("click", () => removeToCart(product.id));
}

//renderiza os produtos do carrinho apos excluir o produto
function renderProductsCart() {
  const containerProductcart = document.getElementById("products-cart");
  containerProductcart.innerHTML = "";
  for (const idProduct in idProductCartQty) {
    createProductToCart(idProduct);
  }
}

//Função de adicionar produto ao carrinho
export function addToCart(idProduct) {
  //verifica se ja existe o carrinho o produto
  if (idProduct in idProductCartQty) {
    addQtyProduct(idProduct);
    return;
  }
  idProductCartQty[idProduct] = 1;
  createProductToCart(idProduct);
}
