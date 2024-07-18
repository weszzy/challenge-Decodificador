// função pra criptografar

document.getElementById('criptografar-btn').addEventListener('click', function () {
    const inputText = document.getElementById('input-text').value;
    if (validateInput(inputText)) {
        const textoCriptografado = criptografar(inputText);
        displayOutput(textoCriptografado);
        showCopyButton(); // botão de copiar
    } else {
        displayOutput('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D7E4C0" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z"></path></svg> Use apenas letras minúsculas e sem acentos ou caracteres especiais.');
    }
});

// função pra descriptografar

document.getElementById('descriptografar-btn').addEventListener('click', function () {
    const inputText = document.getElementById('input-text').value;
    if (validateInput(inputText)) {
        const textoDescriptografado = descriptografar(inputText);
        displayOutput(textoDescriptografado);
        showCopyButton(); // botão de copiar
    } else {
        displayOutput('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D7E4C0" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z"></path></svg> Use apenas letras minúsculas e sem acentos ou caracteres especiais.');
    }
});

// regras para criptografia e descriptografia

function criptografar(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function descriptografar(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function validateInput(texto) {
    return /^[a-z\s]*$/.test(texto);
}



function displayOutput(mensagem) {
    const outputSection = document.querySelector('.output-section');
    outputSection.style.display = 'block';
    outputSection.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="105" height="105" fill="#D7E4C0" viewBox="0 0 256 256">
            <path d="M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,51,52.82,94a87.09,87.09,0,0,0-12.76,49c.57,15.92,5.21,32,13.79,47.85l-19.51,19.5a8,8,0,0,0,11.32,11.32l19.5-19.51C81,210.73,97.09,215.37,113,215.94q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C205,177.18,227.93,116.21,223.45,40.07ZM153.75,189.5c-22.75,13.78-49.68,14-76.71.77l88.63-88.62a8,8,0,0,0-11.32-11.32L65.73,179c-13.19-27-13-54,.77-76.71,22.09-36.47,74.6-56.44,141.31-54.06C210.2,114.89,190.22,167.41,153.75,189.5Z"></path>
        </svg>
        <p>${mensagem}</p>
        <button class="copiar-btn" onclick="copyToClipboard('${mensagem}')">Copiar</button>
    `;
}

function showCopyButton() {
    const copyButton = document.querySelector('.copiar-btn');
    if (copyButton) {
        copyButton.style.display = 'block';
    }
}

// alert pra quando um texto for copiado

function copyToClipboard(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado!');
    }).catch(err => {
        console.error('Erro ao copiar o texto: ', err);
    });
}

// sessão de output aparacer ao iniciar a tela e não mostrar botão de copiar

document.querySelector('.output-section').style.display = 'initial';
