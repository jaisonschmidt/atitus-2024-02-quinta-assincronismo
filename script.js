const clock = document.getElementById('clock');

function updateClock() {
    // cria uma nova instância de Date
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);