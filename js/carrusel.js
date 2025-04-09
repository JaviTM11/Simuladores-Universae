let currentImageIndex = 0;
let images = [];

// Obtener dinámicamente todas las imágenes del contenedor
function initializeCarousel() {
    const imageElements = document.querySelectorAll('.imagenes img');
    images = Array.from(imageElements).map(img => img.src);
}

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");

function openModal(index) {
    // Inicializar el carrusel cuando se abre el modal
    initializeCarousel();
    modal.style.display = "flex";
    currentImageIndex = index;
    showImage(currentImageIndex);
}

function showImage(index) {
    modalImg.src = images[index];
}

// Cerrar modal
document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = "none";
});

// Navegación
document.querySelector('.prev').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
});

document.querySelector('.next').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
});

// Cerrar con Escape
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        modal.style.display = "none";
    }
});