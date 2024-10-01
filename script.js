let paginaAtual = 0;
const paginas = document.querySelectorAll(".personagem-page");

function mostrarPagina(indice) {
    paginas.forEach((pagina, i) => {
        pagina.style.display = i === indice ? "flex" : "none";
    });
}

function esquerdaPersonagem() {
    if (paginaAtual > 0) {
        paginaAtual--;
        mostrarPagina(paginaAtual);
    }
}

function direitaPersonagem() {
    if (paginaAtual < paginas.length - 1) {
        paginaAtual++;
        mostrarPagina(paginaAtual);
    }
}

// Mostrar a primeira página ao carregar
mostrarPagina(paginaAtual);
