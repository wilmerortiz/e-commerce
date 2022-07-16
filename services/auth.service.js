//const urlServer = 'http://localhost:3000';
const urlServer = 'https://my-json-server.typicode.com/wilmerortiz/api-json-server';

const getUsers = async () => {
  const res = await fetch(urlServer + '/users');
  const data = await res.json();
  return data;
}

const getUser = async (id) => {
  const res = await fetch(urlServer + '/users/' + id);
  const data = await res.json();
  return data;
}

const register = async (user) => {
  const res = await fetch(urlServer + '/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const data = await res.json();
  return data;
}

const editUser = async (id) => {
  const res = await fetch(urlServer + '/users/' + id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const data = await res.json();
  return data;
}

export const authService = {
  getUsers,
  getUser,
  register,
  editUser
}
