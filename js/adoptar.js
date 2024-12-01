// Validación del formulario de adopción
document.getElementById("adoptar-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de inmediato
    
    // Obtener los valores de los campos del formulario
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let perrito = document.getElementById("perrito").value;
    let gatito = document.getElementById("gatito").value;
    let mensajeDiv = document.getElementById("mensaje");

    // Validación
    if (nombre === "" || email === "" || perrito === "") {
        mensajeDiv.textContent = "Por favor, completa todos los campos.";
        mensajeDiv.style.color = "red";
    } else {
        mensajeDiv.textContent = "¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.";
        mensajeDiv.style.color = "green";
        document.getElementById("adoptar-form").reset(); // Reinicia el formulario
    }

    // Validación
    if (nombre === "" || email === "" || gatito === "") {
        mensajeDiv.textContent = "Por favor, completa todos los campos.";
        mensajeDiv.style.color = "red";
    } else {
        mensajeDiv.textContent = "¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.";
        mensajeDiv.style.color = "green";
        document.getElementById("adoptar-form").reset(); // Reinicia el formulario
    }
});
// Agregar efecto hover a los botones de acción
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        btn.style.transform = 'scale(1.1)';
    });
    btn.addEventListener('mouseleave', function() {
        btn.style.transform = 'scale(1)';
    });
});