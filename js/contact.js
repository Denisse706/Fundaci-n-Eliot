document.addEventListener("DOMContentLoaded", function() {

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
    document.body.appendChild(popup);

    document.querySelector(".close-popup").addEventListener("click", function() {
        popup.style.display = "none";
    });
});
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let tipoConsulta = document.getElementById("tipo-consulta").value;
    let mensaje = document.getElementById("mensaje").value;
    let confirmacionDiv = document.getElementById("mensaje-confirmacion");

    if (nombre === "" || email === "" || mensaje === "") {
        confirmacionDiv.textContent = "Por favor, completa todos los campos.";
        confirmacionDiv.classList.remove("success");
        confirmacionDiv.classList.add("error");
    } else {
        confirmacionDiv.textContent = "¡Gracias por ponerte en contacto con nosotros! Nos comunicaremos contigo pronto.";
        confirmacionDiv.classList.remove("error");
        confirmacionDiv.classList.add("success");

        document.getElementById("contact-form").reset();
    }

});

