document.getElementById("adoptar-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let perrito = document.getElementById("perrito").value;
    let gatito = document.getElementById("gatito").value;
    let mensajeDiv = document.getElementById("mensaje");

    if (nombre === "" || email === "" || perrito === "") {
        mensajeDiv.textContent = "Por favor, completa todos los campos.";
        mensajeDiv.style.color = "red";
    } else {
        mensajeDiv.textContent = "¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.";
        mensajeDiv.style.color = "green";
        document.getElementById("adoptar-form").reset(); 
    }


    if (nombre === "" || email === "" || gatito === "") {
        mensajeDiv.textContent = "Por favor, completa todos los campos.";
        mensajeDiv.style.color = "red";
    } else {
        mensajeDiv.textContent = "¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.";
        mensajeDiv.style.color = "green";
        document.getElementById("adoptar-form").reset(); 
    }
});

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        btn.style.transform = 'scale(1.1)';
    });
    btn.addEventListener('mouseleave', function() {
        btn.style.transform = 'scale(1)';
    });

});
