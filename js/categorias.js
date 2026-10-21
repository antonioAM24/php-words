document.addEventListener("DOMContentLoaded", () => {
    const controles = document.getElementById("controles");
    const select = document.createElement("select");
    
    const opciones = ["todas", ...new Set(PALABRAS.map(p => p.categoria))];
    opciones.forEach(cat => {
        const opt = document.createElement("option");
        opt.value = cat;
        opt.textContent = cat;
        select.appendChild(opt);
    });

    select.addEventListener("change", (e) => {
        filtros.categoria = e.target.value;
        aplicarFiltros();
    });
    controles.appendChild(select);
});