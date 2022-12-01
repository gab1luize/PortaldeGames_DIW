const apiKey = '1aa3bb39c3334036a3e8b13aefa463d3'

let txtSearch = document.getElementById('txtSearch')
let btnSearch = document.getElementById('btnSearch')
let gamesPlace = document.getElementById('gamesPlace')

function doSearch () {
      let textoPesquisa = txtSearch.value
      let url = `https://api.rawg.io/api/games?key=${apiKey}&search=${textoPesquisa}`

      fetch (url)
         .then((res) => res.json())
         .then(data => {
            let saida = ''
            for(let i = 0; i < data.results.length; i++){
               let jogo = data.results[i]
               saida = saida + `<div class="card col-md-5" style="width: 30rem;">
                  <img src="${jogo.background_image}" class="card-img-top" alt="...">
                  <div class="card-body">
                  <h5 class="card-title"><b>${jogo.name}</b></h5>
                  <p class="card-text">Lançamento: ${jogo.released}</p>
                  <p class="card-text">Avaliação: ${jogo.rating}</p>
                  <a href="https://rawg.io/games/${jogo.id}" target="_blank" class="btn btn-dark">Mais detalhes</a>
               </div>
            </div>`
            }
               gamesPlace.innerHTML = saida
         })
   
   }

document.body.onload = () => {
   btnSearch.addEventListener ('click', doSearch)
}