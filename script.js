const clock = document.getElementById('clock');
const stopButton = document.getElementById('stopButton');
let intervalId;

function updateClock() {
    // cria uma nova instância de Date
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function stopClock() {
    clearInterval(intervalId);
}

// detecta que a pessoa clicou no button de stop clock
stopButton.addEventListener('click', stopClock);

// no onload da página ja atualiza o relogio
updateClock();
intervalId = setInterval(updateClock, 1000);