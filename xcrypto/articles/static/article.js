function checkTelegramMiniApp() {
    if (typeof Telegram !== "undefined" && Telegram.WebApp) {
        const initDataUnsafe = Telegram.WebApp.initDataUnsafe; // Получение данных пользователя
        const userId = initDataUnsafe.user?.id; // Идентификатор пользователя
        const validIDs = [7919628682, 256365981, 1769620662, 1406114177]; // Здесь можно добавить допустимые ID
        if (userId && validIDs.includes(userId)) {
            // Если пользователь допустим, выполняем редирект
        } else {
            window.location.href = "https://laftonexchange.github.io/xcrypto/head.html"; // Редирект для недопустимых пользователей
        }
    } else {
        window.location.href = "https://laftonexchange.github.io/xcrypto/head.html"; // Редирект, если WebApp недоступен
    }
}

document.addEventListener('DOMContentLoaded', checkTelegramMiniApp);
