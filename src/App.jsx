import './App.css'
import NavBar from './components/NavBar'
import { Hero } from './components/Hero'
import Carusel from './components/Carusel'
import Productos from './components/Productos'

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <main className='px-20'>
        <Carusel />
        <Productos />
      </main>
    </>
  )
}

export default App
