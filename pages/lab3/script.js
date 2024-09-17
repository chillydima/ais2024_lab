document.addEventListener('DOMContentLoaded', () => {
    // Обработчик для кнопки "Контакты"
    const contactButton = document.getElementById('contact-button');
    const contactModal = document.getElementById('contact-modal');
    const closeButton = document.querySelector('.close-button');

    contactButton.addEventListener('click', (e) => {
        e.preventDefault();
        contactModal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        contactModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == contactModal) {
            contactModal.style.display = 'none';
        }
    });

    // Кнопка "Наверх"
    const scrollTopButton = document.getElementById('scroll-top-button');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});