document.addEventListener('DOMContentLoaded', () => {
    // Сообщение при нажатии на кнопку "Подробнее"
    const moreButton = document.querySelector('.hero .button');
    if (moreButton) {
        moreButton.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Спасибо за интерес! Подробная информация скоро будет доступна.');
        });
    }

    // Всплывающее окно "Контакты"
    const contactButton = document.getElementById('contact-button');
    const contactModal = document.getElementById('contact-modal');
    const closeButton = document.querySelector('.close-button');

    if (contactButton && contactModal) {
        contactButton.addEventListener('click', (e) => {
            e.preventDefault();
            contactModal.style.display = 'block';
        });

        closeButton.addEventListener('click', () => {
            contactModal.style.display = 'none';
        });

        // Закрытие при клике вне окна
        window.addEventListener('click', (event) => {
            if (event.target == contactModal) {
                contactModal.style.display = 'none';
            }
        });
    }

    // Кнопка "Наверх"
    const scrollTopButton = document.getElementById('scroll-top-button');

    // Показать кнопку при прокрутке вниз
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });

    // Плавный скролл наверх при нажатии на кнопку
    if (scrollTopButton) {
        scrollTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});