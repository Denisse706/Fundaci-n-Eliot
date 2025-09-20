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
    document.body.appendChild(popup);

    // Función para cerrar el popup
    document.querySelector(".close-popup").addEventListener("click", function() {
        popup.style.display = "none";
    });
});


