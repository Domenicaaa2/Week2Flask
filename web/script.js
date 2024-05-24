let targetNumber = Math.floor(Math.random() * 10) + 1; // Wählt eine Zahl zwischen 1 und 10

function checkGuess() {
    const inputNumber = parseInt(document.getElementById('numberInput').value);
    const feedback = document.getElementById('feedback');

    if (!isNaN(inputNumber)) {
        if (inputNumber < 1 || inputNumber > 10) {
            feedback.textContent = 'Bitte geben Sie eine Zahl zwischen 1 und 10 ein.';
        } else if (inputNumber < targetNumber) {
            feedback.textContent = '😟 Deine Antwort ist zu niedrig.';
        } else if (inputNumber > targetNumber) {
            feedback.textContent = '😟 Deine Antwort ist zu hoch.';
        } else {
            feedback.textContent = '🙂 Richtig gemacht!';
            // Reset the game
            targetNumber = Math.floor(Math.random() * 10) + 1; // Wählt eine neue Zahl zwischen 1 und 10
            document.getElementById('numberInput').value = ''; // Clear the input box
        }
    } else {
        feedback.textContent = 'Bitte geben Sie eine gültige Zahl ein.';
    }
}
