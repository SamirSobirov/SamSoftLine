document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('#benefits .title, #benefits .col-md-6');

    function checkVisibility() {
        const triggerPoint = window.innerHeight * 0.8;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerPoint) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});


document.addEventListener('DOMContentLoaded', function () {
    const services = document.querySelectorAll('.service, .title, .dark');

    function checkVisibility() {
        const triggerPoint = window.innerHeight * 0.8;

        services.forEach(service => {
            const serviceTop = service.getBoundingClientRect().top;
            if (serviceTop < triggerPoint) {
                service.classList.add('visible');
            } else {
                service.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); 
});