let buttonsRemove = document.querySelectorAll('.item__btn');
let arrayButtonsRemove = [...buttonsRemove];

window.addEventListener('scroll', function()  {
  let elements = document.querySelectorAll('.scroll-content');
  let screenSize = window.innerHeight;
  for(var i = 0; i < elements.length; i++) {
    var element = elements[i];

    if(element.getBoundingClientRect().top < screenSize - 150) {

      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  }
});

var i = 1000;
function addToCart(url_img, producto, price){
  i++;
  const total = Number(price) * Number(1);
  let html = `<div class="cart__item d-flex align-items-center justify-content-between" id="item-${i}">
            <div class="cart__item--img">
              <img src="${url_img}" alt="producto1" class="cart-img"/>
            </div>
            <div class="item__name">
              <h4>${producto}</h4>
            </div>
            <div class="item__price">
              <p>Precio</p>
              <span class="price">${price}</span>
            </div>
            <div class="item__cantidad">
              <p>Cantidad</p>
              <span class="cantidad">1</span>
            </div>
            <div class="item__total">
              <p>Total</p>
              <span class="total">${total}</span>
            </div>
            <div class="item__btn" onclick="removeItem('${i}')">
              <span class="material-icons">delete_forever</span>
            </div>
          </div>`;

  const $cartItems = document.getElementById('cart__content');
  $cartItems.innerHTML += html;

  totalItemsCart();
}

function showHideCart(){
  const cart = document.getElementById('cart');

  if(cart.classList.contains('show')){
    cart.classList.remove('show');
  }else{
    cart.classList.add('show');
  }
}

function removeItem(index){
  console.log(index)
  const item = document.getElementById(`item-${index}`);
  item.style.opacity = '0';

  setTimeout(() => {
    item.remove();
    totalItemsCart();
  },300)
}

function totalItemsCart(){
  let items = document.querySelectorAll('.cart__item');
  const arrayItems = [...items];
  document.getElementById('cantidadCart').innerText = `${items.length}`;
  let total = 0;
  arrayItems.forEach((item, i) => {
    const price = Number(item.querySelector('div .price').innerText);
    const cantidad = Number(item.querySelector('div .cantidad').innerText);
    total += price * cantidad;
  })
  document.getElementById('totalPagar').innerText = `$ ${total}`;
}

arrayButtonsRemove.forEach((button, index) => {
  button.addEventListener('click', function() {
    removeItem(index + 1);
  })
})

const btnShowCart = document.getElementById('btnShowCart')
const btnCloseCart = document.getElementById('btnCloseCart')

if(btnShowCart && btnCloseCart){
  btnShowCart.addEventListener('click', showHideCart)
  btnCloseCart.addEventListener('click', showHideCart)
}

