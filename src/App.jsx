import { useState } from 'react'
import './App.css'
import Container from './components/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ract Chronometer</h1>
      </header>
      <main>
        <Container></Container>
      </main>
    </div>
  )
}

export default App
