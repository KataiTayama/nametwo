window.addEventListener('load', function() {
    // Esconde el preloader después de que la página esté cargada
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');

    preloader.style.display = 'none';  // Oculta el preloader
    mainContent.style.display = 'block';  // Muestra el contenido principal
});
