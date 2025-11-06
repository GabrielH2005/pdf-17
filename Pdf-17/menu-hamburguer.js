// em telas menores (como celulares e tablets)
// ===========================================================
function toggleMenu() {
    let menu = document.getElementById("menu");
    // Alterna a classe "ativo" no elemento selecionado:
    // - Se o menu não tiver a classe "ativo", ela é adicionada (abrindo o menu)
    // - Se já tiver, ela é removida (fechando o menu)
    menu.classList.toggle("ativo");
}
