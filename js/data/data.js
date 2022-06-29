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
    category: 1
  },{
    id:2,
    name: "Keychain Darth Vader",
    price: "10.00",
    photo_url: "img/star-wars/2076510497.jpg",
    category: 1
  },{
    id:3,
    name: "Keychain Boba Fett",
    price: "10.00",
    photo_url: "img/star-wars/2076510547.jpg",
    category: 1
  },{
    id:4,
    name: "Ahsoka - The Clone Wars",
    price: "21.00",
    photo_url: "img/star-wars/2442950044.jpg",
    category: 1
  },{
    id:5,
    name: "Hunter - The Bad Batch",
    price: "21.00",
    photo_url: "img/star-wars/2784159264.jpg",
    category: 1
  },{
    id:6,
    name: "Omega - Special Edition - The Bad Batch",
    price: "21.00",
      photo_url: "img/star-wars/2830622480.jpg",
    category: 1
  },{
    id:7,
    name: "Dodoria - Convention Limited Edition",
    price: "25.00",
    photo_url: "img/dragon-ball/3111039438.jpg",
    category: 2
  },{
    id:8,
    name: "Keychain Goku Kamehameha - Special Edition",
    price: "15.00",
    photo_url: "img/dragon-ball/2842396523.jpg",
    category: 2
  },{
    id:9,
    name: "Goku SSJ - GITD - Entertainment Earth Exclusive",
    price: "18.00",
    photo_url: "img/dragon-ball/1630681167.jpg",
    category: 2
  },{
    id:10,
    name: "Goku Super Saiyan 2 - Previews Exclusive",
    price: "18.00",
    photo_url: "img/dragon-ball/2996484704.jpg",
    category: 2
  },{
    id:11,
    name: "Vegito",
    price: "18.00",
    photo_url: "img/dragon-ball/3076049830.jpg",
    category: 2
  },{
    id:12,
    name: "child Vegeta",
    price: "18.00",
    photo_url: "img/dragon-ball/2848186459.jpg",
    category: 2
  },{
    id:13,
    name: "Scarlet Witch - Wandavision",
    price: "18.00",
    photo_url: "img/diversos/2284214116.jpg",
    category: 3
  },{
    id:14,
    name: "Halloween Vision - Wandavision",
    price: "18.00",
    photo_url: "img/diversos/2445028140.jpg",
    category: 3
  },{
    id:15,
    name: "Keychain Pennywise w/beaver hat - It Chapter 2",
    price: "18.00",
    photo_url: "img/diversos/1632324589.jpg",
    category: 3
  },{
    id:16,
    name: "Superman Black Suit - Zack Snyder Justice League",
    price: "18.00",
    photo_url: "img/diversos/2735267648.jpg",
    category: 3
  },{
    id:17,
    name: "Batman - The Batman",
    price: "18.00",
    photo_url: "img/diversos/3061813140.jpg",
    category: 3
  },{
    id:18,
    name: "Sub-Zero - GITD - Special Edition",
    price: "18.00",
    photo_url: "img/diversos/2784255014.jpg",
    category: 3
  },{
    id:19,
    name: "Aang with Momo",
    price: "18.00",
    photo_url: "img/diversos/2108261094.jpg",
    category: 3
  },{
    id:20,
    name: "Aang all elements",
    price: "18.00",
    photo_url: "img/diversos/2925678436.jpg",
    category: 3
  },{
    id:21,
    name: "Appa",
    price: "18.00",
    photo_url: "img/diversos/1552804939.jpg",
    category: 3
  },{
    id:22,
    name: "She-Ra - GITD - Specialty Series",
    price: "18.00",
    photo_url: "img/diversos/2079559379.jpg",
    category: 3
  },{
    id:23,
    name: "Brite Bomber",
    price: "18.00",
    photo_url: "img/diversos/1630624284.png",
    category: 3
  },{
    id:24,
    name: "Zuko",
    price: "18.00",
    photo_url: "img/diversos/1552840153.jpg",
    category: 3
  }
];

var productos = document.getElementById('productos')

categories.map(cat => {
  const $items = document.createElement('div');
  $items.classList.add('items-productos');
  const $html = `
    <h2 class="category-title">${cat.name}</h2>
    <div class="items d-grid">
      ${ data.map(product => {
        if(product.category === cat.id){
          return `
              <div class="card scroll-content fadeTop">
                <span class="oferta">Off -10%</span>
                <img src="${product.photo_url}" alt="photo" style="width:100%">
                <div class="card-item-info">
                  <a class="detalles" href="javascript:">${product.name}</a>
                  <p>$ ${product.price}</p>
                  
                  <div class="actions">
                    <button class="btn btn-light d-flex align-items-center justify-content-center w-100">
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

data.map((product, i) => {
    const $items = document.createElement('div');
    $items.classList.add('items');
    const $html = `
              <div class="card ${i >11 ? 'scroll-content fadeTop': ''}">
                <span class="oferta">Off -10%</span>
                <img src="${product.photo_url}" alt="photo" style="width:100%">
                <div class="card-item-info">
                  <h4>${product.name}</h4>
                  <p>$ ${product.price}</p>
                  
                  <div class="actions d-flex align-items-center justify-content-between">
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
