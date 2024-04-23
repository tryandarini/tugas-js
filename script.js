// script.js

// Ketika DOM telah dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Menampilkan pesan "Selamat Datang di Website Saya"
    alert("Selamat Datang di Website Saya");
});

// galleryScript.js

// Menambahkan event listener untuk setiap foto pada galeri
const fotoContainers = document.querySelectorAll('.foto-container');

fotoContainers.forEach(container => {
    container.addEventListener('click', function() {
        const imageSrc = this.querySelector('img').getAttribute('src');
        alert("Anda mengklik gambar: " + imageSrc);
    });
});
