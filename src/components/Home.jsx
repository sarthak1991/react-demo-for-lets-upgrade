import { Link } from "react-router-dom"

function Home() {
  return (
<>
<p>Go to <Link to={`/about`}>About</Link> </p>
<p>Go to <Link to={`/contact`}>Contact</Link> </p>
    <div>This is Home</div>
    
</>
  )
}

export default Home