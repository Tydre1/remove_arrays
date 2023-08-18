function listaFormatada(lista) {
    return lista.join(", ");
}

let listaDeCompras = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: [],
};

while (true) {
    let desejo = prompt("Deseja colocar alguma coisa no seu carrinho? Sim ou Não?");

    if (desejo == "sim") {
        let comidaInserida = prompt("Qual comida você deseja inserir?");
        let qualCategoria = prompt('Em qual categoria ela se encaixa: frutas, laticínios, congelados, doces.');

        if (qualCategoria == "frutas") {
            listaDeCompras.frutas.push(comidaInserida);
        } else if (qualCategoria == "laticínios") {
            listaDeCompras.laticinios.push(comidaInserida);
        } else if (qualCategoria == "congelados") {
            listaDeCompras.congelados.push(comidaInserida);
        } else if (qualCategoria == "doces") {
            listaDeCompras.doces.push(comidaInserida);
        } else {
            alert("Categoria Inválida");
        }
    } else if (desejo == "não") {
        let listaFormatadaText = `Frutas: ${listaFormatada(listaDeCompras.frutas)}\n` +
                                 `Laticínios: ${listaFormatada(listaDeCompras.laticinios)}\n` +
                                 `Doces: ${listaFormatada(listaDeCompras.doces)}\n` +
                                 `Congelados: ${listaFormatada(listaDeCompras.congelados)}`;
    
        let listaCompleta = `Lista de Compras:\n${listaFormatadaText}`;
        alert(listaCompleta);
        break;
    } else {
        alert("Resposta inválida. Por favor, responda 'Sim' ou 'Não'.");
    }
}

// provavelmente usar o splice - após mostrar a lista para pessoa perguntar se ela quer remover algum item/elemento da lista/array
// e dai terminar com um "Muito bem! Agora vá as compras!"
