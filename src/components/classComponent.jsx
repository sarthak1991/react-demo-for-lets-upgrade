// import {Component} from "react"
import {useState} from "react"

const ClassToFunctionalComponent = () => {
   const  [count, setCount] = useState(0)

   const handleClick = ()=> {
    setCount(count+1)
   }
   
    return     <>
                Class Component - Counter: {count}
                <div>
                 <button onClick={handleClick}>Increment</button>
                </div>
                 </>
}

export default ClassToFunctionalComponent