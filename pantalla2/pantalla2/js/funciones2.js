function mostrarFoto(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("preview").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function registrarHuesped() {
  const nombre = document.getElementById("nombreHuesped").value;
  const correo = document.getElementById("correoHuesped").value;
  const pass = document.getElementById("passwordHuesped").value;
  const msg = document.getElementById("msg-perfil");

  if (nombre && correo && pass) {
    msg.innerText = "Datos guardados correctamente ✅";
    msg.style.color = "green";
  } else {
    msg.innerText = "Complete todos los campos ❌";
    msg.style.color = "red";
  }
}
