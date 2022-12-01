const apiKey = '1aa3bb39c3334036a3e8b13aefa463d3'

let txtSearch = document.getElementById('txtSearch')
let btnSearch = document.getElementById('btnSearch')
let gamesPlace = document.getElementById('conteudoJogos')
let page = 1;
let pageSize = 6;

function showGames(data) {
    let saida = ''
    for (let i = 0; i < data.results.length; i++) {
        let jogo = data.results[i]
        let plats = ''

        for (let j = 0; j < jogo.platforms.length; j++) {
            plats += jogo.platforms[j].platform.name + ', '
        }

        saida += `<div class="cardJogos" style="width: 30rem;">
                <img src="${jogo.background_image}" class="card-img-top" alt="...">
                <div class="cardCorpo">
                <h5 class="cardCorpoTitulo"><b>${jogo.name}</b></h5>
                <p class="card-text">Lançamento: ${jogo.released}</p>
                <p class="card-text">Avaliação: ${jogo.rating}</p>
                <p class="card-text">Plataformas: ${plats}</p>
                <a href="https://rawg.io/games/${jogo.id}" target="_blank" class="btn btn-dark">Mais detalhes</a>
            </div>
        </div>`

    }
    gamesPlace.innerHTML = saida
}


function doSearch() {
    let textoPesquisa = txtSearch.value
    let url = `https://api.rawg.io/api/games?key=${apiKey}&search=${textoPesquisa}`

    fetch(url)
        .then((res) => res.json())
        .then(data => showGames(data))
}

document.body.onload = () => {
btnSearch.addEventListener('click', doSearch)
}
