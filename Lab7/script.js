// Отримання форми
let form = document.getElementById("contactForm");



// Обробка submit
form.addEventListener("submit", function (event) {

    event.preventDefault();



    // Отримання значень
    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let message = document.getElementById("message").value;



    // Перевірка полів
    if (name === "" || email === "" || message === "") {

        alert("Заповніть всі поля!");

        return;
    }



    // Привітання
    alert("Дякуємо за повідомлення, " + name + "!");



    // Виведення даних у консоль
    console.log("Ім'я: " + name);

    console.log("Email: " + email);

    console.log("Повідомлення: " + message);

});
}
