const catalog = [
  {
    id: 1,
    name: "Lingerie Cinza",
    brand: "INSIDER",
    price: 135,
    fileImgName: "Product-1.jpeg",
    feminine: true,
  },
  {
    id: 2,
    name: "Vestido Preto",
    brand: "INSIDER",
    price: 80,
    fileImgName: "Product-2.jpeg",
    feminine: true,
  },
  {
    id: 3,
    name: "Camisa Marrom",
    brand: "INSIDER",
    price: 115,
    fileImgName: "Product-3.jpeg",
    masculine: true,
  },
];

//For Simplificado para mostrar todos os itens da lista (Para cada productCatalog de catalog)
for (const productCatalog of catalog) {
  const productCard = `<div id="card-produto">
    <img src="./assets/img/${productCatalog.fileImgName}" alt="Produto 1 do Heels Store" style="height: 300px;"/>
    <p>${productCatalog.brand}</p>
    <p>${productCatalog.name}</p>
    <p>R$ ${productCatalog.price}</p>
    <button>Adicionar</button>
    </div>`;

  document.getElementById("container-produto").innerHTML += productCard;
}