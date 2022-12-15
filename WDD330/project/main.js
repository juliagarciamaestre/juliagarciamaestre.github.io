
const pokemonContainer = document.querySelector('.pokemon-container');
const searchForm = document.querySelector('#searchPokemon');
const result = document.querySelector('.single-pokemon');
const favs = document.querySelector('.favorites-pokemon');
function getJSON(url){
    return fetch(url)
        .then(function(response){
            if (!response.ok){
                throw Error(response.statusText);
            }else{
                return response.json();//return an html response object
            }
        })
        .catch(function(error){
            console.log(error);
        });
}

function getPokemon(id){
    getJSON(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(function(data){
            console.log(data);

            //Create a div
            let pokemonInfo = document.createElement('div');
            pokemonInfo.classList.add('result');
            result.appendChild(pokemonInfo);

            //Display the number of the pokemon
            let number = document.createElement('p');
            number.textContent = '#' + data.id;
            pokemonInfo.appendChild(number);

            //Display the name of the pokemon
            let name = document.createElement('h3');
            name.textContent = data.name;
            // console.log(name);

            pokemonInfo.appendChild(name);


            //Display the image of the pokemon
            let image = document.createElement('img');
            image.src = data.sprites.front_default;

            pokemonInfo.appendChild(image);

            //Add button div
            let buttons = document.createElement('div');
            buttons.classList.add('buttons');
            pokemonInfo.appendChild(buttons);
            

            //Add button to ad to favorites
            let favorite = document.createElement('button');
            favorite.textContent = "Add to favorites";
            buttons.appendChild(favorite);

            favorite.addEventListener('click', e=>{
                e.preventDefault();
                let pokemonFav = document.createElement('div');
                pokemonFav.classList.add('favorites');
                

                pokemonFav.appendChild(name);
                pokemonFav.appendChild(number);
                pokemonFav.appendChild(image);
                buttons.removeChild(favorite);
                favs.appendChild(pokemonFav);
                result.removeChild(pokemonInfo);

            })

                //Erase search 
                let erase = document.createElement('button');
                erase.textContent = 'X';
                buttons.appendChild(erase);

            pokemonContainer.appendChild(result);
                
            erase.addEventListener('click', e=>{
                e.preventDefault();
                result.removeChild(pokemonInfo);
            })
        })
}


//Search Pokemon by Id
searchForm.addEventListener('submit', e =>{
    e.preventDefault();
    let searchPokemon = document.getElementById('pokemon').value;
    getPokemon(searchPokemon, true);
})



