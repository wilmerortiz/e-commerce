window.addEventListener('scroll', function()  {
  let elements = document.getElementsByClassName('scroll-content');
  let screenSize = window.innerHeight;

        for(var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if(element.getBoundingClientRect().top < screenSize - 150) {

          /**setTimeout( () => {

          }, 500);*/

          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }

      }
});

function showHideCart(){
  const cart = document.getElementById('cart');

  if(cart.classList.contains('show')){
    cart.classList.remove('show');
  }else{
    cart.classList.add('show');
  }
}

const btnShowCart = document.getElementById('btnShowCart')
const btnCloseCart = document.getElementById('btnCloseCart')

if(btnShowCart && btnCloseCart){
  btnShowCart.addEventListener('click', showHideCart)
  btnCloseCart.addEventListener('click', showHideCart)
}

