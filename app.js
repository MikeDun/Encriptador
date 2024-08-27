// Selección de elementos del DOM
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const copyBtn = document.getElementById('copy-btn');
const outputContainer = document.getElementById('output-container');
const outputDefault = document.getElementById('output-default');
const outputResult = document.getElementById('output-result');

// Función para validar el texto ingresado
function validateText(text) {
    const regex = /^[a-z\s]*$/;
    return regex.test(text);
}

// Función para encriptar el texto
function encrypt(text) {
    const encryptionRules = [
        { letter: 'e', code: 'enter' },
        { letter: 'i', code: 'imes' },
        { letter: 'a', code: 'ai' },
        { letter: 'o', code: 'ober' },
        { letter: 'u', code: 'ufat' }
    ];

    let encryptedText = text;

    encryptionRules.forEach(rule => {
        const regex = new RegExp(rule.letter, 'g');
        encryptedText = encryptedText.replace(regex, rule.code);
    });

    return encryptedText;
}

// Función para desencriptar el texto
function decrypt(text) {
    const decryptionRules = [
        { code: 'enter', letter: 'e' },
        { code: 'imes', letter: 'i' },
        { code: 'ai', letter: 'a' },
        { code: 'ober', letter: 'o' },
        { code: 'ufat', letter: 'u' }
    ];

    let decryptedText = text;

    decryptionRules.forEach(rule => {
        const regex = new RegExp(rule.code, 'g');
        decryptedText = decryptedText.replace(regex, rule.letter);
    });

    return decryptedText;
}

// Función para mostrar el resultado
function showResult(text) {
    outputText.value = text;
    outputDefault.classList.add('hidden');
    outputResult.classList.remove('hidden');
}

// Función para copiar el texto al portapapeles
function copyToClipboard() {
    outputText.select();
    document.execCommand('copy');
    // Alert temporal para confirmar la copia
    alert('Texto copiado al portapapeles');
}

// Eventos de clic para los botones
encryptBtn.addEventListener('click', () => {
    const text = inputText.value;

    if (text === '') {
        alert('Por favor, ingresa algún texto para encriptar.');
    } else if (!validateText(text)) {
        alert('El texto contiene caracteres no permitidos. Solo se permiten letras minúsculas y sin acentos.');
    } else {
        const encryptedText = encrypt(text);
        showResult(encryptedText);
        inputText.value = '';
    }
});

decryptBtn.addEventListener('click', () => {
    const text = inputText.value;

    if (text === '') {
        alert('Por favor, ingresa algún texto para desencriptar.');
    } else if (!validateText(text)) {
        alert('El texto contiene caracteres no permitidos. Solo se permiten letras minúsculas y sin acentos.');
    } else {
        const decryptedText = decrypt(text);
        showResult(decryptedText);
        inputText.value = '';
    }
});

copyBtn.addEventListener('click', copyToClipboard);
