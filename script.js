document.getElementById('encrypt-btn').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    //lógica de criptografia

});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    // lógica de descriptografia

});

// Funções para criptografar e descriptografar
function encrypt(text) {
    // Lógica de criptografia
    return text.split('').reverse().join(''); 
}

function decrypt(text) {
    // Lógica de descriptografia
    return text.split('').reverse().join(''); 
}
