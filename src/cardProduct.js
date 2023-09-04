// Cria os produtos na tela
import { catalog } from "./catalog";
import { addToCart } from "./menuCart";

export function renderCatalog() {
  //For Simplificado para mostrar todos os itens da lista (Para cada productCatalog de catalog)
  for (const productCatalog of catalog) {
    //Monta o HTML com os dados do banco de dados
    const productCard = `<div class='overflow-hidden w-68 my-2 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-500 rounded-lg group' id="card-produto-${productCatalog.id}">
      <img src="./assets/img/${productCatalog.fileImgName}" alt="${productCatalog.name} do Heels Store" class=" rounded-sm group-hover:scale-110 duration-300 my-4" style="height: 300px;"/>
      <p class='text-sm'>${productCatalog.brand}</p>
      <p class='text-sm'>${productCatalog.name}</p>
      <p>R$ ${productCatalog.price}</p>
      <button id='add-${productCatalog.id}' class="bg-slate-950 hover:bg-orange-600 text-slate-200 p-1"><i class="fa-solid fa-cart-plus"></i></button>
      </div>`;
    //Adiciona o HTML no container selecionado pelo ID
    document.getElementById("container-produto").innerHTML += productCard;
  }
  for (const productCatalog of catalog) {
    document
      .getElementById(`add-${productCatalog.id}`)
      .addEventListener("click", () => addToCart(productCatalog.id));
  }
}
