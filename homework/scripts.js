let ulLista = document.querySelector('#lista-conteudo');
let exibir = false;
let lista = [
    "Tenho 28 anos",
    "Iniciei na area de programação em 2022",
    "Moro em Toledo-PR"
];
function percorreLista() {
    for (let posicao = 0; posicao < lista.length; posicao++) {
        let item = document.createElement('li');
        item.innerHTML = lista[posicao];
        ulLista.appendChild(item);
    }
}

document.querySelector('#btn-lista').addEventListener('click', function () {
    if (!exibir) {
        exibir = true;
        percorreLista();
    } else {
        exibir = false;
        document.querySelector('#lista-conteudo').innerHTML = "";
    }
})
