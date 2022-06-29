const validateFormAdd = (e) => {
  e.preventDefault();
  const url = document.getElementById('url');
  const categoria = document.getElementById('categoria');
  const producto = document.getElementById('producto');
  const precio = document.getElementById('precio');
  const desProducto = document.getElementById('desProducto');


  if (url.value === "") {
    document.getElementById('error-url').innerHTML = "Por favor, escribe la url de la imagen del producto.";
    url.focus();
    return false;
  }else{
    document.getElementById('error-url').innerHTML = "";
  }

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

  return true; //Se pueden enviar los datos del formulario al servidor
}

const btnDoneAdd = document.getElementById('btnDoneAdd');
btnDoneAdd.addEventListener('click', validateFormAdd);
