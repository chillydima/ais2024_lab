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


    // Обработчик для кнопки "Контакты"
    const schoolButton = document.getElementById('school-button');
    const schoolModal = document.getElementById('school-modal');
    schoolButton.addEventListener('click', (e) => {
        e.preventDefault();
        schoolModal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        schoolModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == schoolModal) {
            schoolModal.style.display = 'none';
        }
    });


    // Обработчик для кнопки "Контакты"
    const collegeButton = document.getElementById('college-button');
    const collegeModal = document.getElementById('college-modal');
    collegeButton.addEventListener('click', (e) => {
        e.preventDefault();
        collegeModal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        collegeModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == collegeModal) {
            collegeModal.style.display = 'none';
        }
    });


    // Обработчик для кнопки "Контакты"
    const uniButton = document.getElementById('uni-button');
    const uniModal = document.getElementById('uni-modal');
    uniButton.addEventListener('click', (e) => {
        e.preventDefault();
        uniModal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        uniModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == uniModal) {
            uniModal.style.display = 'none';
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


