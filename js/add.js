import { productsServices } from '../services/products.service.js';

// Obtenemos los valores de la url
let valores = window.location.search;

//Creamos la instancia URLSearchParams para acceder a los valores de la url
let urlParams = new URLSearchParams(valores);

const clearForm = () => {
  document.getElementById('url').value = "";
  document.getElementById('categoria').value = "";
  document.getElementById('producto').value = "";
  document.getElementById('precio').value = "";
  document.getElementById('desProducto').value = "";
}

const validarUrl = (url) => {
  return /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(url);

}

const validateFormAdd = (event) => {

  event.preventDefault();
  
  const url = document.getElementById('url');
  const categoria = document.getElementById('categoria');
  const producto = document.getElementById('producto');
  const precio = document.getElementById('precio');
  const desProducto = document.getElementById('desProducto');
  /*
  if (url.value === "") {
    document.getElementById('error-url').innerHTML = "Por favor, escribe la url de la imagen del producto.";
    url.focus();
    return false;
  }else{
    document.getElementById('error-url').innerHTML = "";
  }

  if (!validarUrl(url.value)) {
    document.getElementById('error-url').innerHTML = "Por favor, escribe una url de imagen válida.";
    url.focus();
    return false;
  }else{
    document.getElementById('error-url').innerHTML = "";
  }
  */
  if (categoria.value === "") {
    document.getElementById('error-categoria').innerHTML = "Por favor, escribe categoría del producto.";
    categoria.focus();
    return false;
  }else{
    document.getElementById('error-categoria').innerHTML = "";
  }

  if (producto.value === "") {
    document.getElementById('error-producto').innerHTML = "Por favor, escribe el nombre del producto.";
    producto.focus();
    return false;
  }else{
    document.getElementById('error-producto').innerHTML = "";
  }

  if (precio.value === "") {
    document.getElementById('error-precio').innerHTML = "Por favor, escribe el precio del producto.";
    precio.focus();
    return false;
  }else{
    document.getElementById('error-precio').innerHTML = "";
  }

  if (desProducto.value === "") {
    document.getElementById('error-desProducto').innerHTML = "Por favor, escribe una descripción del producto.";
    desProducto.focus();
    return false;
  }else{
    document.getElementById('error-desProducto').innerHTML = "";
  }

  let product = {
    id: new Date().getTime(),
    name: producto.value,
    photo_url: url.value,
    category: categoria.value,
    price: precio.value,
    description: desProducto.value,
    discount: false
  }

  if (urlParams.has('id')) {
    product.id = Number(urlParams.get('id'));

    productsServices.editProduct(product)
    .then(res => {
      console.log(res);
      
      notification('Producto actualizado correctamente', 'success');

      setTimeout(() => {
        window.location.href = "./admin.html";
      }, 1500);
      

    }).catch(err => {
      notification('Error al actualizar el producto', 'error');
    })
  } else {
    productsServices.addProduct(product)
    .then(res => {
      notification('Producto actualizado correctamente', 'success');
      // Redireccionamos a la lista de productos
      setTimeout(() => {
        window.location.href = "./admin.html";
      }, 1500);
    }).catch(err => {
      notification('Error al actualizar el producto', 'error');
    })
  }
}

if(urlParams.has('id')){
  const productId = urlParams.get('id');

  productsServices.getProductById(productId)
    .then(res => {
      document.getElementById('url').value = res.photo_url;
      document.getElementById('categoria').value = res.category;
      document.getElementById('producto').value = res.name;
      document.getElementById('precio').value = res.price;
      document.getElementById('desProducto').value = res.description;

      // Agregamos la clase a los label para que se muestre flotante
      document.getElementById('url').classList.add("is-valid");
      document.getElementById('producto').classList.add("is-valid");
      document.getElementById('precio').classList.add("is-valid");
      document.getElementById('desProducto').classList.add("is-valid");
    })
    .catch(err => {
      notification('Error al obtener el producto', 'error');
      console.log(err);
    }) 
}

const form = document.getElementById('formularioProduct');
form.addEventListener('submit', (event) => {
  validateFormAdd(event);
});
