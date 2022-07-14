const menos = document.getElementById('menos');
const mas = document.getElementById('mas');
const cantidad = document.getElementById('cantidad');
const add__to_cart = document.getElementById('add__to_cart');
let getProducts = JSON.parse(localStorage.getItem("products"));

const addCantidad = (action) => {
  if(action === 'mas'){
    if(cantidad.value <= 8){
      cantidad.value = Number(cantidad.value) + 1;
    }
    
  }else{
    if(cantidad.value > 1){
      cantidad.value = Number(cantidad.value) - 1;
    }
  }
}

menos.addEventListener('click', () => {
  addCantidad('menos');
})

mas.addEventListener('click', () => {
  addCantidad('mas');
})

add__to_cart.addEventListener('click', () => {
  const id = 1;
  let product = getProducts.find(product => Number(product.id) == id);
  const quantity = Number(cantidad.value);
  const price = Number(product.price);
  const name = product.name;
  const photo_url = product.photo_url;
  
  addToCart(photo_url, name,price, quantity)

})

var productosAdmin = document.getElementById('products__relacionados')

getProducts.map((product, i) => {
  if(i < 6){
    const $items = document.createElement('div');
    $items.classList.add('items');
    $items.setAttribute('id', 'item-' + product.id);
    const $html = `
      <div class="card scroll-content fadeTop" id="item-${product.id}">
      ${(product.discount) ? '<span class="oferta d-flex align-items-center"><span class="material-icons-two-tone mr-1">local_offer</span>  Off -'+ product.discount + '% </span>' : ''}
      
      <img src="${product.photo_url}" alt="photo" style="width:100%">
      <div class="card-item-info">
        <a class="detalles" href="details.html">${product.name}</a>
        <p> 
          ${(product.discount) ? '<span class="price-antes">$' + (parseFloat(product.price) + parseFloat(product.price*product.discount/100)).toFixed(2) + '</span> &nbsp;' : '' }
          $ ${product.price}</p>
        
        <div class="actions w-100">
          <button class="btn__add--cart btn btn-light d-flex align-items-center justify-content-center w-100"
          onclick="addToCart('${product.photo_url}', '${product.name}', '${product.price}')">
            <span class="material-icons-two-tone">
            add_shopping_cart
            </span>
          </button>
        </div>
      </div>
    </div>

              `
    $items.innerHTML = $html;
    if(productosAdmin){
      productosAdmin.appendChild($items);
    }
  }
}).join('')