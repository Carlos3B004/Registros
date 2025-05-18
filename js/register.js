const form = document.getElementById("formularioCliente");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const campos = ["nombre", "apellidos", "cedula", "email", "direccion", "ciudad", "telefono"];
  let valido = true;

  campos.forEach((campo) => {
    const input = document.getElementById(campo); // Obtenemos el input del campo
    const error = document.getElementById("error-" + campo); // Obtenemos el elemento donde se mostrará el error

    // Limpiamos posibles errores anteriores antes de validar
    input.classList.remove("invalid");
    error.textContent = "";
    error.style.display = "none";

    // Si el campo está vacío, mostramos un mensaje de error
    if (input.value.trim() === "") {
      error.textContent = `El campo ${campo} es obligatorio.`; 
      error.style.display = "block"; 
      input.classList.add("invalid"); 
      valido = false;
    }
  });

  // Validación específica para la cédula: debe tener exactamente 10 números
  const cedula = document.getElementById("cedula").value.trim();
  if (cedula && !/^\d{10}$/.test(cedula)) {
    const error = document.getElementById("error-cedula"); // Obtenemos el mensaje de error
    const input = document.getElementById("cedula"); // Obtenemos el campo
    error.textContent = "La cédula debe tener exactamente 10 dígitos."; // Mensaje específico
    error.style.display = "block"; // Mostramos el mensaje
    input.classList.add("invalid"); // Estilo de error
    valido = false; // Formulario no válido
  }

  // Validación del teléfono: también debe tener 10 números
  const telefono = document.getElementById("telefono").value.trim();
  if (telefono && !/^\d{10}$/.test(telefono)) {
    const error = document.getElementById("error-telefono");
    const input = document.getElementById("telefono");
    error.textContent = "El teléfono debe tener exactamente 10 dígitos.";
    error.style.display = "block";
    input.classList.add("invalid");
    valido = false;
  }

  // Validación del correo electrónico con una expresión regular básica
  const email = document.getElementById("email").value.trim();
  if (email && !/^\S+@\S+\.\S+$/.test(email)) {
    const error = document.getElementById("error-email");
    const input = document.getElementById("email");
    error.textContent = "Ingrese un correo electrónico válido.";
    error.style.display = "block";
    input.classList.add("invalid");
    valido = false;
  }

  // Si todas las validaciones pasan, mostramos un mensaje de éxito
  if (valido) {
    alert("Formulario enviado correctamente.");
    // Aquí podrías agregar lógica para enviar los datos al servidor, si lo necesitas
  }
});
