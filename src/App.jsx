// import {useState} from "React"
// import { useEffect } from "react"

// import Button from "./components/Button"
// import { ThemeProvider } from "./context/themeContext"

// import FavPokemonForm from "./components/favPokemonForm"

// import FavPokemonComponent from "./components/favPokemon"

// import ClassComponent from "./components/classComponent"
// import {FunctionComponent} from "./components/functionComponent"


// import InternalComponent from "./components/InternalComponent"
// import HOCWrapper from "./components/HOCWrapper"

// const ComponentWithLoadingIndicator = HOCWrapper(InternalComponent)

import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"


import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const App = () => {

// const [username, setUsername] =  useState("Sarthak")

// const [isLoading, setIsLoading] = useState(true)
// const [data, setData] = useState(null)

// useEffect(() => {
//   setTimeout(()=>{
//     setIsLoading(false)
//     setData("Loaded Data")
//     console.log("Loaded the data");
//   }, 2000)


// }, [])


  return (
  
  <Router>
  <div className="" >
Routing Demo

<Routes>
  <Route path="/" exact Component={Home} />
  <Route path="/about" Component={About}/>
  <Route path="/contact" Component={Contact}/>
</Routes>

  </div>
  
  </Router>
  )
}

export default App