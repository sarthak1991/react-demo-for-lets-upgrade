// import {useState} from "React"

import Button from "./components/Button"
import { ThemeProvider } from "./context/themeContext"

// import FavPokemonForm from "./components/favPokemonForm"

// import FavPokemonComponent from "./components/favPokemon"

// import ClassComponent from "./components/classComponent"
// import {FunctionComponent} from "./components/functionComponent"




const App = () => {

// const [username, setUsername] =  useState("Sarthak")

  return <div className="" >
    {/* Lets upgrade React Class, {} */}
    {/* <div>
    <ClassComponent>    </ClassComponent>
    </div>

    <div>
      <FunctionComponent hoobaloo = "Batra"></FunctionComponent>
    </div> */}

{/* <FavPokemonComponent></FavPokemonComponent>
 */}

 {/* <FavPokemonForm></FavPokemonForm> */}

 <ThemeProvider>

<Button></Button>
 </ThemeProvider>
  </div>
}

export default App