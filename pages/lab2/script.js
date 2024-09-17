// Обработка кнопки "Вернуться на главную"
document.getElementById('backBtn').addEventListener('click', function() {
    window.location.href = 'index.html'; // Перенаправление на главную страницу
});

// Взаимодействие с кнопками аренды
const rentButtons = document.querySelectorAll('.rent-btn');
rentButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Фильм добавлен в вашу корзину для аренды!');
    });
});
