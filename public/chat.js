// Clave secreta para encriptación simétrica
const secretKey = 'clave-secreta';

// Función para encriptar un mensaje
function encryptMessage(message) {
    return CryptoJS.AES.encrypt(message, secretKey).toString();
}

// Función para desencriptar un mensaje
function decryptMessage(ciphertext) {
    let bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}

// Función para enviar un mensaje
function sendMessage() {
    let messageInput = document.getElementById('message');
    let message = messageInput.value;
    
    // Encriptar el mensaje
    let encryptedMessage = encryptMessage(message);
    console.log('Mensaje Encriptado:', encryptedMessage);

    // Simular el envío y recepción del mensaje
    receiveMessage(encryptedMessage);

    // Limpiar el campo de entrada
    messageInput.value = '';
}

// Función para recibir un mensaje
function receiveMessage(encryptedMessage) {
    // Desencriptar el mensaje
    let decryptedMessage = decryptMessage(encryptedMessage);
    console.log('Mensaje Desencriptado:', decryptedMessage); 

    // Mostrar el mensaje desencriptado en el chat
    let messagesDiv = document.getElementById('messages');
    let messageElement = document.createElement('div');
    messageElement.textContent = decryptedMessage;
    messagesDiv.appendChild(messageElement);
}
