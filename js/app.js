let filtros = { texto: "", categoria: "todas" };

function aplicarFiltros() {
    const lista = document.getElementById("lista");
    const contador = document.getElementById("contador");
    lista.innerHTML = "";

    const filtradas = PALABRAS.filter(p => {
        const coincideTexto = p.palabra.toLowerCase().includes(filtros.texto.toLowerCase());
        const coincideCat = filtros.categoria === "todas" || p.categoria === filtros.categoria;
        return coincideTexto && coincideCat;
    });

    filtradas.forEach(p => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${p.palabra}</strong> (${p.categoria}): ${p.descripcion}`;
        lista.appendChild(li);
    });

    contador.innerText = `Mostrando ${filtradas.length} de ${PALABRAS.length} palabras`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("titulo").innerText = APP_TITULO;
    document.getElementById("subtítulo").innerText = APP_SUBTITULO;
    document.getElementById("version").innerText = APP_VERSION;
    aplicarFiltros();
});