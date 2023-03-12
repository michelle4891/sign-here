import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import pdfjsLib from 'pdfjs-dist';

function App() {
  const [count, setCount] = useState(0)
  // const fileInput = document.getElementById('file-input');
  // const file = fileInput.files[0];
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(e.target.input.files[0])
    console.log("submitted")
  }
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
        <input name = "input" type="file" className="file-input w-full max-w-xs" />
        <button type = "submit" className='btn'>Submit</button>
        </form>
          
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
