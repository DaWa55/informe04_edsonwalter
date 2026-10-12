let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";  
        dots[slideIndex - 1].className += " active";
    }
    
    setTimeout(showSlides, 4000);
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}


// --- LÓGICA DEL FORMULARIO Y LOCALSTORAGE ---
document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;

    const nuevoRegistro = {
        nombre: nombre,
        correo: correo,
        telefono: telefono,
        fecha: new Date().toLocaleString()
    };

    let registros = JSON.parse(localStorage.getItem("registrosWeb")) || [];
    registros.push(nuevoRegistro);
    localStorage.setItem("registrosWeb", JSON.stringify(registros));

    alert("¡Datos guardados exitosamente en la base de datos local (localStorage)!");
    document.getElementById("registroForm").reset();
});