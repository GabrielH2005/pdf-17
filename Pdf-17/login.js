function fazerLogin() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const msgErro = document.getElementById("mensagem-erro");

    if (email === "admin@email.com" && senha === "admin") {
        window.location.href = "home.html";
    } else {
        msgErro.textContent = "E-mail ou senha incorretos!";
    }
}
