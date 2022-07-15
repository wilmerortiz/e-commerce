import { productsServices } from '../services/products.service.js';
// Obtenemos los valores de la url
let valores = window.location.search;
//Creamos la instancia URLSearchParams para acceder a los valores de la url
let urlParams = new URLSearchParams(valores);

const createCard = (categories, products) => {
  var productos = document.getElementById('productos')
  categories.map(cat => {
    const $items = document.createElement('div');
    $items.classList.add('items-productos');
    const $html = `
      <div class="item-producto d-flex justify-content-between align-items-center">
        <h2 class="category-title">${cat.name}</h2>
        <a href="javascript:">Ver todos</a>
      </div>
      <div class="items d-grid">
        ${ products.map(product => {
          if(parseInt(product.category) === cat.id){
            return `
                <div class="card scroll-content fadeTop" id="item-${product.id}">
                  ${(product.discount) ? '<span class="oferta d-flex align-items-center"><span class="material-icons-two-tone mr-1">local_offer</span>  Off -'+ product.discount + '% </span>' : ''}
                  
                  <img src="${product.photo_url}" alt="photo" style="width:100%">
                  <div class="card-item-info">
                    <a class="detalles" href="details.html?id=${product.id}">${product.name}</a>
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
          }}).join('') }
      </div>
    `;

    $items.innerHTML = $html;
    if(productos){
      productos.appendChild($items);
    }
  })
}

const createCardAdmin = (products) => {
  var productosAdmin = document.getElementById('productos-admin')
  products.map((product, i) => {
    const $items = document.createElement('div');
    $items.classList.add('items');
    $items.setAttribute('id', 'item-' + product.id);
    const $html = `
        <div class="card admin ${i >11 ? 'scroll-content fadeTop': ''}">
          <div class="card__header">
            <span class="material-icons" role="button" tabindex="1"
            data-edit>
              edit
            </span>
            <span class="material-icons" role="button" tabindex="1"
            data-delete>
              delete
            </span>
          </div>
          <img src="${product.photo_url}" alt="photo" style="width:100%">
          <div class="card-item-info">
            <a class="detalles" href="details.html?id=${product.id}">${product.name}</a>
            <p>$ ${product.price}</p>
            
            <div class="actions d-flex align-items-center justify-content-between" style="display: none">
              <button class="btn btn-light d-flex align-items-center justify-content-center mr-2">
                <span class="material-icons-two-tone">
                  edit
                </span>
              </button>
              <button class="btn btn-light d-flex align-items-center justify-content-center">
                <span class="material-icons-two-tone">
                  delete
                </span>
              </button>
            </div>
          </div>
        </div>
      `
    $items.innerHTML = $html;
    $items.querySelector('[data-edit]').addEventListener('click', () => {
      editar(product.id);
    })

    $items.querySelector('[data-delete]').addEventListener('click', () => {
      eliminar(product.id);
    })

    if(productosAdmin){
      productosAdmin.appendChild($items);
    }
  }).join('')
}

productsServices.getCategories().then((categories) => {
  productsServices.getProducts().then((products) => {
    createCard(categories, products);
  }).catch((error) => {
    console.log(`Ocurrio un error al obtener los productos: ${error}`);
  })
}).catch(err => {
  console.log(`Ocurrio un error al obtener las categorias: ${err}`);
})

productsServices.getProducts().then((products) => {
  createCardAdmin(products);
}).catch((error) => {
  console.log(`Ocurrio un error al obtener los productos: ${error}`);
})

 let editar = (id) => {
  location.href = 'add.html?id=' + id;
}

const eliminar = (id) => {
  productsServices.deleteProduct(id)
    .then(() => {
      notification('Producto eliminado correctamente', 'success');

      setTimeout(() => {
        location.reload();
      }, 1000);
    })
    .catch((error) => {
      notification('Ocurrio un error al eliminar el producto', 'error');
    })
}

// Buscar productos
let search = document.getElementById('search-producto');
let btn__buscar = document.getElementById('btn__buscar');
let btn__limpiar = document.getElementById('btn__limpiar');

const filtar = () => {
  btn__limpiar.style.opacity = '1';
  const text = search.value.toLowerCase();

  productsServices.getProducts() // Obtenemos los productos
    .then((products) => {
      products.map((product) => {
        let item = document.getElementById('item-' + product.id);
        if(product.name.toLowerCase().includes(text)){
          item.style.display = 'block';
        }else{
          item.style.display = 'none';
        }
      })
    }).catch((error) => {
      console.log(`Ocurrio un error al obtener los productos: ${error}`);
    })
}

btn__buscar.addEventListener('click', filtar);
btn__limpiar.addEventListener('click', () => {
  search.value = '';
  filtar();
  btn__limpiar.style.opacity = '0';
})
