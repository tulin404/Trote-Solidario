function churras() {
    let convidados = Number(document.getElementById("convidados").value);
    let total = convidados * 400;
    let totalKg = total / 1000;
    document.getElementById("resultadoCarne").innerHTML = "Total em Kg: " + totalKg.toFixed(2);
}