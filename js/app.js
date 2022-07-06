const $grande = document.querySelector('.grande')
const $puntos = document.querySelectorAll('.punto')
const $images = document.querySelectorAll('.img')
const $btnLeft = document.getElementById('btn-left')
const $btnRight = document.getElementById('btn-right')

const $arrayPuntos = [...$puntos];
const $arrayImages = [...$images];


$grande.style.width = `${$arrayPuntos.length * 100}%`;

function next(){
  let position = Number(document.getElementById('position').value);
  position++;

  if(position > $arrayPuntos.length - 1){
    position = 0;
  }

  let operacion = position * -(100 / $arrayPuntos.length);
  $grande.style.transform = `translateX(${operacion}%)`;

  $arrayPuntos.map( (punto) => {
    punto.classList.remove('active');
  })

  const punto = document.querySelectorAll('.punto')[position];

  punto.classList.add('active');

  document.getElementById('position').value = position;
}

function prev(){
  let position = Number(document.getElementById('position').value);
  position--;

  if(position <= 0){
    position = $arrayPuntos.length - 1;
  }

  //$grande.style.transition = 'all 1s ease';

  let operacion = position * -(100 / $arrayPuntos.length);
  $grande.style.transform = `translateX(${operacion}%)`;

  $arrayPuntos.map( (punto) => {
    punto.classList.remove('active');
  })

  const punto = document.querySelectorAll('.punto')[position];

  punto.classList.add('active');

  document.getElementById('position').value = position;
}

function notification(message, type){
  const $notification = document.getElementById('notification');
  const $alert = document.createElement('div')

  $alert.classList.add('alert', 'alert-' + type);
  $alert.innerHTML = `
      <p class="alert-text d-flex align-items-center"><span class="material-icons-two-tone mr-1">done</span> ${message}</p>
    `;
    $notification.appendChild($alert);
 
  setTimeout(() => {
    $alert.classList.add('show')
  }, 100);

  setTimeout(() => {
    $alert.classList.add('hide')
  }, 2000);

  setTimeout(() => {
    $alert.remove()
  }, 2500);
}

$arrayPuntos.forEach( (punto, i) => {
  punto.addEventListener('click', () => {

    let position =  i
    let operacion = position * -(100 / $arrayPuntos.length);

    $grande.style.transform = `translateX(${operacion}%)`;

    $arrayPuntos.map( (punto) => {
      punto.classList.remove('active');
    })

    punto.classList.add('active');

    document.getElementById('position').value = position;
  })
})

$arrayImages.map( (img) => {
  img.style.width = `${100 / $arrayImages.length}%`;
})

$btnRight.addEventListener('click', () => {
  next();
})

$btnLeft.addEventListener('click', () => {
  prev();
})

setInterval(() => {
  next();
}, 5000)
