const NAME_POKE = Document.querySelector('.name_poke')
const NUMBER_POKE = Document.querySelector('.num_poke')
const IMG_POKE = Document.querySelector('.poke_img')
const FORM = Document.querySelector('.forms')
const INPUT = Document.querySelector('.input_search')
const PREV_BTN = Document.querySelector('.pre_btn')
const NEXT_BTN = Document.querySelector('.next_btn')

let id_pokemon = 1

const buscar_pokemon = async (pokemon) => {
    resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu/${pokemon}`)
    if (resposta.status === 200) {
        const info = resposta.json
        return info
    }
}

const mostrar_pokemon = async (pokemon) => {
    const json_pokemon = await buscar_pokemon(pokemon)

    if (json_pokemon) {
        IMG_POKE.src = json_pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    }

}