// Capturar o tipo de ingresso selecionado
// Capturar quantidade selecionada
// Descontar quantidade selecionada do total disponível
// Se quantidade selecionada maior do que quantidade disponível exibir erro

function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let quantidade = document.getElementById('qtd');
    let palavraIngresso = quantidade.value > 1 ? 'ingressos' : 'ingresso';
    if (isNaN(quantidade.value) || quantidade.value <= 0) {
        alert('Informar uma quantidade desejada válida.');
        quantidade.value = '';
        return;
    }
    let ingressosDisponiveis = document.getElementById(`qtd-${tipoIngresso.value}`);

    if (ingressosDisponiveis.innerText < quantidade.value) {
        alert(`Quantidade (${quantidade.value} ${palavraIngresso}) indisponível para compra`);
        console.log(ingressosDisponiveis.innerText);
        console.log(quantidade.value);
        quantidade.value = '';
        return;
    }
    ingressosDisponiveis.innerHTML = ingressosDisponiveis.innerText - quantidade.value;
    if (tipoIngresso.value == 'pista' ) {
        nomeIngresso = 'Pista';
    } else if (tipoIngresso.value == 'superior') {
        nomeIngresso = 'Cadeira Superior';
    } else {
        nomeIngresso = 'Cadeira Inferior';
    }
    alert(`Compra de ${quantidade.value} ${palavraIngresso} para ${nomeIngresso} realizada com sucesso!`);
    quantidade.value = '';
    
}