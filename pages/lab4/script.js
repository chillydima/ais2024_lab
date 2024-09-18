document.getElementById("calculateButton").addEventListener("click", function() {
    const income = parseFloat(document.getElementById("income").value);
    const expenses = parseFloat(document.getElementById("expenses").value);

    let resultText = "";

    if (isNaN(income) || isNaN(expenses)) {
        resultText = "Пожалуйста, введите корректные значения.";
    } else {
        const balance = income - expenses;
        if (balance > 0) {
            resultText = "Ваш бюджет в плюсе на: " + balance + " руб.";
        } else if (balance < 0) {
            resultText = "Ваш бюджет в минусе на: " + Math.abs(balance) + " руб.";
        } else {
            resultText = "Ваш бюджет сбалансирован.";
        }
    }

    document.getElementById("result").innerText = resultText;
});

document.getElementById("contactButton").addEventListener("click", function() {
    const contactInfo = document.getElementById("contactInfo");
    contactInfo.classList.toggle("hidden");
});
