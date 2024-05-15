import {useState, useEffect} from "react"

function FavPokemonForm() {
    // pokemon State
    const [favPokemon, setFavPokemon] = useState("")
    const [pokemonData, setPokemonData] = useState(null)

    const handleInputChange = event => {
      setFavPokemon(event.target.value)
    }

    const fetchPokemonData = () => {
      if (!favPokemon) return
      fetch(`https://pokeapi.co/api/v2/pokemon/${favPokemon}`)
      .then(res=> res.json())
      .then(data=>{
        console.log(`weight: `);
        console.log(data.weight);
        setPokemonData(data)})
      .catch(err=>console.log(`error while fetching data ${err}`))
    }


    useEffect(() => {
      fetchPokemonData()
    

    }, [])
    



  return (
    <div>
            <label htmlFor="">Enter Your Fav Pokemon:</label>
            <input type="text" value={favPokemon} onChange={handleInputChange} />
            <button type="button" onClick={fetchPokemonData}>Fetch my favorite pokemon</button>

{
  pokemonData && (
    <div>
      <h2>
        {pokemonData.name}
      </h2>
      <p>Weight: {pokemonData.weight}</p>
    </div>
  )
}

    </div>
  )
}

export default FavPokemonForm