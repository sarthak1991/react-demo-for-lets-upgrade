import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";




function Button() {
    const {theme} = useContext(ThemeContext)
  return (
    <div 
    style={{
        // ternary expression. I am assuming you learnt this in Javascript. 
        // Think of it as Simple if conditional. 
        backgroundColor: theme === "light"? "white": "black",
        color: "orange"
    }}
     >Click Here</div>
  )
}

export default Button