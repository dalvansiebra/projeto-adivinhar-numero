function verificar () {
    var aleatorio = Math.floor(Math.random() * 6);
    var numeroInserido = document.getElementById("input").value;
    var resultado = document.getElementById("resultado");

    if (aleatorio == numeroInserido) {
        resultado.textContent = `😀 Parabéns, você acertou o número ${aleatorio}! 😀`;
    } else {
        resultado.textContent = `😥 Azar, você não acertou o número ${aleatorio}. 😥`
    }
}