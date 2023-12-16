// import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const presents = ['bici', 'dino', 'stickers'];

  return (
    <>
      <h1>Regalos:</h1>
      <ul>
        {
            presents.map((present) => (
                <li>
                    {present}
                </li>
            ))
        }
      </ul>
    </>
  )
}

export default App
