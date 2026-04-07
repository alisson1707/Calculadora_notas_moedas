 document.getElementById("btn").addEventListener("click", calcular);

function calcular(){
    let valor = parseFloat(document.getElementById('valor').value);

    if(isNaN(valor)){
        alert("Digite um valor válido!");
        return;
    }

    let centavos = Math.round(valor * 100);

    let resultado = 'Notas :\n';

    let notas = [10000, 5000, 2000, 1000, 500,200];
    let moedas = [100, 50, 25, 10, 5 ,1];


    for(let nota of notas){
        let qtd  = Math.floor(centavos/nota);
        centavos %= nota;

        resultado += `${qtd} nota(s) de R$ ${(nota/100).toFixed(2)}\n`;
    }

    resultado += "Moedas:\n";

    for(let moeda of moedas){
        let qtd = Math.floor(centavos/ moeda);
        centavos %= moeda;

        resultado += `${qtd} moeda(s) de R$ ${(moeda/100).toFixed(2)}\n`;
    }

    document.getElementById("resultado").innerText = resultado;
}