const getCategories = JSON.parse(localStorage.getItem("categories"));
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

const validateFormAdd = (e) => {
  e.preventDefault();
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

  let getProducts = JSON.parse(localStorage.getItem("products"));

  let product = {
    id: getProducts.length + 1,
    name: producto.value,
    photo_url: url.value,
    category: categoria.value,
    price: precio.value,
    desProduct: desProducto.value,
    discount: false
  }

  // Verificamos que exista el id del producto para actualizar o crear un nuevo producto en caso no exista
  if(urlParams.has('id')){
    const id = urlParams.get('id');
    // Buscamos el producto por el id
    const product = getProducts.find(producto => parseInt(producto.id) == parseInt(id));
    // Actualizamos el producto
    product.name = producto.value;
    product.photo_url = url.value;
    product.category = categoria.value;
    product.price = precio.value;
    product.desProduct = desProducto.value;

    // Actualizamos el localStorage
    getProducts[getProducts.indexOf(product)] = product;

    localStorage.setItem("products", JSON.stringify(getProducts));
    notification('Producto actualizado correctamente', 'success');

    // Redireccionamos a la lista de productos
    setTimeout(() => {
      window.location.href = "./admin.html";
    }, 1000);

  } else {
    getProducts.push(product);
    localStorage.setItem("products", JSON.stringify(getProducts));

    notification('Producto registrado correctamente', 'success');
    // Redireccionamos a la lista de productos
    setTimeout(() => {
      window.location.href = "./admin.html";
    }, 1000);
  }
}

// verificamos si existe el parametro id en la url y obtenemos los valores del producto de la lista de productos (localStorage)
if(urlParams.has('id')){
  const productId = urlParams.get('id');

  const getProducts = JSON.parse(localStorage.getItem("products"));
  const product = getProducts.find(product => product.id == productId);

  // si existe el parametro id en la url, mostramos los valores del producto en el formulario
  document.getElementById('url').value = product.photo_url;
  document.getElementById('categoria').value = product.category;
  document.getElementById('producto').value = product.name;
  document.getElementById('precio').value = product.price;
  document.getElementById('desProducto').value = product.desProduct;

  // Agregamos la clase a los label para que se muestre flotante
  document.getElementById('url').classList.add("is-valid");
  document.getElementById('producto').classList.add("is-valid");
  document.getElementById('precio').classList.add("is-valid");
  document.getElementById('desProducto').classList.add("is-valid");

}

const btnDoneAdd = document.getElementById('btnDoneAdd');
btnDoneAdd.addEventListener('click', validateFormAdd);
