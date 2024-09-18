// Ожидание загрузки контента
document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы
    var modal = document.getElementById('modal');
    var contactsBtn = document.getElementById('contacts-btn');
    var closeBtn = document.getElementsByClassName('close')[0];

    // Открытие модального окна при клике на кнопку "Контакты"
    contactsBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке
        modal.style.display = 'block'; // Показываем модальное окно
    });

    // Закрытие модального окна при клике на крестик
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none'; // Скрываем модальное окно
    });

    // Закрытие модального окна при клике вне окна
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none'; // Скрываем модальное окно
        }
    });
});
