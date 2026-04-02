function calcular() {
    let qtdeArroz = Number(document.getElementById("qtdeArroz").value); // number é uma função que converte letra em número
    let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value);
    let qtdeOleo = Number(document.getElementById("qtdeOleo").value);
    let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value);

    let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeOleo * 4) + (qtdeMacarrao * 2); 
    document.getElementById("resultado").innerText = "Pontuação total: " + pontos + " pontos.";
}


let kitAlimentacao = Number(document.getElementById("kitAlimentacao").value);
if (kitAlimentacao >= 60) {
    pontos = pontos + 5000;
} else if (kitAlimentacao > 60) {
    pontos = pontos + (kitAlimentacao - 60) * 83.3;
} else {
    pontos = pontos + kitAlimentacao * 83.3;
}

let qtdSuplemento = Number(document.getElementById("qtdSuplemento").value);
if (qtdSuplemento >= 30) {
    pontos = pontos + 5000;
}  else if (qtdSuplemento > 30) {
    pontos = pontos + (qtdSuplemento - 30) * 83.3;
} else {
    pontos = pontos + qtdSuplemento * 83.3;
}

let qtdeLeite = Number(document.getElementById("qtdeLeite").value);
if (qtdeLeite >= 30) {
    pontos = pontos + 5000;
}  else if (qtdeLeite > 30) {
    pontos = pontos + (qtdeLeite - 30) * 83.3;
} else {
    pontos = pontos + qtdeLeite * 83.3;
}

let qtdeSangue = Numver(document.getElementById("qtdeSangue").value);
if (qtdeSangue >= 30) {
    pontos = pontos + 5000;
}  else if (qtdeSangue > 30) {
    pontos = pontos + (qtdeSangue - 30) * 83.3;
} else {
    pontos = pontos + qtdeSangue * 83.3;
}

// DOM - Document Object Model 
   // Estrutura de árvores 