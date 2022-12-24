function sesion() {
  var user, pass;

  user = document.getElementById("usuario").value;
  pass = document.getElementById("contraseña").value;

  if (
    (user == "MARIA1203@GMAIL.COM" && pass == "JUNTOSPORSIEMPRE") ||
    (user == "maria1203@gmail.com" && pass == "juntosporsiempre") ||
    (user == "Maria1203@gmail.com" && pass == "Juntosporsiempre") ||
    (user == "Maria1203@gmail.com" && pass == "juntosporsiempre")
  ) {
    window.location = "Paginas//menu.html";
  } else if (user == "" && pass == "") {
    alert("Rellene los datos");
  } else if (user == "" || pass == "") {
    alert("Falta correo o Contraseña");
  } else {
    alert("Correo o Contraseña incorrecta");
  }
}
var eye = document.getElementById("Eye");
var imput = document.getElementById("contraseña");
eye.addEventListener("click", function () {
  if (imput.type == "password") {
    imput.type = "text";
    eye.style.opacity = 0.8;
  } else {
    imput.type = "password";
    eye.style.opacity = 0.2;
  }
});
