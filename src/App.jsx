import './App.css'

import ChronosList from './components/ChronosList'

const Description = ()=>{
  return (
    <div>
      <h2>Cronometrar para apender</h2>
      <h3>Descripción:</h3>
      <p>Una simple aplicacion que sirve para crear cronometros. Dichos cronometros se pueden guardar y recuperar.</p>
      <p>La aplicacioón puede servir como ejemplo y punto de partida para desarrollar aplicaciones mas complejas ya que cuenta con conceptos detallados a continuación.</p>
      <ul>
        <li> Vite por la performance. </li>
        <li> React con firebase como única libreria externa.  </li>
        <li> Hooks: useState, useEffect, useFirebase, useTicktimer. </li>
        <li> Los últimos dos hooks fueron creados para mostrar la posibilidad de abstraer la funcionalidad y poder reutilizarlos en otros proyectos</li>
        <li> Generalidades de componentes para reutilización. </li>
        <li> Se muestra como pasar funciones a través de props. </li>
        <li> Variables de entorno. </li>  
      </ul>
    </div>
  )
}

const PersonalLinks = ()=>{
  return (
    <div>
      <div>
      <a href="https://github.com/jferreyradev/generic-chrono/"> Te invito a ver el código del proyecto en github</a>
      </div>
      <div>
      <a href="mailto:joserferreyra@gmail.com">Envíame un correo.</a>
      </div>    
      
    </div>
  )
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Description />
      </header>
      <main>
        <ChronosList></ChronosList>
      </main>
      <footer>
        <PersonalLinks />
      </footer>
    </div>
  )
}

export default App
