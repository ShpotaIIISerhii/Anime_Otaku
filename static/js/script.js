document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');

    hamburger.addEventListener('click', function(event) {
        sidebar.classList.toggle('active');
        console.log("Sidebar toggled");
        event.stopPropagation(); // Зупиняємо подальше спливання події кліку
    });

    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && event.target !== hamburger && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            console.log("Sidebar closed");
        }
    });

    sidebar.addEventListener('click', function(event) {
        event.stopPropagation(); // Зупиняємо подальше спливання події кліку
    });

    // Обробник подій для закриття бокового меню при кліці на вільній області сторінки
    document.addEventListener('click', function(event) {
        if (sidebar.classList.contains('active')) {
            const isClickInsideSidebar = sidebar.contains(event.target);
            const isClickInsideHamburger = hamburger.contains(event.target);
            if (!isClickInsideSidebar && !isClickInsideHamburger) {
                sidebar.classList.remove('active');
                console.log("Sidebar closed");
            }
        }
    });
});
