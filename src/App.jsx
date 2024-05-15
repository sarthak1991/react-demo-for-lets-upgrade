import {useState} from "React"
import { useEffect } from "react"

// import Button from "./components/Button"
// import { ThemeProvider } from "./context/themeContext"

// import FavPokemonForm from "./components/favPokemonForm"

// import FavPokemonComponent from "./components/favPokemon"

// import ClassComponent from "./components/classComponent"
// import {FunctionComponent} from "./components/functionComponent"


import InternalComponent from "./components/InternalComponent"
import HOCWrapper from "./components/HOCWrapper"

const ComponentWithLoadingIndicator = HOCWrapper(InternalComponent)

const App = () => {

// const [username, setUsername] =  useState("Sarthak")

const [isLoading, setIsLoading] = useState(true)
const [data, setData] = useState(null)

useEffect(() => {
  setTimeout(()=>{
    setIsLoading(false)
    setData("Loaded Data")
    console.log("Loaded the data");
  }, 2000)


}, [])


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

 {/* <ThemeProvider>

<Button></Button>
 </ThemeProvider> */}



Demo HOCs

<ComponentWithLoadingIndicator isLoading={isLoading} data={data} />

  </div>
}

export default App