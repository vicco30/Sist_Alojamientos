function login() {
    const correo = document.getElementById("correo").value;
    const pass = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");
  
    // Datos simulados
    const user = "desarrollopp75@gmail.com";
    const password = "DesarrollQ75";
  
    if (correo === user && pass === password) {
      alert("Inicio de sesión exitoso");
      errorMsg.style.display = "none";
      window.location.href = "registro.html"; // redirige a otra pantalla simulada
    } else {
      errorMsg.style.display = "block";
    }
  }
  
  function registrar() {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correoRegistro").value;
    const pass = document.getElementById("passwordRegistro").value;
  
    if (nombre && correo && pass) {
      alert("Registro exitoso");
      window.location.href = "registro.html";
    } else {
      alert("Por favor complete todos los campos");
    }
  }
  
  function recuperar() {
    const correo = document.getElementById("correoRecuperar").value;
    const msg = document.getElementById("msg-recuperar");
  
    if (correo) {
      msg.innerText = "Se ha enviado un enlace de recuperación a " + correo;
      msg.style.color = "green";
    } else {
      msg.innerText = "Ingrese un correo válido";
      msg.style.color = "red";
    }
  }

  function validarEmail(email) {
          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return regex.test(email);
      }

      function mostrarResultado(email) {
          const mensajeResultado = document.getElementById('resultado');
          if (validarEmail(email)) {
              mensajeResultado.textContent = 'Email válido';
              mensajeResultado.style.color = 'green';
          } else {
              mensajeResultado.textContent = 'Email no válido';
              mensajeResultado.style.color = 'red';
          }
  }

  