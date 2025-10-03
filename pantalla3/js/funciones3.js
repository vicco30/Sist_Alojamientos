function mostrarFotoUsuario(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("previewUsuario").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function guardarPerfil() {
  const msg = document.getElementById("msg-perfil-usuario");
  msg.innerText = "Datos actualizados con éxito ✅";
  msg.style.color = "green";
}

function eliminarCuenta() {
  const msg = document.getElementById("msg-perfil-usuario");
  msg.innerText = "Cuenta eliminada ❌";
  msg.style.color = "red";
}
