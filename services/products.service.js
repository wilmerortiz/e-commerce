//const urlServer = 'http://localhost:3000';
const urlServer = 'https://my-json-server.typicode.com/wilmerortiz/api-json-server';

const getCategories = async () => {
  const res = await fetch(urlServer + '/categories');
  const data = await res.json();
  return data;
}

const getProducts = async () => {
  const res = await fetch(urlServer + '/products');
  const data = await res.json();
  return data;
}

const getProductById = async (id) => {
  const res = await fetch(urlServer + '/products/' + id);
  const data = await res.json();
  return data;
}

const  addProduct = async (product) => {
  const res = await fetch(urlServer + '/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  });
  const data = await res.json();
  return data;
}

const editProduct = async (product) => {
  const res = await fetch(urlServer + '/products/' + product.id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  });
  const data = await res.json();
  return data;
}

const deleteProduct = async (id) => {
  const res = await fetch(urlServer + '/products/' + id, {
    method: 'DELETE'
  });
  const data = await res.json();
  return data;
}

export const productsServices = {
  getCategories,
  getProducts,
  getProductById,
  addProduct,
  editProduct,
  deleteProduct
}