var categories = [
  {
    id: 1,
    name: "Star Wars"
  },
  {
    id: 2,
    name: "Dragon Ball Z"
  },
  {
    id: 3,
    name: "Varios"
  }
]

var data = [
  {
    id:1,
    name: "Funko Pop Deluxe 365",
    price: "40.00",
    photo_url: "img/star-wars/2098445156.jpg",
    category: 1,
    discount: false,
    desProduct: ""
  },{
    id:2,
    name: "Keychain Darth Vader",
    price: "10.00",
    photo_url: "img/star-wars/2076510497.jpg",
    category: 1,
    discount: false,
    desProduct: ""
  },{
    id:3,
    name: "Keychain Boba Fett",
    price: "10.00",
    photo_url: "img/star-wars/2076510547.jpg",
    category: 1,
    discount: 18,
    desProduct: ""
  },{
    id:4,
    name: "Ahsoka - The Clone Wars",
    price: "21.00",
    photo_url: "img/star-wars/2442950044.jpg",
    category: 1,
    discount: false,
    desProduct: ""
  },{
    id:5,
    name: "Hunter - The Bad Batch",
    price: "21.00",
    photo_url: "img/star-wars/2784159264.jpg",
    category: 1,
    discount: false,
    desProduct: ""
  },{
    id:6,
    name: "Omega - Special Edition - The Bad Batch",
    price: "21.00",
      photo_url: "img/star-wars/2830622480.jpg",
    category: 1,
    discount: false,
    desProduct: ""
  },{
    id:7,
    name: "Dodoria - Convention Limited Edition",
    price: "25.00",
    photo_url: "img/dragon-ball/3111039438.jpg",
    category: 2,
    discount: false,
    desProduct: ""
  },{
    id:8,
    name: "Keychain Goku Kamehameha - Special Edition",
    price: "15.00",
    photo_url: "img/dragon-ball/2842396523.jpg",
    category: 2,
    discount: false,
    desProduct: ""
  },{
    id:9,
    name: "Goku SSJ - GITD - Entertainment Earth Exclusive",
    price: "18.00",
    photo_url: "img/dragon-ball/1630681167.jpg",
    category: 2,
    discount: false,
    desProduct: ""
  },{
    id:10,
    name: "Goku Super Saiyan 2 - Previews Exclusive",
    price: "18.00",
    photo_url: "img/dragon-ball/2996484704.jpg",
    category: 2,
    discount: 10,
    desProduct: ""
  },{
    id:11,
    name: "Vegito",
    price: "18.00",
    photo_url: "img/dragon-ball/3076049830.jpg",
    category: 2,
    discount: false,
    desProduct: ""
  },{
    id:12,
    name: "child Vegeta",
    price: "18.00",
    photo_url: "img/dragon-ball/2848186459.jpg",
    category: 2,
    discount: 20,
    desProduct: ""
  },{
    id:13,
    name: "Scarlet Witch - Wandavision",
    price: "18.00",
    photo_url: "img/diversos/2284214116.jpg",
    category: 3,
    discount: 15,
    desProduct: ""
  },{
    id:14,
    name: "Halloween Vision - Wandavision",
    price: "18.00",
    photo_url: "img/diversos/2445028140.jpg",
    category: 3,
    discount: 10,
    desProduct: ""
  },{
    id:15,
    name: "Keychain Pennywise w/beaver hat - It Chapter 2",
    price: "18.00",
    photo_url: "img/diversos/1632324589.jpg",
    category: 3,
    discount: false,
    desProduct: ""
  },{
    id:16,
    name: "Superman Black Suit - Zack Snyder Justice League",
    price: "18.00",
    photo_url: "img/diversos/2735267648.jpg",
    category: 3,
    discount: false,
    desProduct: ""
  },{
    id:17,
    name: "Batman - The Batman",
    price: "18.00",
    photo_url: "img/diversos/3061813140.jpg",
    category: 3,
    discount: false,
    desProduct: ""
  },{
    id:18,
    name: "Sub-Zero - GITD - Special Edition",
    price: "18.00",
    photo_url: "img/diversos/2784255014.jpg",
    category: 3,
    discount: false,
    desProduct: ""
  },{
    id:19,
    name: "Aang with Momo",
    price: "18.00",
    photo_url: "img/diversos/2108261094.jpg",
    category: 3,
    discount: false,
    desProduct: ""
  },{
    id:20,
    name: "Aang all elements",
    price: "18.00",
    photo_url: "img/diversos/2925678436.jpg",
    category: 3,
    discount: 5,
    desProduct: ""
  },{
    id:21,
    name: "Appa",
    price: "18.00",
    photo_url: "img/diversos/1552804939.jpg",
    category: 3,
    discount: false,
    desProduct: ""
  },{
    id:22,
    name: "She-Ra - GITD - Specialty Series",
    price: "18.00",
    photo_url: "img/diversos/2079559379.jpg",
    category: 3,
    discount: false,
    desProduct: ""
  },{
    id:23,
    name: "Brite Bomber",
    price: "18.00",
    photo_url: "img/diversos/1630624284.png",
    category: 3,
    discount: false,
    desProduct: ""
  },{
    id:24,
    name: "Zuko",
    price: "18.00",
    photo_url: "img/diversos/1552840153.jpg",
    category: 3,
    discount: 20,
    desProduct: ""
  }
];

// Guardamos en el localStorage las categorias y los productos en caso de que no existan
if(localStorage.getItem("categories") === null){
  localStorage.setItem("categories", JSON.stringify(categories));
}
if(localStorage.getItem("products") === null){
  localStorage.setItem("products", JSON.stringify(data));
}

// Obtebemos las categorias y productos del localStorage y los mostramos en el HTML
const getCategories = JSON.parse(localStorage.getItem("categories"));
const getProducts = JSON.parse(localStorage.getItem("products"));

// mostramos las categorias con cada producto en el HTML
var productos = document.getElementById('productos')
getCategories.map(cat => {
  const $items = document.createElement('div');
  $items.classList.add('items-productos');
  const $html = `
    <div class="item-producto d-flex justify-content-between align-items-center">
      <h2 class="category-title">${cat.name}</h2>
      <a href="javascript:">Ver todos</a>
    </div>
    <div class="items d-grid">
      ${ getProducts.map(product => {
        if(parseInt(product.category) === cat.id){
          return `
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
        }}).join('') }
    </div>
  `;

  $items.innerHTML = $html;
  if(productos){
    productos.appendChild($items);
  }
})

var productosAdmin = document.getElementById('productos-admin')

getProducts.map((product, i) => {
    const $items = document.createElement('div');
    $items.classList.add('items');
    $items.setAttribute('id', 'item-' + product.id);
    const $html = `
              <div class="card admin ${i >11 ? 'scroll-content fadeTop': ''}">
                <div class="card__header">
                  <span class="material-icons" role="button" tabindex="1"
                  onclick="edit(${product.id})">
                    edit
                  </span>
                  <span class="material-icons" role="button" tabindex="1"
                  onclick="deleteProduct(${product.id})">
                    delete
                  </span>
                </div>
                <img src="${product.photo_url}" alt="photo" style="width:100%">
                <div class="card-item-info">
                  <h4>${product.name}</h4>
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
  if(productosAdmin){
    productosAdmin.appendChild($items);
  }
}).join('')

// Buscar productos
let search = document.getElementById('search-producto');
let btn__buscar = document.getElementById('btn__buscar');
let btn__limpiar = document.getElementById('btn__limpiar');

const filtar = () => {
  btn__limpiar.style.opacity = '1';
  const text = search.value.toLowerCase();

  for(let product of getProducts){
    
    const $item = document.getElementById('item-' + product.id);

    if(product.name.toLowerCase().includes(text)){
      $item.style.display = 'block';
    }else{
      $item.style.display = 'none';
    }

  }
}


btn__buscar.addEventListener('click', filtar);
btn__limpiar.addEventListener('click', () => {
  search.value = '';
  filtar();
  btn__limpiar.style.opacity = '0';
})

// edit product
const edit = (id) => {
  location.href = 'add.html?id=' + id;
}