
function carregarNoticias() {
    let container = document.getElementById("lista-noticias");
    noticias.forEach(noticia => {
        let item = document.createElement("div");

        // Adiciona a classe CSS "noticia" para estilizar cada bloco
        item.classList.add("noticia");
        item.innerHTML = `
            <img src="${noticia.imagem}" alt="${noticia.titulo}">
            <h3>${noticia.titulo}</h3>
            <p>${noticia.resumo}</p>
            <small>Fonte: ${noticia.fonte}</small><br>
            <button onclick="verDetalhes(${noticia.id})">Ler mais</button>
        `;
        container.appendChild(item);
    });
}

function verDetalhes(id) {
    // Salva o ID da notícia
    // qual notícia o usuário escolheu
    localStorage.setItem("noticiaSelecionada", id);
    window.location.href = "detalhes.html";
}
