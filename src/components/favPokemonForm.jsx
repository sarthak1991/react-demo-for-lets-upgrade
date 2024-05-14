import {useState} from "react"

function FavPokemonForm() {
    // pokemon State
    const [favPokemon, setFavPokemon] = useState("")

    const favPokemonHandler = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${favPokemon}`)
      .then(res=> res.json())
      .then(data=> {
        console.log(`The data we got is here`);
        console.log(data);
        setFavPokemon(data)
      })
    }

    // preventDefault function comes from the event object
    const setPokemonHandler = event => {
        event.preventDefault()
        setFavPokemon(event.target.value)
    }

  return (
    <div>
            <label htmlFor="">Enter Your Fav Pokemon:</label>
            <input type="text" value={favPokemon} onChange={setPokemonHandler} />
            <button type="button" onClick={favPokemonHandler}>Fetch my favorite pokemon</button>


    </div>
  )
}

export default FavPokemonForm