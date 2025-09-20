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

document.addEventListener("scroll", function() {
    const pareja1Img = document.querySelector(".pareja1-card img");
    const pareja2Img = document.querySelector(".pareja2-card img");
    const testimonios = document.querySelectorAll('.testimonio');
    const viewportHeight = window.innerHeight;

    if (pareja1Img) {
        const rect1 = pareja1Img.getBoundingClientRect();
        if (rect1.top < viewportHeight * 0.8) {
            pareja1Img.classList.add('visible');
        }
    }

    if (pareja2Img) {
        const rect2 = pareja2Img.getBoundingClientRect();
        if (rect2.top < viewportHeight * 0.8) {
            pareja2Img.classList.add('visible');
        }
    }

    testimonios.forEach(testimonio => {
        const rect = testimonio.getBoundingClientRect();
        if (rect.top < viewportHeight * 0.8) {
            testimonio.style.transform = "translateY(0)";
            testimonio.style.opacity = 1;
        } else {
            testimonio.style.transform = "translateY(30px)";
            testimonio.style.opacity = 0;
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const pareja1Img = document.querySelector(".pareja1-card img");
    const pareja2Img = document.querySelector(".pareja2-card img");
    const testimonios = document.querySelectorAll('.testimonio');

    if (pareja1Img) {
        pareja1Img.classList.remove('visible');
    }

    if (pareja2Img) {
        pareja2Img.classList.remove('visible');
    }

    testimonios.forEach(testimonio => {
        testimonio.style.transform = "translateY(30px)";
        testimonio.style.opacity = 0;
    });

});
