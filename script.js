function calcular() {
    let qtdeArroz = Number(document.getElementById("qtdeArroz").value); // number é uma função que converte letra em número
    let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value);

    let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8);
    document.getElementById("resultado").innerText = "Pontuação total: " + pontos + " pontos.";
}