document.addEventListener("DOMContentLoaded", () => {
    const controles = document.getElementById("controles");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Buscar palabra...";
    input.addEventListener("input", (e) => {
        filtros.texto = e.target.value;
        aplicarFiltros();
    });
    controles.appendChild(input);
});