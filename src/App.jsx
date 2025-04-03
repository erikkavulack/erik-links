import './App.css'
import { FaGithub } from "react-icons/fa";

function App() {

  return (
    <div className='container-app'>
      <h1>Links Top</h1>

      <a href="https://github.com/erikkavulack" className='links' target='_blank'>
      <FaGithub />
      Github
      </a>

    </div>
  )
}

export default App
