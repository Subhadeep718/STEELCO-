window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    const mainContent = document.querySelector('main');
    const delay = 2000;

    setTimeout(function () {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        mainContent.style.opacity = '1';
        mainContent.style.visibility = 'visible';
    }, delay);
});