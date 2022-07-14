var emailLocal = 'admin@gmail.com';
var passwordLocal = 'admin123';

function login(email, password){
  
  if(email === emailLocal && password === passwordLocal){
    alert("Redireccionando...");

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    window.open('admin.html', '_self');

  }else{
    alert("Datos ingresados son incorrecto");
  }

}

const validateFormLogin = (e) => {
  e.preventDefault();
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

// Redicerción a la página de admin en caso exista una sesión iniciada
function readirecAdmin(){
  const emailSession = localStorage.getItem('email', email);
  const passwordSession = localStorage.getItem('password', password);

  if(emailSession === emailLocal && passwordSession === passwordLocal){
    window.open('admin.html', '_self');
  }
}

const submitBtnLogin = document.getElementById('btnDoneLogin');
if(submitBtnLogin){
  submitBtnLogin.addEventListener('click', validateFormLogin);
}

readirecAdmin();