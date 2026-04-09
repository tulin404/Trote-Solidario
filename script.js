function calcular() {
    let qtdeArroz = Number(document.getElementById("qtdeArroz").value); // number é uma função que converte letra em número
    let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value);
    let qtdeOleo = Number(document.getElementById("qtdeOleo").value);
    let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value);

    let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeOleo * 4) + (qtdeMacarrao * 2); 
    document.getElementById("resultado").innerText = "Pontuação total: " + pontos + " pontos.";
    // recupera a cor da equipe
    
    let cor = document.getElementById("cor").value;
    let kitAlimentacao = Number(document.getElementById("kitAlimentacao").value);
    let metaProva1;
    
    if (cor == "amarela") {
        metaProva1 = 54;
    } else if (cor == "cinza") {
        metaProva1 = 51;
    } else if (cor == "laranja"){
        metaProva1 = 21;
    } else if (cor == "marrom"){
        metaProva1 = 88;
    } else if (cor == "preta") {
        metaProva1 = 60;
    }
    
    
    if (kitAlimentacao >= metaProva1) {
        pontos = pontos + 5000;
    } else if (kitAlimentacao > metaProva1) {
        pontos = pontos + (kitAlimentacao - metaProva1) * (5000 / metaProva1);
    } else {
        pontos = pontos + kitAlimentacao * (5000 / metaProva1);
    }
    
    let qtdSuplemento = Number(document.getElementById("qtdeSuplemento").value);
    if (qtdSuplemento >= metaProva1) {
        pontos = pontos + 5000;
    }  else if (qtdSuplemento > metaProva1) {
        pontos = pontos + (qtdSuplemento - metaProva1) * (5000 / metaProva1);
    } else {
        pontos = pontos + qtdSuplemento * (5000 / metaProva1);
    }
    
    let qtdeLeite = Number(document.getElementById("qtdeLeite").value);
    if (qtdeLeite >= metaProva1) {
        pontos = pontos + 5000;
    }  else if (qtdeLeite > metaProva1) {
        pontos = pontos + (qtdeLeite - metaProva1) * (5000 / metaProva1);
    } else {
        pontos = pontos + qtdeLeite * metaProva1;
    }
    
    let qtdeSangue = Number(document.getElementById("qtdeSangue").value);
    if (qtdeSangue >= metaProva1) {
        pontos = pontos + 5000;
    }  else if (qtdeSangue > metaProva1) {
        pontos = pontos + (qtdeSangue - metaProva1) * (5000 / metaProva1);
    } else {
        pontos = pontos + qtdeSangue * (5000 / metaProva1);
    }
}


// DOM - Document Object Model 
// Estrutura de árvores

