document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');

    function toggleHeaderTRansparency() {
        if (window.scrollY > 0) {
            header.classList.add('transparent');
        } else {
            header.classList.remove('transparent');
        }
    }

    window.addEventListener('scroll', toggleHeaderTRansparency);
});