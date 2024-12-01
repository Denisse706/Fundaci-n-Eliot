// Mostrar un popup de bienvenida cuando se carga la página
document.addEventListener("DOMContentLoaded", function() {
    // Crear el popup
    let popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
        <div class="popup-content">
            <h2>¡Bienvenido a Fundación ELIOT!</h2>
            <p>Estamos felices de que estés aquí. ¡Juntos podemos ayudar a muchos perritos y gatitos!</p>
            <a href="adoptar.html" class="btn">Adoptar Ahora</a>
            <button class="close-popup">Cerrar</button>
        </div>
    `;
    // Añadir el popup al body
    document.body.appendChild(popup);

    // Función para cerrar el popup
    document.querySelector(".close-popup").addEventListener("click", function() {
        popup.style.display = "none";
    });
});
// Validación del formulario de donación
document.getElementById("donar-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de inmediato
    
    // Obtener los valores de los campos
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let monto = document.getElementById("monto").value;
    let metodo = document.getElementById("metodo").value;
    let mensajeDiv = document.getElementById("mensaje");

    // Validación de los campos
    if (nombre === "" || email === "" || monto === "" || metodo === "") {
        mensajeDiv.textContent = "Por favor, completa todos los campos.";
        mensajeDiv.style.color = "red";
        mensajeDiv.classList.remove("success");
        mensajeDiv.classList.add("error");
    } else if (monto < 1) {
        mensajeDiv.textContent = "El monto de donación debe ser mayor a 0.";
        mensajeDiv.style.color = "red";
        mensajeDiv.classList.remove("success");
        mensajeDiv.classList.add("error");
    } else {
        mensajeDiv.textContent = `¡Gracias por tu generosa donación de $${monto}! Juntos estamos haciendo la diferencia.`;
        mensajeDiv.style.color = "green";
        mensajeDiv.classList.remove("error");
        mensajeDiv.classList.add("success");

        // Reseteamos el formulario
        document.getElementById("donar-form").reset();
    }
});