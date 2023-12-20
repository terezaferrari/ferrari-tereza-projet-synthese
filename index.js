let currentTypo = '0';

function onTextChange(text) {
    let textArea = document.getElementById('textAreaResult');
    textArea.value = text;
}

function onRadioButtonChange(value) {
    currentTypo = value;

    updateClass();
}

function updateClass() {
    let textArea = document.getElementById('textAreaResult');

    if (currentTypo === '1') {
        textArea.classList.replace("original-typo", "alternative-typo");

    } else {
        textArea.classList.replace("alternative-typo", "original-typo");
    }
}

