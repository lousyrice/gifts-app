document.getElementById("gift-btn").addEventListener("click", function() {
    if (window.Telegram && Telegram.WebApp) {
        Telegram.WebApp.showAlert("Подарок получен!");
    } else {
        alert("Откройте мини-приложение в Telegram!");
    }
});