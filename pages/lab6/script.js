// Модальное окно контактов
const modal = document.getElementById("contacts-modal");
const btn = document.getElementById("contacts-button");
const span = document.getElementsByClassName("close")[0];

// Открыть модальное окно
btn.onclick = function() {
    modal.style.display = "flex";
}

// Закрыть модальное окно
span.onclick = function() {
    modal.style.display = "none";
}

// Закрыть модальное окно при клике вне окна
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Обработчик формы для добавления показателя
document.getElementById('add-indicator-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Получаем данные из формы
    const name = document.getElementById('name').value;
    const value = document.getElementById('value').value;
    const year = document.getElementById('year').value;

    // Добавляем строку в таблицу
    const table = document.getElementById('indicators-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.innerHTML = `<td>${name}</td><td>${value}</td><td>${year}</td><td><button class="delete-btn">Удалить</button></td>`;

    // Очищаем форму
    document.getElementById('add-indicator-form').reset();

    // Добавляем событие на кнопку "Удалить"
    newRow.querySelector('.delete-btn').addEventListener('click', function() {
        table.deleteRow(newRow.rowIndex - 1);
    });
});
