import {useState, useEffect} from "react"


const FavPokemonComponent=()=>  {
    const [favPokemon, setFavPokemeon] = useState({
        name:"Loading..."
    })

    const URL = "https://pokeapi.co/api/v2/pokemon/charizard"

    useEffect(() => {
      fetch(URL)
      .then(res=> res.json())
      .then(data=> {
        console.log(`The data we got is here`);
        console.log(data);
        setFavPokemeon(data)
      })
      .catch(err=> console.log(err))
    }, [])
    

  return (
    <div>My fav pokemon is: {favPokemon.name}</div>
  )
}

export default FavPokemonComponent