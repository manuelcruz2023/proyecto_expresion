document.addEventListener('DOMContentLoaded', function () {
    // Cambiar el color del header al hacer clic
    const header = document.querySelector('header');
    header.addEventListener('click', function () {
        header.style.backgroundColor = '#005599';
    });

    // Mostrar/ocultar contenido adicional
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Mostrar más';
    document.querySelector('article').appendChild(toggleButton);

    const extraContent = document.createElement('div');
    extraContent.classList.add('hidden', 'fade-in');
    extraContent.innerHTML = '<p>Contenido adicional que se puede mostrar u ocultar.</p>';
    document.querySelector('article').appendChild(extraContent);

    toggleButton.addEventListener('click', function () {
        if (extraContent.classList.contains('hidden')) {
            extraContent.classList.remove('hidden');
            toggleButton.textContent = 'Mostrar menos';
        } else {
            extraContent.classList.add('hidden');
            toggleButton.textContent = 'Mostrar más';
        }
    });

    // Validación básica de formulario de contacto
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = form.querySelector('#name').value.trim();
            const email = form.querySelector('#email').value.trim();
            const message = form.querySelector('#message').value.trim();

            if (!name || !email || !message) {
                alert('Todos los campos son obligatorios.');
            } else if (!validateEmail(email)) {
                alert('Por favor, introduce un correo electrónico válido.');
            } else {
                alert('Formulario enviado con éxito.');
                form.reset();
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Scroll suave a secciones
    // const navLinks = document.querySelectorAll('nav ul li a');
    // navLinks.forEach(link => {
    //     link.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         const targetId = link.getAttribute('href').split(".")[0];
    //         const targetSection = document.querySelector(`${targetId}`);
    //         if (targetSection) {
    //             window.scrollTo({
    //                 top: targetSection.offsetTop,
    //                 behavior: 'smooth'
    //             });
    //         }
    //     });
    // });

    // Imágenes con efecto de scroll
    const images = document.querySelectorAll('img');
    window.addEventListener('scroll', function () {
        images.forEach(image => {
            if (isElementInViewport(image)) {
                image.classList.add('fade-in');
            }
        });
    });

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
