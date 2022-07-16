import { authService } from '/services/auth.service.js';

const login = async (email, password) =>{
  let isLoggedIn = false;
  await authService.getUsers()
    .then(users => {
      users.map((user) => {
        if(user.email === email && user.password === password){
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
          localStorage.setItem('user', JSON.stringify(user));
          isLoggedIn =  true;
          return true;
        }
      })
    })
    .catch(error => {
      console.log(error);
    })

  console.log(isLoggedIn);

  if(!isLoggedIn){
    notification( 'Usuario o contraseña incorrectos', 'error');
  }else{
    notification( 'Redireccionando...', 'success');
    setTimeout(() => {
      window.open('admin.html', '_self');
      }, 1000)
  }

}

const validateFormLogin = (event) => {
  event.preventDefault();
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  if (email.value === "") {
    document.getElementById('error-email').innerHTML = "Por favor, escribe tu correo electrónico";
    email.focus();
    return false;
  }else{
    document.getElementById('error-email').innerHTML = "";
  }

  if (!emailValido(email.value)) {
    document.getElementById('error-email').innerHTML = "Por favor, escribe un correo electrónico válido";
    email.focus();
    return false;
  }else{
    document.getElementById('error-email').innerHTML = "";
  }

  if (password.value === "") {
    document.getElementById('error-password').innerHTML = "Por favor, escribe tu clave.";
    password.focus();
    return false;
  }else{
    document.getElementById('error-password').innerHTML = "";
  }

  //return true; //Se pueden enviar los datos del formulario al servidor
  //window.open('admin.html', '_self');
  login(email.value, password.value);
}

// Redirección a la página de admin en caso exista una sesión iniciada
function redirectAdmin(key){
  const emailSession = localStorage.getItem('email');
  const passwordSession = localStorage.getItem('password');

  if(emailSession !== null && passwordSession !== null){
    window.open('admin.html', '_self');
  }
}

const formularioLogin = document.getElementById('formularioLogin');
if(formularioLogin){
  formularioLogin.addEventListener('submit', (event) => {
    validateFormLogin(event);
  });
}

redirectAdmin();
