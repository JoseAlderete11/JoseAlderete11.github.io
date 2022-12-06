function sesion() {
  var user, pass;

  user = document.getElementById("usuario").value;
  pass = document.getElementById("contraseña").value;

  if (
    user == "Maria1203@gmail.com" ||
    (user == "MARIA1203@GMAIL.COM" && pass == "juntosporsiempre") ||
    pass == "JUNTOSPORSIEMPRE"
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
