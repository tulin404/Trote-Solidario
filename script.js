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
    let metaKit;
    let metaSuplemento;
    let metaLeite;
    let metaSangue;
 
    
    if (cor == "amarela") {
        metaKit = 54;
    } else if (cor == "cinza") {
        metaKit = 51;
    } else if (cor == "laranja"){
        metaKit = 21;
    } else if (cor == "marrom"){
        metaKit = 88;
    } else if (cor == "preta") {
        metaKit = 60;
    }
    
    if (metaKit % 2 == 0) {
        metaSuplemento = metaKit / 2;
    } else {
        metaSuplemento = (metaKit / 2) + 0.5;
    }
    
    metaLeite = metaKit;
    metaSangue =  metaSuplemento;

    if (kitAlimentacao >= metaKit) {
        pontos = pontos + 5000;
        mostrarMensagem("🎉 Meta de kits atingida!", "sucesso");
        document.getElementById("resultado").innerText = "Pontuação total: " + pontos.toFixed(2) + " pontos.";
    } else if (kitAlimentacao > metaKit) {
        mostrarMensagem("🎉 Meta de kits atingida!", "sucesso");
        pontos = pontos + (kitAlimentacao - metaKit) * (5000 / metaKit);
        document.getElementById("resultado").innerText = "Pontuação total: " + pontos.toFixed(2) + " pontos.";
    } else {
        pontos = pontos + kitAlimentacao * (5000 / metaKit);
        document.getElementById("resultado").innerText = "Pontuação total: " + pontos.toFixed(2) + " pontos.";
    }

    let qtdSuplemento = Number(document.getElementById("qtdeSuplemento").value);
    if (qtdSuplemento >= metaSuplemento) {
        pontos = pontos + 5000;
        mostrarMensagem("🎉 Meta de suplementos atingida!", "sucesso");
        document.getElementById("resultado").innerText = "Pontuação total: " + pontos.toFixed(2) + " pontos.";
    }  else if (qtdSuplemento > metaSuplemento) {
        mostrarMensagem("🎉 Meta de suplementos atingida!", "sucesso");
        pontos = pontos + (qtdSuplemento - metaSuplemento) * (5000 / metaSuplemento);
        document.getElementById("resultado").innerText = "Pontuação total: " + pontos.toFixed(2) + " pontos.";
    } else {
        pontos = pontos + qtdSuplemento * (5000 / metaSuplemento);
        document.getElementById("resultado").innerText = "Pontuação total: " + pontos.toFixed(2) + " pontos.";
    }
    
    let qtdeLeite = Number(document.getElementById("qtdeLeite").value);
    if (qtdeLeite >= metaLeite) {
        pontos = pontos + 5000;
        mostrarMensagem("🎉 Meta de leite atingida!", "sucesso");
        document.getElementById("resultado").innerText = "Pontuação total: " + pontos.toFixed(2) + " pontos.";
    }  else if (qtdeLeite > metaLeite) {
        mostrarMensagem("🎉 Meta de leite atingida!", "sucesso");
        pontos = pontos + (qtdeLeite - metaLeite) * (5000 / metaLeite);
        document.getElementById("resultado").innerText = "Pontuação total: " + pontos.toFixed(2) + " pontos.";
    } else {
        pontos = pontos + qtdeLeite * metaLeite;
        document.getElementById("resultado").innerText = "Pontuação total: " + pontos.toFixed(2) + " pontos.";
    }
    
    let qtdeSangue = Number(document.getElementById("qtdeSangue").value);
    if (qtdeSangue >= metaSangue) {
        pontos = pontos + 5000;
        mostrarMensagem("🎉 Meta de doações de sangue atingida!", "sucesso");
        document.getElementById("resultado").innerText = "Pontuação total: " + pontos.toFixed(2) + " pontos.";
    }  else if (qtdeSangue > metaSangue) {
        pontos = pontos + (qtdeSangue - metaSangue) * (5000 / metaSangue);
        mostrarMensagem("🎉 Meta de doações de sangue atingida!", "sucesso");
        document.getElementById("resultado").innerText = "Pontuação total: " + pontos.toFixed(2) + " pontos.";
    } else {
        pontos = pontos + qtdeSangue * (5000 / metaSangue);
        document.getElementById("resultado").innerText = "Pontuação total: " + pontos.toFixed(2) + " pontos.";
    }

    // alerts criados (conteúdo adicional)
    function mostrarMensagem(texto, tipo) {
        let msg = document.createElement("div");
        msg.innerText = texto;

        msg.classList.add("toast");

        msg.classList.add("sucesso");

        let container = document.getElementById("toast-container");
        container.appendChild(msg);

        setTimeout(() => {
            msg.remove();
        }, 3000);
    }   


}


// DOM - Document Object Model 
// Estrutura de árvores

